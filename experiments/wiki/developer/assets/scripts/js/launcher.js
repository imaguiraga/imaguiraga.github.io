var APP_PORT = "15010";//"53633";

$(document).ready(function(){//start process
	if(typeof require != "undefined"){
		var APP_HOME = ".";

		var JAVA_EXE = "java";
		var DEFAULT_JVM_OPTS = "";
		var JAVA_OPTS = "";
		var MESSAGING_CORE_OPTS = "";
		var MAIN_CLASS_NAME = "messaging.core.runtime.wrapper.Wrapper";
		var SCRIPTS_DIR = "./WEB-INF";
		var CMD_LINE_ARGS = ["-e","socket","-p",APP_PORT];

		var fs = require("fs");
		var dir = SCRIPTS_DIR+"/lib";
		var files = fs.readdirSync(dir);
		var CLASSPATH = [];

	    for(var i in files){
	        if (!files.hasOwnProperty(i)){
	        	continue;
	        }
	        var name = APP_HOME+"/lib/"+files[i];
	        console.log("classpath: "+name);
	        CLASSPATH.push(name);
	    }

		try{
		//node js
			var   spawn = require('child_process').spawn;

			var main =
				spawn(JAVA_EXE,
					[
					     DEFAULT_JVM_OPTS,JAVA_OPTS,MESSAGING_CORE_OPTS,
						 "-classpath",CLASSPATH.join(";"),
						 MAIN_CLASS_NAME
					].concat(CMD_LINE_ARGS),
					{cwd:SCRIPTS_DIR}
				 );
	//*/
			console.log('ps pid: ' + main.pid);

			main.stdout.on('data', function (data) {
				console.log('ps stdout: ' + data);
			});

			main.stderr.on('data', function (data) {
				console.log('ps stderr: ' + data);
			});

			main.on('exit', function (code) {
				  if (code !== 0) {
					console.log('ps process exited with code ' + code);
				  }

			});
			main.on('close', function (code) {
				  if (code !== 0) {
					console.log('ps process exited with code ' + code);
				  }
			});

			process.on('exit', function() {
				main.kill();
			});

		}catch(e){
			console.log(e+" - "+e.message);
		}
	}

});

