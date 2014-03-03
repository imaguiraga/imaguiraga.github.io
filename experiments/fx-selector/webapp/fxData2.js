function fxServer(){
 var root = 
	{
	  "type": "serverbox",
	  "name": "serverbox",
	  "descr": "serverbox",
	  "icon": "fa-serverbox",
	  "entries": [
		{
		  "type": "windows",
		  "name": "windows",
		  "descr": "windows",
		  "icon": "fa-windows",
		  "entries": []
		},
		{
		  "type": "linux",
		  "name": "linux",
		  "descr": "linux",
		  "icon": "fa-linux",
		  "entries": []
		}
	  ]
	};return root;
}
	
function fxSmartTV(){
	var root = 
	{
	  "type": "hdtv",
	  "name": "hdtv",
	  "descr": "hdtv",
	  "icon": "fa-hdtv",
	  "entries": [
		{
		  "type": "tizen",
		  "name": "tizen",
		  "descr": "tizen",
		  "icon": "fa-tizen",
		  "entries": []
		},
		{
		  "type": "samsung",
		  "name": "samsung",
		  "descr": "samsung",
		  "icon": "fa-samsung",
		  "entries": []
		}
	  ]
	};return root;
}

function fxMobile(){
	var root = 
	{
	  "type": "mobile",
	  "name": "mobile",
	  "descr": "mobile",
	  "icon": "fa-mobile",
	  "entries": [
		{
		  "type": "android",
		  "name": "android",
		  "descr": "android",
		  "icon": "fa-android",
		  "entries": []
		},
		{
		  "type": "ios",
		  "name": "ios",
		  "descr": "ios",
		  "icon": "fa-ios",
		  "entries": []
		},
		{
		  "type": "winphone",
		  "name": "winphone",
		  "descr": "winphone",
		  "icon": "fa-winphone",
		  "entries": []
		},
		{
		  "type": "blackberry",
		  "name": "blackberry",
		  "descr": "blackberry",
		  "icon": "fa-blackberry",
		  "entries": []
		}
	  ]
	};
	return root;
}

function fxDesktop(){
	var root = 
	{
		"type": "desktop",
		"name": "desktop",
		"descr": "desktop",
		"icon": "fa-desktop",
		"entries": [
			{
			  "type": "mac",
			  "name": "mac",
			  "descr": "mac",
			  "icon": "fa-mac",
			  "entries": []
			},
			{
			  "type": "windows",
			  "name": "windows",
			  "descr": "windows",
			  "icon": "fa-windows",
			  "entries": []
			},
			{
			  "type": "linux",
			  "name": "linux",
			  "descr": "linux",
			  "icon": "fa-linux",
			  "entries": []
			}
		]
	};return root;
}

function fxTablet(){
	var root =  
	{
	  "type": "tablet",
	  "name": "tablet",
	  "descr": "tablet",
	  "icon": "fa-tablet",
	  "entries": [
		{
		  "type": "android",
		  "name": "android",
		  "descr": "android",
		  "icon": "fa-android",
		  "entries": []
		},
		{
		  "type": "ios",
		  "name": "ios",
		  "descr": "ios",
		  "icon": "fa-ios",
		  "entries": []
		},
		{
		  "type": "windows",
		  "name": "windows",
		  "descr": "windows",
		  "icon": "fa-windows",
		  "entries": []
		},
		{
		  "type": "blackberry",
		  "name": "blackberry",
		  "descr": "blackberry",
		  "icon": "fa-blackberry",
		  "entries": []
		}
	  ]
	};return root;
}

function fxClient(){
	var root = 
	{
	  "type": "client",
	  "name": "client",
	  "descr": "client",
	  "icon": "fa-client",
	  "entries": [
		{
		  "type": "device",
		  "name": "device",
		  "descr": "device",
		  "icon": "fa-device",
		  "entries": [
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
function fxData2(){
var root =
{
  "type": "root",
  "name": "users",
  "descr": "users",
  "icon": "fa-sitemap",
  "entries": [
    {
      "type": "user",
      "name": "1-user",
      "descr": "user",
      "icon": "fa-user",
      "entries": [
        {
          "type": "application",
          "name": "application",
          "descr": "application",
          "icon": "fa-application",
          "entries": [
            fxClient()
          ]
        }
      ]
    },
    {
      "type": "users",
      "name": "n-users",
      "descr": "users",
      "icon": "fa-users",
      "entries": [
        {
          "type": "application",
          "name": "application",
          "descr": "application",
          "icon": "fa-application",
          "entries": [
            fxClient(),
            {
              "type": "server",
              "name": "server",
              "descr": "server",
              "icon": "fa-server",
              "entries": [
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
