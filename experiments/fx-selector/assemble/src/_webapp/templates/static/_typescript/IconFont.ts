/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
readers do not read off random characters that represent icons */
class FontAwesomeFont {

	static fontFamily : string = "'FontAwesome'";

	static getCode(icon : string) {
		var code : string = FontAwesomeFont[icon.replace("-","_")];
		if (code) {
			return code;
		} else {
			return "";
		}
	}
	
	static fa_glass : string = "\uf000";
	static fa_music : string = "\uf001";
	static fa_search : string = "\uf002";
	static fa_envelope_o : string = "\uf003";
	static fa_heart : string = "\uf004";
	static fa_star : string = "\uf005";
	static fa_star_o : string = "\uf006";
	static fa_user : string = "\uf007";
	static fa_film : string = "\uf008";
	static fa_th_large : string = "\uf009";
	static fa_th : string = "\uf00a";
	static fa_th_list : string = "\uf00b";
	static fa_check : string = "\uf00c";
	static fa_times : string = "\uf00d";
	static fa_search_plus : string = "\uf00e";
	static fa_search_minus : string = "\uf010";
	static fa_power_off : string = "\uf011";
	static fa_signal : string = "\uf012";
	static fa_gear : string = "\uf013";
	static fa_cog : string = "\uf013";
	static fa_trash_o : string = "\uf014";
	static fa_home : string = "\uf015";
	static fa_file_o : string = "\uf016";
	static fa_clock_o : string = "\uf017";
	static fa_road : string = "\uf018";
	static fa_download : string = "\uf019";
	static fa_arrow_circle_o_down : string = "\uf01a";
	static fa_arrow_circle_o_up : string = "\uf01b";
	static fa_inbox : string = "\uf01c";
	static fa_play_circle_o : string = "\uf01d";
	static fa_rotate_right : string = "\uf01e";
	static fa_repeat : string = "\uf01e";
	static fa_refresh : string = "\uf021";
	static fa_list_alt : string = "\uf022";
	static fa_lock : string = "\uf023";
	static fa_flag : string = "\uf024";
	static fa_headphones : string = "\uf025";
	static fa_volume_off : string = "\uf026";
	static fa_volume_down : string = "\uf027";
	static fa_volume_up : string = "\uf028";
	static fa_qrcode : string = "\uf029";
	static fa_barcode : string = "\uf02a";
	static fa_tag : string = "\uf02b";
	static fa_tags : string = "\uf02c";
	static fa_book : string = "\uf02d";
	static fa_bookmark : string = "\uf02e";
	static fa_print : string = "\uf02f";
	static fa_camera : string = "\uf030";
	static fa_font : string = "\uf031";
	static fa_bold : string = "\uf032";
	static fa_italic : string = "\uf033";
	static fa_text_height : string = "\uf034";
	static fa_text_width : string = "\uf035";
	static fa_align_left : string = "\uf036";
	static fa_align_center : string = "\uf037";
	static fa_align_right : string = "\uf038";
	static fa_align_justify : string = "\uf039";
	static fa_list : string = "\uf03a";
	static fa_dedent : string = "\uf03b";
	static fa_outdent : string = "\uf03b";
	static fa_indent : string = "\uf03c";
	static fa_video_camera : string = "\uf03d";
	static fa_picture_o : string = "\uf03e";
	static fa_pencil : string = "\uf040";
	static fa_map_marker : string = "\uf041";
	static fa_adjust : string = "\uf042";
	static fa_tint : string = "\uf043";
	static fa_edit : string = "\uf044";
	static fa_pencil_square_o : string = "\uf044";
	static fa_share_square_o : string = "\uf045";
	static fa_check_square_o : string = "\uf046";
	static fa_arrows : string = "\uf047";
	static fa_step_backward : string = "\uf048";
	static fa_fast_backward : string = "\uf049";
	static fa_backward : string = "\uf04a";
	static fa_play : string = "\uf04b";
	static fa_pause : string = "\uf04c";
	static fa_stop : string = "\uf04d";
	static fa_forward : string = "\uf04e";
	static fa_fast_forward : string = "\uf050";
	static fa_step_forward : string = "\uf051";
	static fa_eject : string = "\uf052";
	static fa_chevron_left : string = "\uf053";
	static fa_chevron_right : string = "\uf054";
	static fa_plus_circle : string = "\uf055";
	static fa_minus_circle : string = "\uf056";
	static fa_times_circle : string = "\uf057";
	static fa_check_circle : string = "\uf058";
	static fa_question_circle : string = "\uf059";
	static fa_info_circle : string = "\uf05a";
	static fa_crosshairs : string = "\uf05b";
	static fa_times_circle_o : string = "\uf05c";
	static fa_check_circle_o : string = "\uf05d";
	static fa_ban : string = "\uf05e";
	static fa_arrow_left : string = "\uf060";
	static fa_arrow_right : string = "\uf061";
	static fa_arrow_up : string = "\uf062";
	static fa_arrow_down : string = "\uf063";
	static fa_mail_forward : string = "\uf064";
	static fa_share : string = "\uf064";
	static fa_expand : string = "\uf065";
	static fa_compress : string = "\uf066";
	static fa_plus : string = "\uf067";
	static fa_minus : string = "\uf068";
	static fa_asterisk : string = "\uf069";
	static fa_exclamation_circle : string = "\uf06a";
	static fa_gift : string = "\uf06b";
	static fa_leaf : string = "\uf06c";
	static fa_fire : string = "\uf06d";
	static fa_eye : string = "\uf06e";
	static fa_eye_slash : string = "\uf070";
	static fa_warning : string = "\uf071";
	static fa_exclamation_triangle : string = "\uf071";
	static fa_plane : string = "\uf072";
	static fa_calendar : string = "\uf073";
	static fa_random : string = "\uf074";
	static fa_comment : string = "\uf075";
	static fa_magnet : string = "\uf076";
	static fa_chevron_up : string = "\uf077";
	static fa_chevron_down : string = "\uf078";
	static fa_retweet : string = "\uf079";
	static fa_shopping_cart : string = "\uf07a";
	static fa_folder : string = "\uf07b";
	static fa_folder_open : string = "\uf07c";
	static fa_arrows_v : string = "\uf07d";
	static fa_arrows_h : string = "\uf07e";
	static fa_bar_chart_o : string = "\uf080";
	static fa_twitter_square : string = "\uf081";
	static fa_facebook_square : string = "\uf082";
	static fa_camera_retro : string = "\uf083";
	static fa_key : string = "\uf084";
	static fa_gears : string = "\uf085";
	static fa_cogs : string = "\uf085";
	static fa_comments : string = "\uf086";
	static fa_thumbs_o_up : string = "\uf087";
	static fa_thumbs_o_down : string = "\uf088";
	static fa_star_half : string = "\uf089";
	static fa_heart_o : string = "\uf08a";
	static fa_sign_out : string = "\uf08b";
	static fa_linkedin_square : string = "\uf08c";
	static fa_thumb_tack : string = "\uf08d";
	static fa_external_link : string = "\uf08e";
	static fa_sign_in : string = "\uf090";
	static fa_trophy : string = "\uf091";
	static fa_github_square : string = "\uf092";
	static fa_upload : string = "\uf093";
	static fa_lemon_o : string = "\uf094";
	static fa_phone : string = "\uf095";
	static fa_square_o : string = "\uf096";
	static fa_bookmark_o : string = "\uf097";
	static fa_phone_square : string = "\uf098";
	static fa_twitter : string = "\uf099";
	static fa_facebook : string = "\uf09a";
	static fa_github : string = "\uf09b";
	static fa_unlock : string = "\uf09c";
	static fa_credit_card : string = "\uf09d";
	static fa_rss : string = "\uf09e";
	static fa_hdd_o : string = "\uf0a0";
	static fa_bullhorn : string = "\uf0a1";
	static fa_bell : string = "\uf0f3";
	static fa_certificate : string = "\uf0a3";
	static fa_hand_o_right : string = "\uf0a4";
	static fa_hand_o_left : string = "\uf0a5";
	static fa_hand_o_up : string = "\uf0a6";
	static fa_hand_o_down : string = "\uf0a7";
	static fa_arrow_circle_left : string = "\uf0a8";
	static fa_arrow_circle_right : string = "\uf0a9";
	static fa_arrow_circle_up : string = "\uf0aa";
	static fa_arrow_circle_down : string = "\uf0ab";
	static fa_globe : string = "\uf0ac";
	static fa_wrench : string = "\uf0ad";
	static fa_tasks : string = "\uf0ae";
	static fa_filter : string = "\uf0b0";
	static fa_briefcase : string = "\uf0b1";
	static fa_arrows_alt : string = "\uf0b2";
	static fa_group : string = "\uf0c0";
	static fa_users : string = "\uf0c0";
	static fa_chain : string = "\uf0c1";
	static fa_link : string = "\uf0c1";
	static fa_cloud : string = "\uf0c2";
	static fa_flask : string = "\uf0c3";
	static fa_cut : string = "\uf0c4";
	static fa_scissors : string = "\uf0c4";
	static fa_copy : string = "\uf0c5";
	static fa_files_o : string = "\uf0c5";
	static fa_paperclip : string = "\uf0c6";
	static fa_save : string = "\uf0c7";
	static fa_floppy_o : string = "\uf0c7";
	static fa_square : string = "\uf0c8";
	static fa_bars : string = "\uf0c9";
	static fa_list_ul : string = "\uf0ca";
	static fa_list_ol : string = "\uf0cb";
	static fa_strikethrough : string = "\uf0cc";
	static fa_underline : string = "\uf0cd";
	static fa_table : string = "\uf0ce";
	static fa_magic : string = "\uf0d0";
	static fa_truck : string = "\uf0d1";
	static fa_pinterest : string = "\uf0d2";
	static fa_pinterest_square : string = "\uf0d3";
	static fa_google_plus_square : string = "\uf0d4";
	static fa_google_plus : string = "\uf0d5";
	static fa_money : string = "\uf0d6";
	static fa_caret_down : string = "\uf0d7";
	static fa_caret_up : string = "\uf0d8";
	static fa_caret_left : string = "\uf0d9";
	static fa_caret_right : string = "\uf0da";
	static fa_columns : string = "\uf0db";
	static fa_unsorted : string = "\uf0dc";
	static fa_sort : string = "\uf0dc";
	static fa_sort_down : string = "\uf0dd";
	static fa_sort_asc : string = "\uf0dd";
	static fa_sort_up : string = "\uf0de";
	static fa_sort_desc : string = "\uf0de";
	static fa_envelope : string = "\uf0e0";
	static fa_linkedin : string = "\uf0e1";
	static fa_rotate_left : string = "\uf0e2";
	static fa_undo : string = "\uf0e2";
	static fa_legal : string = "\uf0e3";
	static fa_gavel : string = "\uf0e3";
	static fa_dashboard : string = "\uf0e4";
	static fa_tachometer : string = "\uf0e4";
	static fa_comment_o : string = "\uf0e5";
	static fa_comments_o : string = "\uf0e6";
	static fa_flash : string = "\uf0e7";
	static fa_bolt : string = "\uf0e7";
	static fa_sitemap : string = "\uf0e8";
	static fa_umbrella : string = "\uf0e9";
	static fa_paste : string = "\uf0ea";
	static fa_clipboard : string = "\uf0ea";
	static fa_lightbulb_o : string = "\uf0eb";
	static fa_exchange : string = "\uf0ec";
	static fa_cloud_download : string = "\uf0ed";
	static fa_cloud_upload : string = "\uf0ee";
	static fa_user_md : string = "\uf0f0";
	static fa_stethoscope : string = "\uf0f1";
	static fa_suitcase : string = "\uf0f2";
	static fa_bell_o : string = "\uf0a2";
	static fa_coffee : string = "\uf0f4";
	static fa_cutlery : string = "\uf0f5";
	static fa_file_text_o : string = "\uf0f6";
	static fa_building_o : string = "\uf0f7";
	static fa_hospital_o : string = "\uf0f8";
	static fa_ambulance : string = "\uf0f9";
	static fa_medkit : string = "\uf0fa";
	static fa_fighter_jet : string = "\uf0fb";
	static fa_beer : string = "\uf0fc";
	static fa_h_square : string = "\uf0fd";
	static fa_plus_square : string = "\uf0fe";
	static fa_angle_double_left : string = "\uf100";
	static fa_angle_double_right : string = "\uf101";
	static fa_angle_double_up : string = "\uf102";
	static fa_angle_double_down : string = "\uf103";
	static fa_angle_left : string = "\uf104";
	static fa_angle_right : string = "\uf105";
	static fa_angle_up : string = "\uf106";
	static fa_angle_down : string = "\uf107";
	static fa_desktop : string = "\uf108";
	static fa_laptop : string = "\uf109";
	static fa_tablet : string = "\uf10a";
	static fa_mobile_phone : string = "\uf10b";
	static fa_mobile : string = "\uf10b";
	static fa_circle_o : string = "\uf10c";
	static fa_quote_left : string = "\uf10d";
	static fa_quote_right : string = "\uf10e";
	static fa_spinner : string = "\uf110";
	static fa_circle : string = "\uf111";
	static fa_mail_reply : string = "\uf112";
	static fa_reply : string = "\uf112";
	static fa_github_alt : string = "\uf113";
	static fa_folder_o : string = "\uf114";
	static fa_folder_open_o : string = "\uf115";
	static fa_smile_o : string = "\uf118";
	static fa_frown_o : string = "\uf119";
	static fa_meh_o : string = "\uf11a";
	static fa_gamepad : string = "\uf11b";
	static fa_keyboard_o : string = "\uf11c";
	static fa_flag_o : string = "\uf11d";
	static fa_flag_checkered : string = "\uf11e";
	static fa_terminal : string = "\uf120";
	static fa_code : string = "\uf121";
	static fa_reply_all : string = "\uf122";
	static fa_mail_reply_all : string = "\uf122";
	static fa_star_half_empty : string = "\uf123";
	static fa_star_half_full : string = "\uf123";
	static fa_star_half_o : string = "\uf123";
	static fa_location_arrow : string = "\uf124";
	static fa_crop : string = "\uf125";
	static fa_code_fork : string = "\uf126";
	static fa_unlink : string = "\uf127";
	static fa_chain_broken : string = "\uf127";
	static fa_question : string = "\uf128";
	static fa_info : string = "\uf129";
	static fa_exclamation : string = "\uf12a";
	static fa_superscript : string = "\uf12b";
	static fa_subscript : string = "\uf12c";
	static fa_eraser : string = "\uf12d";
	static fa_puzzle_piece : string = "\uf12e";
	static fa_microphone : string = "\uf130";
	static fa_microphone_slash : string = "\uf131";
	static fa_shield : string = "\uf132";
	static fa_calendar_o : string = "\uf133";
	static fa_fire_extinguisher : string = "\uf134";
	static fa_rocket : string = "\uf135";
	static fa_maxcdn : string = "\uf136";
	static fa_chevron_circle_left : string = "\uf137";
	static fa_chevron_circle_right : string = "\uf138";
	static fa_chevron_circle_up : string = "\uf139";
	static fa_chevron_circle_down : string = "\uf13a";
	static fa_html5 : string = "\uf13b";
	static fa_css3 : string = "\uf13c";
	static fa_anchor : string = "\uf13d";
	static fa_unlock_alt : string = "\uf13e";
	static fa_bullseye : string = "\uf140";
	static fa_ellipsis_h : string = "\uf141";
	static fa_ellipsis_v : string = "\uf142";
	static fa_rss_square : string = "\uf143";
	static fa_play_circle : string = "\uf144";
	static fa_ticket : string = "\uf145";
	static fa_minus_square : string = "\uf146";
	static fa_minus_square_o : string = "\uf147";
	static fa_level_up : string = "\uf148";
	static fa_level_down : string = "\uf149";
	static fa_check_square : string = "\uf14a";
	static fa_pencil_square : string = "\uf14b";
	static fa_external_link_square : string = "\uf14c";
	static fa_share_square : string = "\uf14d";
	static fa_compass : string = "\uf14e";
	static fa_toggle_down : string = "\uf150";
	static fa_caret_square_o_down : string = "\uf150";
	static fa_toggle_up : string = "\uf151";
	static fa_caret_square_o_up : string = "\uf151";
	static fa_toggle_right : string = "\uf152";
	static fa_caret_square_o_right : string = "\uf152";
	static fa_euro : string = "\uf153";
	static fa_eur : string = "\uf153";
	static fa_gbp : string = "\uf154";
	static fa_dollar : string = "\uf155";
	static fa_usd : string = "\uf155";
	static fa_rupee : string = "\uf156";
	static fa_inr : string = "\uf156";
	static fa_cny : string = "\uf157";
	static fa_rmb : string = "\uf157";
	static fa_yen : string = "\uf157";
	static fa_jpy : string = "\uf157";
	static fa_ruble : string = "\uf158";
	static fa_rouble : string = "\uf158";
	static fa_rub : string = "\uf158";
	static fa_won : string = "\uf159";
	static fa_krw : string = "\uf159";
	static fa_bitcoin : string = "\uf15a";
	static fa_btc : string = "\uf15a";
	static fa_file : string = "\uf15b";
	static fa_file_text : string = "\uf15c";
	static fa_sort_alpha_asc : string = "\uf15d";
	static fa_sort_alpha_desc : string = "\uf15e";
	static fa_sort_amount_asc : string = "\uf160";
	static fa_sort_amount_desc : string = "\uf161";
	static fa_sort_numeric_asc : string = "\uf162";
	static fa_sort_numeric_desc : string = "\uf163";
	static fa_thumbs_up : string = "\uf164";
	static fa_thumbs_down : string = "\uf165";
	static fa_youtube_square : string = "\uf166";
	static fa_youtube : string = "\uf167";
	static fa_xing : string = "\uf168";
	static fa_xing_square : string = "\uf169";
	static fa_youtube_play : string = "\uf16a";
	static fa_dropbox : string = "\uf16b";
	static fa_stack_overflow : string = "\uf16c";
	static fa_instagram : string = "\uf16d";
	static fa_flickr : string = "\uf16e";
	static fa_adn : string = "\uf170";
	static fa_bitbucket : string = "\uf171";
	static fa_bitbucket_square : string = "\uf172";
	static fa_tumblr : string = "\uf173";
	static fa_tumblr_square : string = "\uf174";
	static fa_long_arrow_down : string = "\uf175";
	static fa_long_arrow_up : string = "\uf176";
	static fa_long_arrow_left : string = "\uf177";
	static fa_long_arrow_right : string = "\uf178";
	static fa_apple : string = "\uf179";
	static fa_windows : string = "\uf17a";
	static fa_android : string = "\uf17b";
	static fa_linux : string = "\uf17c";
	static fa_dribbble : string = "\uf17d";
	static fa_skype : string = "\uf17e";
	static fa_foursquare : string = "\uf180";
	static fa_trello : string = "\uf181";
	static fa_female : string = "\uf182";
	static fa_male : string = "\uf183";
	static fa_gittip : string = "\uf184";
	static fa_sun_o : string = "\uf185";
	static fa_moon_o : string = "\uf186";
	static fa_archive : string = "\uf187";
	static fa_bug : string = "\uf188";
	static fa_vk : string = "\uf189";
	static fa_weibo : string = "\uf18a";
	static fa_renren : string = "\uf18b";
	static fa_pagelines : string = "\uf18c";
	static fa_stack_exchange : string = "\uf18d";
	static fa_arrow_circle_o_right : string = "\uf18e";
	static fa_arrow_circle_o_left : string = "\uf190";
	static fa_toggle_left : string = "\uf191";
	static fa_caret_square_o_left : string = "\uf191";
	static fa_dot_circle_o : string = "\uf192";
	static fa_wheelchair : string = "\uf193";
	static fa_vimeo_square : string = "\uf194";
	static fa_turkish_lira : string = "\uf195";
	static fa_try : string = "\uf195";
	static fa_plus_square_o : string = "\uf196";
}

class IconMoonFont {

	static fontFamily : string = "'icomoon'";

	static getCode(icon : string) {
		
		var code : string = IconMoonFont[icon.replace("-","_")];
		if (code) {
			return code;
		} else {
			return "";
		}
	}

	static fa_screen = "\ue600";

	static fa_laptop = "\ue601"; //&#xe601;

	static fa_mobile = "\ue602";

	static fa_mobile2 = "\ue603";

	static fa_tablet = "\ue604";

	static fa_tv = "\ue605";

	static fa_tree = "\ue606";

	static fa_sitemap = IconMoonFont.fa_tree;

	static fa_user = "\ue607";

	static fa_users = "\ue608";

	static fa_storage = "\ue609";

	static fa_uniF51D = "\ue60a";

	static fa_uniF51C = "\ue60b";

	static fa_server = "\ue60c";

	static fa_servers = "\ue60d";
	static fa_serverbox = "\ue60d";

	static fa_network = "\ue60e";

	static fa_hdtv = "\ue60f";

	static fa_user2 = "\ue610";

	static fa_friends = "\ue611";

	static fa_monitor = "\ue612";
	static fa_desktop = "\ue612";

	static fa_treediagram = "\ue613";

	static fa_iphone = "\ue614";

	static fa_nexus = "\ue615";

	static fa_imac = "\ue616";

	static fa_tablet2 = "\ue617";

	static fa_touchpad = "\ue618";

	static fa_sidebar = "\ue619";

	static fa_browser = "\ue61a";
	static fa_client = IconMoonFont.fa_browser;

	static fa_android = "\ue61b";
	static fa_windows = "\ue61c";
	static fa_apple = "\ue61d";
	static fa_linux = "\ue61e";
	static fa_cogs = "\ue61f";
	static fa_osx = IconMoonFont.fa_apple;
	static fa_mac = IconMoonFont.fa_apple;
	static fa_ios = IconMoonFont.fa_apple;
	static fa_device = "\ue61f";
	static fa_winphone = IconMoonFont.fa_windows;
}

class IconFont {

	static getCode(icon : string) {
		var code : string = IconMoonFont.getCode(icon);
		if (code.length == 0) {
			code = FontAwesomeFont.getCode(icon);
			if (code.length == 0) {
				code = "";
			}
		}
		return code;
	}
}
