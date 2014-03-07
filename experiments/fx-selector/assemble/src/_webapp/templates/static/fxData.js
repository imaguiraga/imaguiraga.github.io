function fxServer() {
	var root = {
		"type" : "serverbox",
		"name" : "serverbox",
		"descr" : "serverbox",
		"icon" : "fa-serverbox",
		"entries" : [{
				"type" : "windows",
				"name" : "windows",
				"descr" : "windows",
				"icon" : "fa-windows",
				"entries" : []
			}, {
				"type" : "linux",
				"name" : "linux",
				"descr" : "linux",
				"icon" : "fa-linux",
				"entries" : []
			}
		]
	};
	return root;
}

function fxSmartTV() {
	var root = {
		"type" : "hdtv",
		"name" : "hdtv",
		"descr" : "hdtv",
		"icon" : "fa-hdtv",
		"entries" : [{
				"type" : "tizen",
				"name" : "tizen",
				"descr" : "tizen",
				"icon" : "fa-tizen",
				"entries" : []
			}, {
				"type" : "samsung",
				"name" : "samsung",
				"descr" : "samsung",
				"icon" : "fa-samsung",
				"entries" : []
			}
		]
	};
	return root;
}

function fxMobile() {
	var root = {
		"type" : "mobile",
		"name" : "mobile",
		"descr" : "mobile",
		"icon" : "fa-mobile",
		"entries" : [{
				"type" : "android",
				"name" : "android",
				"descr" : "android",
				"icon" : "fa-android",
				"entries" : []
			}, {
				"type" : "ios",
				"name" : "ios",
				"descr" : "ios",
				"icon" : "fa-ios",
				"entries" : []
			}, {
				"type" : "winphone",
				"name" : "winphone",
				"descr" : "winphone",
				"icon" : "fa-winphone",
				"entries" : []
			}, {
				"type" : "blackberry",
				"name" : "blackberry",
				"descr" : "blackberry",
				"icon" : "fa-blackberry",
				"entries" : []
			}
		]
	};
	return root;
}

function fxDesktop() {
	var root = {
		"type" : "desktop",
		"name" : "desktop",
		"descr" : "desktop",
		"icon" : "fa-desktop",
		"entries" : [{
				"type" : "mac",
				"name" : "mac",
				"descr" : "mac",
				"icon" : "fa-mac",
				"entries" : []
			}, {
				"type" : "windows",
				"name" : "windows",
				"descr" : "windows",
				"icon" : "fa-windows",
				"entries" : [fxRuntime()]
			}, {
				"type" : "linux",
				"name" : "linux",
				"descr" : "linux",
				"icon" : "fa-linux",
				"entries" : []
			}
		]
	};
	return root;
}

function fxTablet() {
	var root = {
		"type" : "tablet",
		"name" : "tablet",
		"descr" : "tablet",
		"icon" : "fa-tablet",
		"entries" : [{
				"type" : "android",
				"name" : "android",
				"descr" : "android",
				"icon" : "fa-android",
				"entries" : []
			}, {
				"type" : "ios",
				"name" : "ios",
				"descr" : "ios",
				"icon" : "fa-ios",
				"entries" : []
			}, {
				"type" : "windows",
				"name" : "windows",
				"descr" : "windows",
				"icon" : "fa-windows",
				"entries" : []
			}, {
				"type" : "blackberry",
				"name" : "blackberry",
				"descr" : "blackberry",
				"icon" : "fa-blackberry",
				"entries" : []
			}
		]
	};
	return root;
}

function fxRuntime() {
	var root = {
		"type" : "runtime",
		"name" : "runtime",
		"descr" : "runtime",
		"icon" : "fa-runtime",
		"entries" : [{
				"type" : "jvm",
				"name" : "jvm",
				"descr" : "jvm",
				"icon" : "fa-jvm-runtime",
				"entries" : [{
						"type" : "jdk",
						"name" : "jdk",
						"descr" : "jdk",
						"icon" : "fa-java-sdk",
						"entries" : []
					}
				]
			}, {
				"type" : ".net",
				"name" : ".net",
				"descr" : ".net",
				"icon" : "fa-net-runtime",
				"entries" : [{
						"type" : "netSDK",
						"name" : "netSDK",
						"descr" : "netSDK",
						"icon" : "fa-net-sdk",
						"entries" : []
					}
				]
			}, {
				"type" : "air",
				"name" : "air",
				"descr" : "air",
				"icon" : "fa-air-runtime",
				"entries" : [{
						"type" : "airSDK",
						"name" : "airSDK",
						"descr" : "airSDK",
						"icon" : "fa-air-sdk",
						"entries" : [{
								"type" : "haxeSDK",
								"name" : "haxeSDK",
								"descr" : "haxeSDK",
								"icon" : "fa-haxe-sdk",
								"entries" : []
							}
						]
					}, {
						"type" : "flash",
						"name" : "flash",
						"descr" : "flash",
						"icon" : "fa-flash-runtime",
						"entries" : [{
								"type" : "flexSDK",
								"name" : "flexSDK",
								"descr" : "flexSDK",
								"icon" : "fa-flex-sdk",
								"entries" : []
							}
						]
					}, {
						"type" : "native",
						"name" : "native",
						"descr" : "native",
						"icon" : "fa-native-runtime",
						"entries" : [{
								"type" : "cordovaSDK",
								"name" : "cordovaSDK",
								"descr" : "cordovaSDK",
								"icon" : "fa-cordova-sdk",
								"entries" : []
							}
							/*,{
							"type": "winSDK",
							"name": "winSDK",
							"descr": "winSDK",
							"icon": "fa-win-sdk",
							"entries": []
							},{
							"type": "androidSDK",
							"name": "androidSDK",
							"descr": "androidSDK",
							"icon": "fa-android-sdk",
							"entries": []
							},{
							"type": "iosSDK",
							"name": "iosSDK",
							"descr": "iosSDK",
							"icon": "fa-ios-sdk",
							"entries": []
							},{
							"type": "smarttvSDK",
							"name": "smarttvSDK",
							"descr": "smarttvSDK",
							"icon": "fa-smarttv-sdk",
							"entries": []
							}//*/
						]
					}, {
						"type" : "browser",
						"name" : "browser",
						"descr" : "browser",
						"icon" : "fa-browser-runtime",
						"entries" : [{
								"type" : "html5",
								"name" : "html5",
								"descr" : "html5",
								"icon" : "fa-html5-sdk",
								"entries" : [{
										"type" : "typescriptSDK",
										"name" : "typescriptSDK",
										"descr" : "typescriptSDK",
										"icon" : "fa-typescript-sdk",
										"entries" : []
									}
								]
							}, {
								"type" : "flexSDK",
								"name" : "flexSDK",
								"descr" : "flexSDK",
								"icon" : "fa-flex-sdk",
								"entries" : []
							}, {
								"type" : "haxeSDK",
								"name" : "haxeSDK",
								"descr" : "haxeSDK",
								"icon" : "fa-haxe-sdk",
								"entries" : [{
										"type" : "openflSDK",
										"name" : "openflSDK",
										"descr" : "openflSDK",
										"icon" : "fa-openfl-sdk",
										"entries" : []
									}
								]
							}
						]
					}
				]
			}
		]
	};
	return root;
}

function fxClient() {
	var root = {
		"type" : "client",
		"name" : "client",
		"descr" : "client",
		"icon" : "fa-client",
		"entries" : [{
				"type" : "device",
				"name" : "device",
				"descr" : "device",
				"icon" : "fa-device",
				"entries" : [
					fxMobile(),
					fxDesktop(),
					fxTablet(),
					fxSmartTV()
				]
			}
		]
	};
	return root;
}

function fxRoot() {
	var root = {
		"type" : "root",
		"name" : "users",
		"descr" : "users",
		"icon" : "fa-sitemap",
		"entries" : [{
				"type" : "user",
				"name" : "1-user",
				"descr" : "user",
				"icon" : "fa-user",
				"entries" : [{
						"type" : "application",
						"name" : "application",
						"descr" : "application",
						"icon" : "fa-application",
						"entries" : [
							fxClient()
						]
					}
				]
			}, {
				"type" : "users",
				"name" : "n-users",
				"descr" : "users",
				"icon" : "fa-users",
				"entries" : [{
						"type" : "application",
						"name" : "application",
						"descr" : "application",
						"icon" : "fa-application",
						"entries" : [
							fxClient(), {
								"type" : "server",
								"name" : "server",
								"descr" : "server",
								"icon" : "fa-server",
								"entries" : [
									fxServer()
								]
							}
						]
					}
				]
			}
		]
	};

	return root;
}
