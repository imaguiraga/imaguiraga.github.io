$(document).ready(function() {

	var client = null, destination = null;

    if('WebSocket' in window || 'MozWebSocket' in window) {

    	var host = window.location.hostname;

    	if(host.trim() === ""){
    		host = "localhost";
    	}//*/

    	var url = "ws://"+host+":8000/ws/api/invoke";
		if(host === "localhost"){
			url = "ws://"+host+":15002/ws/api/invoke";
		}
		$("#connect_url").val(url);

		function _onOpen(evt){
			 $('#connect').fadeOut({ duration: 'fast' });
			  $('#connected').fadeIn();
		}

		function _onClose(evt){
			$("#messages").html("<p>Command WebSocket Closed</p>\n");
			 $('#connected').fadeOut({ duration: 'fast' });
			  $('#connect').fadeIn();
			  $("#messages").html("");
			  $("#debug").html("");
		}

		function _onError(evt){
			$("#messages").html("<p>Command WebSocket Error " + error + "</p>\n");
		}

		function _onMessage(result){
			 $("#messages").html("<p>" +result + "</p>\n");
		}

		function _debug(str){
			 console.log(str);
			 var log = $("#debug");
			  log.append(str + "\n");
			  log[0].scrollTop = log[0].scrollHeight - log[0].clientHeight;

		}

		$('#connect_form').submit(function() {
			var url = $("#connect_url").val();
			var login = $("#connect_login").val();
			var passcode = $("#connect_passcode").val();
			destination = $("#destination").val();

			   // client.heartbeat.outgoing = 20000; // client will send heartbeats every 20000ms
			   // client.heartbeat.incoming = 0;     // client does not want to receive heartbeats
			                                   // from the server
			if ('WebSocket' in window) {
				client = new WebSocket(url);
            } else if ('MozWebSocket' in window) {
            	client = new MozWebSocket(url);
            } else {
                alert('WebSocket is not supported by this browser.');
                return false;
            }
			//client = new  WebSocket(url, ['soap', 'xmpp']);

			client.onopen = function (evt) {
				 client.debug("connected to Stomp");
				 _onOpen(evt);

			};

			client.onclose = function (evt) {
				client.debug("Command WebSocket Closed");
				_onClose(evt);
			};

			// Log errors
			client.onerror = function (error) {
				client.debug('Command WebSocket Error ' + error);
				_onError(evt);

			};

			// Log messages from the server
			client.onmessage = function (evt) {
				client.debug('Server: ' + evt.data);
				var result = evt.data;
				try{
					 result = JSON.parse(evt.data);
				}catch(e){
					result = evt.data;
				}

				if((typeof result === "object") && result.hasOwnProperty("operations")){
					if(result.operations.length && result.operations.length>0 ){
						result = result.operations[0].params.data;
						try{
							result = JSON.stringify(JSON.parse(result),null,4);
						}catch(e){
							result = JSON.stringify(result,null,4);
						}
					}

				}else{
					result = String(e.data);
				}
				_onMessage(result);
			};

			// this allows to display debug logs directly on the web page
			client.debug = function(str) {
				 _debug(str);

			};

			// the client is notified when it is connected to the server.

			return false;
		});

		  function builCommandOperation(operation,targetId,methodName,data){
			var body = {
					"operation":operation,
					"targetId":targetId,
					"methodName":methodName,
					"params":{
						"data":data,
						"len": data.length,
						"count":1
					}
				};
			return body;
		  }

	  function builCommandMessage(operation,targetId,methodName,data,headers,destination ){
			var body = builCommandOperation(operation,targetId,methodName,data);

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

      $('#disconnect').click(function() {
			client.close();
			return false;
      });

      	$('#btn-send').click(function() {
      		var data = $('#send_form_input').val();
      		if (data) {
      			data = data.trim();
				var input = builCommandMessage("call",this.id,"send",data,{},destination);
				client.send(JSON.stringify(input, null, 4));

				$('#send_form_input').val("");
			}
			return false;
		});

		$("#btn-send-cmd").click(function(evt){
			var data = $("#send_form_input").val();
			if (data) {
				data = data.trim();
				//var input = builCommandMessage("call",this.id,"send",data,{},"/queue/InvokeWorkflowCmdsIn");
				//client.send(JSON.stringify(input, null, 4));
				client.send(data);

			}
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

    var shellinput = [];
    var shellSocket = null;
    var terminal = null;

    function _done(term,result){
    	term.echo(result,{
            finalize: function(div) {
                div.css("color", "blue");
            }
        });

    }

    function _fail(term,error){
    	term.echo('Command Error ' + error,{
            finalize: function(div) {
                div.css("color", "red");
            }
        });
    }

    function _error(term,error){
    	term.echo('Command Error ' + error,{
            finalize: function(div) {
                div.css("color", "red");
            }
        });
    }

    function sendShellCommand(message,term){
    	var PORT =  "15010" || APP_PORT ;
    	var host = window.location.hostname;

    	if(host.trim() === ""){
    		host = "localhost";
    	}//*/

    	var url = "http://"+host+"/rest/api/invoke";
		if(host === "localhost"){
			url = "http://"+host+":"+PORT+"/rest/api/invoke";
		}

    	try{
	    	$.ajax({
	  		  url: url,
	  		  type: "POST",
	  		  data: message,
	  		  dataType: "text",
	  		  crossDomain :true,
	  		  processData:false,
	  		  beforeSend: function( xhr ) {
	  		    xhr.setRequestHeader("Content-Type","text/plain");
	  		  }
	  		}).done(function( data ) {
	  			console.log('Server: ' + data);
				var result = data;
				try{
					 result = JSON.parse(data);
				}catch(e){
					result = data;
				}

				if(result.hasOwnProperty("operations")){
					if(result.operations.length && result.operations.length>0 ){
						result = result.operations[0].params.data;
						try{
							result = JSON.stringify(JSON.parse(result),null,4);
						}catch(e){
							result = JSON.stringify(result,null,4);
						}
					}

				}else{
					result = String(data);
				}
				_done(term,result);

	  		}).fail(function(jqXHR, textStatus, errorThrown) {
	  			console.log('Command Error ' + errorThrown);
	  			_fail(term,errorThrown);

	  		});

    	}catch(e){
    		console.log('Command Error ' + e);
    		_error(term,e);
    	}

    }

    function connectWSTerminal(term){
    	var PORT =  "3529" || APP_PORT ;
    	terminal = term;
    	if(shellSocket != null){
    		disconnectTerminal(term);
    	}

    	var host = window.location.hostname;

    	if(host.trim() === ""){
    		host = "localhost";
    	}//*/

		var url = "ws://"+host+"/ws/api/invoke";
		if(host === "localhost"){
			url = "ws://"+host+":"+PORT+"/ws/api/invoke";
		}

		shellSocket = new  WebSocket(url, ['soap', 'xmpp']);

		shellSocket.onopen = function (evt) {
			console.log('Command WebSocket Connected');
			term.echo('Command WebSocket Connected',{
                finalize: function(div) {
                    div.css("color", "green");
                }
            });
		};

		shellSocket.onclose = function (evt) {
			console.log('Command WebSocket Closed');
			term.echo('Command WebSocket Closed',{
                finalize: function(div) {
                    div.css("color", "red");
                }
            });
		};

		// Log errors
		shellSocket.onerror = function (error) {
			console.log('Command WebSocket Error ' + error);
			term.echo('Command WebSocket Error ' + error,{
                finalize: function(div) {
                    div.css("color", "red");
                }
            });
		};

		// Log messages from the server
		shellSocket.onmessage = function (e) {
			console.log('Server: ' + e.data);
			var result = e.data;
			try{
				 result = JSON.parse(e.data);
			}catch(e){
				result = e.data;
			}

			if(result.hasOwnProperty("operations")){
				if(result.operations.length && result.operations.length>0 ){
					result = result.operations[0].params.data;
					try{
						result = JSON.stringify(JSON.parse(result),null,4);
					}catch(e){
						result = JSON.stringify(result,null,4);
					}
				}

			}else{
				result = String(e.data);
			}

			term.echo(result,{
                finalize: function(div) {
                    div.css("color", "blue");
                }
            });
		};
    }

    function connectTerminal(term){

		console.log('Command Connected');
		term.echo('Command Connected',{
            finalize: function(div) {
                div.css("color", "green");
            }
        });

    }

    function disconnectTerminal(term){
    	if(shellSocket != null){
    		shellSocket.close();
    	}
    	shellSocket = null;
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
		            	var message = builCommandMessage("call","shell","execute",command,null,null);
		            	sendShellCommand(message,term);
		                term.resume();
		                //reset buffer
		                //shellinput = [];

            		}else if(command == "go"){
            			if(shellinput.length >0){
	            			command = shellinput.join("\n");
	            			if (!islocal(command,term)){
				            	term.pause();
				            	var message = builCommandMessage("call","shell","execute",command,null,null);
				            	sendShellCommand(message,term);
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
				            	var message = builCommandMessage("call","shell","execute",command,null,null);
				            	sendShellCommand(message,term);
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

});