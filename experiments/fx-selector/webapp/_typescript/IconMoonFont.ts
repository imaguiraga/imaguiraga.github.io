class IconMoonFont{
	
	static fontFamily:string = "icomoon";

	static getTspan(icon:string){
		var code:string = IconMoonFont[icon];
		if(code){
			return "<tspan style=\"font-family: '"+IconMoonFont.fontFamily+"';\">"+code+"</tspan>";
		}else{
			return "NA";
		}
	}

	static getCode(icon:string){
		var code:string = IconMoonFont[icon];
		if(code){
			return IconMoonFont[icon];
		}else{
			return "";
		}
	}

	static "fa-screen" = "&#xe600;";

	static "fa-laptop" = "&#xe601;";

	static "fa-mobile" = "&#xe602;";

	static "fa-mobile2" = "&#xe603;";

	static "fa-tablet" = "&#xe604;";

	static "fa-tv" = "&#xe605;";

	static "fa-tree" = "&#xe606;";

	static "fa-user" = "&#xe607;";

	static "fa-users" = "&#xe608;";

	static "fa-storage" = "&#xe609;";

	static "fa-uniF51D" = "&#xe60a;";

	static "fa-uniF51C" = "&#xe60b;";

	static "fa-server" = "&#xe60c;";

	static "fa-servers" = "&#xe60d;";
	IconMoonFont["fa-serverbox"] = "&#xe60d;";

	static "fa-network" = "&#xe60e;";

	static "fa-hdtv" = "&#xe60f;";

	static "fa-user2" = "&#xe610;";

	static "fa-friends" = "&#xe611;";

	static "fa-monitor" = "&#xe612;";

	static "fa-treediagram" = "&#xe613;";

	static "fa-iphone" = "&#xe614;";

	static "fa-nexus" = "&#xe615;";

	static "fa-imac" = "&#xe616;";

	static "fa-tablet2" = "&#xe617;";

	static "fa-touchpad" = "&#xe618;";

	static "fa-sidebar" = "&#xe619;";

	static "fa-browser" = "&#xe61a;";
}