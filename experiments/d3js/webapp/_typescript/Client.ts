///<reference path="jquery.d.ts" />
//module client{

	/*export*/ class ClientBase{
		_url:string;
		_client:any;
		_registry:CallbackRegistry = null;
		_callbacks:any = {
				"open":[],
				"close":[],
				"error":[],
				"message":[],
				"debug":[]
			};

		constructor(options:any){
			if(options.callbacks){
				this._registry = options.callbacks;
			}
		}

		registerCallback(type:string,callback:any){
			var callbacks = this._callbacks[type];
			if(callbacks != null){
				callbacks.push(callback);
			}
		}

		executeCallbacks(type:string, evt:any){
			var callbacks = this._callbacks[type];
			for(var i=0;i<callbacks.length;i++){
				var callback = callbacks[i];
				callback(evt);
			}
		}

		_onOpen(evt){
			this.executeCallbacks("open",evt);
		}

		_onClose(evt){
			this.executeCallbacks("close",evt);
		}

		_onError(evt){
			this.executeCallbacks("error",evt);
		}

		_onMessage(evt){
			//extract operation result
			this.executeCallbacks("message",evt);
			this._registry.run(evt);
			
		}

		_debug(str){
			console.log(str);
			this.executeCallbacks("debug",str);
		}

		close():void{

		}

		send(operation,targetId,methodName,data,headers,destination,callback ):void{

		}
		
		sendRaw(message,callback):void{

		}

		static builCommandOperation(operation,targetId,methodName,data,callback):any {
			var body = {
					"operation":operation,
					"targetId":targetId,
					"methodName":methodName,
					"callback":callback,
					"params":{
						"data":data,
						"len": data.length,
						"count":1
					}
				};
			return body;
		}

		static builCommandMessage(operation,targetId,methodName,data,headers,destination,callback ):string {
			var body = ClientBase.builCommandOperation(operation,targetId,methodName,data,callback);

			var input = {
				"frame": "SEND",
				"headers":{
					"from": "from",
					"to" : "command",
					"correlationId":"correlationId"
				},
				"operations":[
					 body
				]
			};
			input.headers["destination"] = destination;
			if(headers != null){
				for(var k in headers){
					input.headers[k] = headers[k];
				}
			}

			return JSON.stringify(input);
		}
	}

	/*export*/ class WebSocketClient extends ClientBase{

		constructor(options:any){
			super(options);
			this._url = options.url;
			var _this:any = this;

			if ("WebSocket" in window) {
				this._client = new WebSocket(this._url);

			} else if ("MozWebSocket" in window) {
				//this.client = new MozWebSocket(url);

			} else {
				throw("WebSocket is not supported by this browser.");
			}
			// client.heartbeat.outgoing = 20000; // client will send heartbeats every 20000ms
			// client.heartbeat.incoming = 0;     // client does not want to receive heartbeats
			this._client.onopen = function (evt) {
				_this._debug("connected to Stomp");
				_this._onOpen(evt);

			};

			this._client.onclose = function (evt) {
				_this._debug("Command WebSocket Closed");
				_this._onClose(evt);
			};

			// Log errors
			this._client.onerror = function (error) {
				_this._debug("Command WebSocket Error " + error);
				_this._onError(error);

			};

			// Log messages from the server
			this._client.onmessage = function (evt) {
				_this._debug("Server: " + evt.data);
				var result = evt.data;
				try{
					 result = JSON.parse(evt.data);
				}catch(e){
					result = evt.data;
				}

				//call base class
				_this._onMessage(result);
			};
		}

		close():void{
			this._client.close();
		}

		send(operation,targetId,methodName,data,headers,destination,callback):void{
      		if (data != null) {
      			data = data.trim();
				var input = ClientBase.builCommandMessage(operation,targetId,methodName,data,headers,destination,callback);
				this._client.send(input);
			}
		}

		sendRaw(message,callback):void{
			this._client.send(message);
		}
	}

	/*export*/ class AjaxClient extends ClientBase{

		constructor(options:any){
			super(options);
			this._url = options.url;
			var _this:any = this;
		}

		send(operation,targetId,methodName,data,headers,destination,callback):void{
			var _this = this;

      		if (data != null) {
      			data = data.trim();
				var message = ClientBase.builCommandMessage(operation,targetId,methodName,data,headers,destination,callback);
				try{
					$.ajax({
						url: _this._url,
						type: "POST",
						data: message,
						dataType: "text",
						crossDomain :true,
						processData:false,
						beforeSend: function( xhr ) {
								xhr.setRequestHeader("Content-Type","application/json");
							}
					}).done(function( data ) {
						_this._debug("Server: " + data);
						var result = data;
						try{
							result = JSON.parse(data);
						}catch(e){
							result = data;
						}

						_this._onMessage(result);

					}).fail(function(jqXHR, textStatus, errorThrown) {
						_this._debug("Command Error " + errorThrown);
						_this._onError(errorThrown);

					});

				}catch(e){
					_this._debug("Command Error " + e);
					_this._onError(e);
				}
			}
		}
	}
//}

/*export*/ class Main{

	static createWebSocketClient():void{
		var PORT =  "15010";// || APP_PORT ;
		var hostname = window.location.hostname;
		var destination = null;
		var wsClient = null;
		var workflowTree = new WorkflowTree("#body",500,720);

		if('WebSocket' in window || 'MozWebSocket' in window) {
			if(hostname.trim() === ""){
				hostname = "localhost";
			}//*/
			var suffix = window.location.pathname+"ws/api/invoke";
			var url = "ws://"+hostname+":8000"+suffix;
			if(hostname === "localhost"){
				url = "ws://"+hostname+":8080"+suffix;
			}

			$("#connect_url").val(url);

			function _onOpen(evt){
				$("#connect").fadeOut({ duration: "fast" });
				$("#connected").fadeIn();
			}

			function _onClose(evt){
				$("#messages").html("<p>Command WebSocket Closed</p>\n");
				$("#connected").fadeOut({ duration: "fast" });
				$("#connect").fadeIn();
				$("#messages").html("");
				$("#debug").html("");
			}

			function _onError(evt){
				var result = Main.getStringData(evt);
				$("#messages").html("<p>Command WebSocket Error " + result + "</p>\n");
			}

			function _onMessage(evt){
				var result = Main.getStringData(evt);
				$("#messages").html("<p>" +result + "</p>\n");
				_updateStackView(evt);
			}

			function _updateStackView(evt){
				var result = Main.getWorkflowObjectData(evt);
				if(result == null){
					return;
				}
				if((typeof workflowTree != "undefined" ) && (typeof evt["entries"] != "undefined")){
                	workflowTree.show(result);
                }
			}

			function _debug(str){
				console.log(str);
				var log = $("#debug");
				log.append(str + "\n");
				log[0].scrollTop = log[0].scrollHeight - log[0].clientHeight;

			}

			
		
			$("#connect_form").submit(function() {
				var url = $("#connect_url").val();
				var login = $("#connect_login").val();
				var passcode = $("#connect_passcode").val();
				destination = $("#destination").val();

				var callbacks:CallbackRegistry = new CallbackRegistry(null);
				callbacks.add("shellOnMessage",_onMessage);
				wsClient = new WebSocketClient({"url":url,"callbacks":callbacks});

				// from the server
				wsClient.registerCallback("open",_onOpen);
				wsClient.registerCallback("close",_onClose);
				wsClient.registerCallback("error",_onError);
				//wsClient.registerCallback("message",_onMessage);
				wsClient.registerCallback("debug",_debug);

				return false;
			});

			$('#disconnect').click(function() {
				wsClient.close();
				return false;
			});

			$('#btn-send').click(function() {
				var data = $('#send_form_input').val();
				wsClient.send("call",this.id,"send",data,{},destination,"shellOnMessage");
				return false;
			});

			$("#btn-send-cmd").click(function(evt){
				var data = $("#send_form_input").val();
				wsClient.sendRaw(data,"shellOnMessage");
				return false;
			});

		} else {
			$("#connect").html("\
			  <h1>Get a new Web Browser!</h1>\
			  <p>\
			  Your browser does not support WebSockets. This example will not work properly.<br>\
			  Please use a Web Browser with WebSockets support (WebKit or Google Chrome).\
			  </p>\
			");
		}
	}

	static createAjaxClient():void{
		var hostname = window.location.hostname;
		var destination = null;
		//ajaxClient:AjaxClient = null;

		var terminal = null;

    	if(hostname.trim() === ""){
    		hostname = "localhost";
    	}//*/

		var suffix = window.location.pathname+"rest/api/invoke";
    	var url = window.location.href+"rest/api/invoke";
		
		function _onOpen(evt){

		}

		function _onClose(evt){

		}

		function _onMessage(result){
			if(Main.terminal != null){
				Main.terminal.echo(Main.getStringData(result),{
					finalize: function(div) {
						div.css("color", "blue");
					}
				});
			}

		}

		function _fail(error){
			if(Main.terminal != null){
				Main.terminal.echo('Command Error ' + error,{
					finalize: function(div) {
						div.css("color", "red");
					}
				});
			}
		}

		function _onError(error){
			if(Main.terminal != null){
				Main.terminal.echo('Command Error ' + error,{
					finalize: function(div) {
						div.css("color", "red");
					}
				});
			}
		}

		function _debug(str){
			console.log(str);
			var log = $("#debug");
			log.append(str + "\n");
			log[0].scrollTop = log[0].scrollHeight - log[0].clientHeight;

		}
		
		var callbacks:CallbackRegistry = new CallbackRegistry(null);
		callbacks.add("shellOnMessage",_onMessage);
		
		var ajaxClient = new AjaxClient({"url":url,"callbacks":callbacks});
		terminal = Main.initTerminal(ajaxClient);
	
		// from the server
		ajaxClient.registerCallback("open",_onOpen);
		ajaxClient.registerCallback("close",_onClose);
		ajaxClient.registerCallback("error",_onError);
		//ajaxClient.registerCallback("message",_onMessage);
		ajaxClient.registerCallback("debug",_debug);
	}

	static initTerminal(client:AjaxClient):any{
		//var terminal = null;
		var shellinput = [];
		var destination = "vm:/api/invoke/shell";//$("#destination").val();//"vm:/api/invoke/shell";

		function connectTerminal(term){
			console.log('Command Connected');
			term.echo('Command Connected',{
				finalize: function(div) {
					div.css("color", "green");
				}
			});

		}

		function disconnectTerminal(term){

		}

		function islocal(command,term){
			var result = false;
			if (command == 'help') {
				term.echo("available commands are <open>, <close>, <commands>, <bindings>, <help> use 'go' at the end of scripts",{
					finalize: function(div) {
						div.css("color", "green");
					}
				});
				result = true;

			}else if(command == "open"){
				connectTerminal(term);
				shellinput = [];
				result = true;

			}else if(command == "close"){
				disconnectTerminal(term);
				shellinput = [];
				result = true;
			}
			return result;
		}

		$('#console-pane').terminal(function(command, term) {
			//trim command
			Main.terminal = term;

			if (command == 'help') {
				term.echo("available commands are <open>, <help>",{
					finalize: function(div) {
						div.css("color", "green");
					}
				});

			} else if (command == "open") {
				connectTerminal(term);
				term.push(
					function(command, term) {
						command = command.trim();
						var n = command.lastIndexOf("go");
						if (islocal(command,term)) {

						}else if(command === "commands" || command === "bindings" || command === "metrics"){
							term.pause();
							client.send("call","shell","execute",command,null,destination,"shellOnMessage");
							term.resume();
							//reset buffer
							//shellinput = [];

						}else if(command == "go"){
							if(shellinput.length >0){
								command = shellinput.join("\n");
								if (!islocal(command,term)){
									term.pause();
									client.send("call","shell","execute",command,null,destination,"shellOnMessage");
									term.resume();
									//reset buffer
									shellinput = [];
								}
							}

						}else if(n>-1){//ends with go
							command = command.substring(0,n).trim();
							if(command.length >0){
								if (!islocal(command,term)){
									term.pause();
									client.send("call","shell","execute",command,null,destination,"shellOnMessage");
									term.resume();
									//reset buffer
									shellinput = [];
								}
							}

						}else{
							shellinput.push(command);
						}
					}, {
						name: 'groovy',
						prompt: 'groovy> '
					}
				);

			}  else {
				term.echo("unknown command " + command);
			}

		}, {
			greetings: "terminals demo use help to see available commands"
		});

		return Main.terminal;
	}

	static getStringData(evt){
		var result = Main.getObjectData(evt);
		if(result!= null){
			try{
				//format result
				result = JSON.stringify(JSON.parse(result),null,4);
			}catch(e){
				result = JSON.stringify(result,null,4);
			}
		}else{
			if(typeof evt === "object"){
				try{
					//format result
					result = JSON.stringify(JSON.parse(evt),null,4);
				}catch(e){
					result = JSON.stringify(evt,null,4);
				}
				
			}else{
				result = String(evt);
			}
		}
		return result;
	}

	static getObjectData(evt){
		var result = evt;
		if((typeof result === "object") && result.hasOwnProperty("operations")){
			if(result.operations.length && result.operations.length>0 ){
				result = result.operations[0].params.data;
			}

		}else{
			result = null;
		}
		return result;
	}
	
	static getWorkflowObjectData(evt){
		if((typeof evt === "object") && (typeof evt["entries"] != "undefined")){
			return evt;
		}else{
			return null;
		}
	}
	
	static main():void{
		Main.createWebSocketClient();
		Main.createAjaxClient();
	}
	static terminal = null;
}

class CallbackRegistry{
	_callbacks:any = {};

	constructor(options:any){
	}
	
	add(key:string,fn:Function){
		this._callbacks[key] = fn;
	}
	
	get(key:string):Function{
		var fn:Function = this._callbacks[key];
		if(typeof fn === "undefined"){
			fn = null;
		}
		return fn;
	}
	
	run(evt:any){
		if ((typeof evt === "object") && evt.hasOwnProperty("operations")) {
			var operations = evt.operations; 
			if (operations.length && operations.length > 0) {
				for(var i = 0;i < operations.length; i++){
					var operation = operations[i];
					//find the associated callback
					if((typeof operation.callback === "string") || (operation.callback != null )){
						var fn:Function = this.get(operation.callback);
						if(fn != null){
							setTimeout(function(){
								fn(operation.params.data);
							},0);
						}
					}
					
				}
			}
		}
	}
}

$(document).ready(function() {
	Main.main();
});