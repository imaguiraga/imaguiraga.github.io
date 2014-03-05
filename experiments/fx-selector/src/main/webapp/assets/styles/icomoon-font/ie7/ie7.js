/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-screen': '&#xe600;',
		'icon-laptop': '&#xe601;',
		'icon-mobile': '&#xe602;',
		'icon-mobile2': '&#xe603;',
		'icon-tablet': '&#xe604;',
		'icon-tv': '&#xe605;',
		'icon-tree': '&#xe606;',
		'icon-user': '&#xe607;',
		'icon-users': '&#xe608;',
		'icon-storage': '&#xe609;',
		'icon-uniF51D': '&#xe60a;',
		'icon-uniF51C': '&#xe60b;',
		'icon-server': '&#xe60c;',
		'icon-servers': '&#xe60d;',
		'icon-network': '&#xe60e;',
		'icon-hdtv': '&#xe60f;',
		'icon-user2': '&#xe610;',
		'icon-friends': '&#xe611;',
		'icon-monitor': '&#xe612;',
		'icon-treediagram': '&#xe613;',
		'icon-iphone': '&#xe614;',
		'icon-nexus': '&#xe615;',
		'icon-imac': '&#xe616;',
		'icon-tablet2': '&#xe617;',
		'icon-touchpad': '&#xe618;',
		'icon-sidebar': '&#xe619;',
		'icon-browser': '&#xe61a;',
		'icon-android': '&#xe61b;',
		'icon-windows': '&#xe61c;',
		'icon-apple': '&#xe61d;',
		'icon-linux': '&#xe61e;',
		'icon-cogs': '&#xe61f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
