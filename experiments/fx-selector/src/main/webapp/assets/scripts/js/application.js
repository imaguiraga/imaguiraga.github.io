/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
readers do not read off random characters that represent icons */
var FontAwesomeFont = (function () {
    function FontAwesomeFont() {
    }
    FontAwesomeFont.getCode = function (icon) {
        var code = FontAwesomeFont[icon.replace("-", "_")];
        if (code) {
            return code;
        } else {
            return "";
        }
    };
    FontAwesomeFont.fontFamily = "'FontAwesome'";

    FontAwesomeFont.fa_glass = "\uf000";
    FontAwesomeFont.fa_music = "\uf001";
    FontAwesomeFont.fa_search = "\uf002";
    FontAwesomeFont.fa_envelope_o = "\uf003";
    FontAwesomeFont.fa_heart = "\uf004";
    FontAwesomeFont.fa_star = "\uf005";
    FontAwesomeFont.fa_star_o = "\uf006";
    FontAwesomeFont.fa_user = "\uf007";
    FontAwesomeFont.fa_film = "\uf008";
    FontAwesomeFont.fa_th_large = "\uf009";
    FontAwesomeFont.fa_th = "\uf00a";
    FontAwesomeFont.fa_th_list = "\uf00b";
    FontAwesomeFont.fa_check = "\uf00c";
    FontAwesomeFont.fa_times = "\uf00d";
    FontAwesomeFont.fa_search_plus = "\uf00e";
    FontAwesomeFont.fa_search_minus = "\uf010";
    FontAwesomeFont.fa_power_off = "\uf011";
    FontAwesomeFont.fa_signal = "\uf012";
    FontAwesomeFont.fa_gear = "\uf013";
    FontAwesomeFont.fa_cog = "\uf013";
    FontAwesomeFont.fa_trash_o = "\uf014";
    FontAwesomeFont.fa_home = "\uf015";
    FontAwesomeFont.fa_file_o = "\uf016";
    FontAwesomeFont.fa_clock_o = "\uf017";
    FontAwesomeFont.fa_road = "\uf018";
    FontAwesomeFont.fa_download = "\uf019";
    FontAwesomeFont.fa_arrow_circle_o_down = "\uf01a";
    FontAwesomeFont.fa_arrow_circle_o_up = "\uf01b";
    FontAwesomeFont.fa_inbox = "\uf01c";
    FontAwesomeFont.fa_play_circle_o = "\uf01d";
    FontAwesomeFont.fa_rotate_right = "\uf01e";
    FontAwesomeFont.fa_repeat = "\uf01e";
    FontAwesomeFont.fa_refresh = "\uf021";
    FontAwesomeFont.fa_list_alt = "\uf022";
    FontAwesomeFont.fa_lock = "\uf023";
    FontAwesomeFont.fa_flag = "\uf024";
    FontAwesomeFont.fa_headphones = "\uf025";
    FontAwesomeFont.fa_volume_off = "\uf026";
    FontAwesomeFont.fa_volume_down = "\uf027";
    FontAwesomeFont.fa_volume_up = "\uf028";
    FontAwesomeFont.fa_qrcode = "\uf029";
    FontAwesomeFont.fa_barcode = "\uf02a";
    FontAwesomeFont.fa_tag = "\uf02b";
    FontAwesomeFont.fa_tags = "\uf02c";
    FontAwesomeFont.fa_book = "\uf02d";
    FontAwesomeFont.fa_bookmark = "\uf02e";
    FontAwesomeFont.fa_print = "\uf02f";
    FontAwesomeFont.fa_camera = "\uf030";
    FontAwesomeFont.fa_font = "\uf031";
    FontAwesomeFont.fa_bold = "\uf032";
    FontAwesomeFont.fa_italic = "\uf033";
    FontAwesomeFont.fa_text_height = "\uf034";
    FontAwesomeFont.fa_text_width = "\uf035";
    FontAwesomeFont.fa_align_left = "\uf036";
    FontAwesomeFont.fa_align_center = "\uf037";
    FontAwesomeFont.fa_align_right = "\uf038";
    FontAwesomeFont.fa_align_justify = "\uf039";
    FontAwesomeFont.fa_list = "\uf03a";
    FontAwesomeFont.fa_dedent = "\uf03b";
    FontAwesomeFont.fa_outdent = "\uf03b";
    FontAwesomeFont.fa_indent = "\uf03c";
    FontAwesomeFont.fa_video_camera = "\uf03d";
    FontAwesomeFont.fa_picture_o = "\uf03e";
    FontAwesomeFont.fa_pencil = "\uf040";
    FontAwesomeFont.fa_map_marker = "\uf041";
    FontAwesomeFont.fa_adjust = "\uf042";
    FontAwesomeFont.fa_tint = "\uf043";
    FontAwesomeFont.fa_edit = "\uf044";
    FontAwesomeFont.fa_pencil_square_o = "\uf044";
    FontAwesomeFont.fa_share_square_o = "\uf045";
    FontAwesomeFont.fa_check_square_o = "\uf046";
    FontAwesomeFont.fa_arrows = "\uf047";
    FontAwesomeFont.fa_step_backward = "\uf048";
    FontAwesomeFont.fa_fast_backward = "\uf049";
    FontAwesomeFont.fa_backward = "\uf04a";
    FontAwesomeFont.fa_play = "\uf04b";
    FontAwesomeFont.fa_pause = "\uf04c";
    FontAwesomeFont.fa_stop = "\uf04d";
    FontAwesomeFont.fa_forward = "\uf04e";
    FontAwesomeFont.fa_fast_forward = "\uf050";
    FontAwesomeFont.fa_step_forward = "\uf051";
    FontAwesomeFont.fa_eject = "\uf052";
    FontAwesomeFont.fa_chevron_left = "\uf053";
    FontAwesomeFont.fa_chevron_right = "\uf054";
    FontAwesomeFont.fa_plus_circle = "\uf055";
    FontAwesomeFont.fa_minus_circle = "\uf056";
    FontAwesomeFont.fa_times_circle = "\uf057";
    FontAwesomeFont.fa_check_circle = "\uf058";
    FontAwesomeFont.fa_question_circle = "\uf059";
    FontAwesomeFont.fa_info_circle = "\uf05a";
    FontAwesomeFont.fa_crosshairs = "\uf05b";
    FontAwesomeFont.fa_times_circle_o = "\uf05c";
    FontAwesomeFont.fa_check_circle_o = "\uf05d";
    FontAwesomeFont.fa_ban = "\uf05e";
    FontAwesomeFont.fa_arrow_left = "\uf060";
    FontAwesomeFont.fa_arrow_right = "\uf061";
    FontAwesomeFont.fa_arrow_up = "\uf062";
    FontAwesomeFont.fa_arrow_down = "\uf063";
    FontAwesomeFont.fa_mail_forward = "\uf064";
    FontAwesomeFont.fa_share = "\uf064";
    FontAwesomeFont.fa_expand = "\uf065";
    FontAwesomeFont.fa_compress = "\uf066";
    FontAwesomeFont.fa_plus = "\uf067";
    FontAwesomeFont.fa_minus = "\uf068";
    FontAwesomeFont.fa_asterisk = "\uf069";
    FontAwesomeFont.fa_exclamation_circle = "\uf06a";
    FontAwesomeFont.fa_gift = "\uf06b";
    FontAwesomeFont.fa_leaf = "\uf06c";
    FontAwesomeFont.fa_fire = "\uf06d";
    FontAwesomeFont.fa_eye = "\uf06e";
    FontAwesomeFont.fa_eye_slash = "\uf070";
    FontAwesomeFont.fa_warning = "\uf071";
    FontAwesomeFont.fa_exclamation_triangle = "\uf071";
    FontAwesomeFont.fa_plane = "\uf072";
    FontAwesomeFont.fa_calendar = "\uf073";
    FontAwesomeFont.fa_random = "\uf074";
    FontAwesomeFont.fa_comment = "\uf075";
    FontAwesomeFont.fa_magnet = "\uf076";
    FontAwesomeFont.fa_chevron_up = "\uf077";
    FontAwesomeFont.fa_chevron_down = "\uf078";
    FontAwesomeFont.fa_retweet = "\uf079";
    FontAwesomeFont.fa_shopping_cart = "\uf07a";
    FontAwesomeFont.fa_folder = "\uf07b";
    FontAwesomeFont.fa_folder_open = "\uf07c";
    FontAwesomeFont.fa_arrows_v = "\uf07d";
    FontAwesomeFont.fa_arrows_h = "\uf07e";
    FontAwesomeFont.fa_bar_chart_o = "\uf080";
    FontAwesomeFont.fa_twitter_square = "\uf081";
    FontAwesomeFont.fa_facebook_square = "\uf082";
    FontAwesomeFont.fa_camera_retro = "\uf083";
    FontAwesomeFont.fa_key = "\uf084";
    FontAwesomeFont.fa_gears = "\uf085";
    FontAwesomeFont.fa_cogs = "\uf085";
    FontAwesomeFont.fa_comments = "\uf086";
    FontAwesomeFont.fa_thumbs_o_up = "\uf087";
    FontAwesomeFont.fa_thumbs_o_down = "\uf088";
    FontAwesomeFont.fa_star_half = "\uf089";
    FontAwesomeFont.fa_heart_o = "\uf08a";
    FontAwesomeFont.fa_sign_out = "\uf08b";
    FontAwesomeFont.fa_linkedin_square = "\uf08c";
    FontAwesomeFont.fa_thumb_tack = "\uf08d";
    FontAwesomeFont.fa_external_link = "\uf08e";
    FontAwesomeFont.fa_sign_in = "\uf090";
    FontAwesomeFont.fa_trophy = "\uf091";
    FontAwesomeFont.fa_github_square = "\uf092";
    FontAwesomeFont.fa_upload = "\uf093";
    FontAwesomeFont.fa_lemon_o = "\uf094";
    FontAwesomeFont.fa_phone = "\uf095";
    FontAwesomeFont.fa_square_o = "\uf096";
    FontAwesomeFont.fa_bookmark_o = "\uf097";
    FontAwesomeFont.fa_phone_square = "\uf098";
    FontAwesomeFont.fa_twitter = "\uf099";
    FontAwesomeFont.fa_facebook = "\uf09a";
    FontAwesomeFont.fa_github = "\uf09b";
    FontAwesomeFont.fa_unlock = "\uf09c";
    FontAwesomeFont.fa_credit_card = "\uf09d";
    FontAwesomeFont.fa_rss = "\uf09e";
    FontAwesomeFont.fa_hdd_o = "\uf0a0";
    FontAwesomeFont.fa_bullhorn = "\uf0a1";
    FontAwesomeFont.fa_bell = "\uf0f3";
    FontAwesomeFont.fa_certificate = "\uf0a3";
    FontAwesomeFont.fa_hand_o_right = "\uf0a4";
    FontAwesomeFont.fa_hand_o_left = "\uf0a5";
    FontAwesomeFont.fa_hand_o_up = "\uf0a6";
    FontAwesomeFont.fa_hand_o_down = "\uf0a7";
    FontAwesomeFont.fa_arrow_circle_left = "\uf0a8";
    FontAwesomeFont.fa_arrow_circle_right = "\uf0a9";
    FontAwesomeFont.fa_arrow_circle_up = "\uf0aa";
    FontAwesomeFont.fa_arrow_circle_down = "\uf0ab";
    FontAwesomeFont.fa_globe = "\uf0ac";
    FontAwesomeFont.fa_wrench = "\uf0ad";
    FontAwesomeFont.fa_tasks = "\uf0ae";
    FontAwesomeFont.fa_filter = "\uf0b0";
    FontAwesomeFont.fa_briefcase = "\uf0b1";
    FontAwesomeFont.fa_arrows_alt = "\uf0b2";
    FontAwesomeFont.fa_group = "\uf0c0";
    FontAwesomeFont.fa_users = "\uf0c0";
    FontAwesomeFont.fa_chain = "\uf0c1";
    FontAwesomeFont.fa_link = "\uf0c1";
    FontAwesomeFont.fa_cloud = "\uf0c2";
    FontAwesomeFont.fa_flask = "\uf0c3";
    FontAwesomeFont.fa_cut = "\uf0c4";
    FontAwesomeFont.fa_scissors = "\uf0c4";
    FontAwesomeFont.fa_copy = "\uf0c5";
    FontAwesomeFont.fa_files_o = "\uf0c5";
    FontAwesomeFont.fa_paperclip = "\uf0c6";
    FontAwesomeFont.fa_save = "\uf0c7";
    FontAwesomeFont.fa_floppy_o = "\uf0c7";
    FontAwesomeFont.fa_square = "\uf0c8";
    FontAwesomeFont.fa_bars = "\uf0c9";
    FontAwesomeFont.fa_list_ul = "\uf0ca";
    FontAwesomeFont.fa_list_ol = "\uf0cb";
    FontAwesomeFont.fa_strikethrough = "\uf0cc";
    FontAwesomeFont.fa_underline = "\uf0cd";
    FontAwesomeFont.fa_table = "\uf0ce";
    FontAwesomeFont.fa_magic = "\uf0d0";
    FontAwesomeFont.fa_truck = "\uf0d1";
    FontAwesomeFont.fa_pinterest = "\uf0d2";
    FontAwesomeFont.fa_pinterest_square = "\uf0d3";
    FontAwesomeFont.fa_google_plus_square = "\uf0d4";
    FontAwesomeFont.fa_google_plus = "\uf0d5";
    FontAwesomeFont.fa_money = "\uf0d6";
    FontAwesomeFont.fa_caret_down = "\uf0d7";
    FontAwesomeFont.fa_caret_up = "\uf0d8";
    FontAwesomeFont.fa_caret_left = "\uf0d9";
    FontAwesomeFont.fa_caret_right = "\uf0da";
    FontAwesomeFont.fa_columns = "\uf0db";
    FontAwesomeFont.fa_unsorted = "\uf0dc";
    FontAwesomeFont.fa_sort = "\uf0dc";
    FontAwesomeFont.fa_sort_down = "\uf0dd";
    FontAwesomeFont.fa_sort_asc = "\uf0dd";
    FontAwesomeFont.fa_sort_up = "\uf0de";
    FontAwesomeFont.fa_sort_desc = "\uf0de";
    FontAwesomeFont.fa_envelope = "\uf0e0";
    FontAwesomeFont.fa_linkedin = "\uf0e1";
    FontAwesomeFont.fa_rotate_left = "\uf0e2";
    FontAwesomeFont.fa_undo = "\uf0e2";
    FontAwesomeFont.fa_legal = "\uf0e3";
    FontAwesomeFont.fa_gavel = "\uf0e3";
    FontAwesomeFont.fa_dashboard = "\uf0e4";
    FontAwesomeFont.fa_tachometer = "\uf0e4";
    FontAwesomeFont.fa_comment_o = "\uf0e5";
    FontAwesomeFont.fa_comments_o = "\uf0e6";
    FontAwesomeFont.fa_flash = "\uf0e7";
    FontAwesomeFont.fa_bolt = "\uf0e7";
    FontAwesomeFont.fa_sitemap = "\uf0e8";
    FontAwesomeFont.fa_umbrella = "\uf0e9";
    FontAwesomeFont.fa_paste = "\uf0ea";
    FontAwesomeFont.fa_clipboard = "\uf0ea";
    FontAwesomeFont.fa_lightbulb_o = "\uf0eb";
    FontAwesomeFont.fa_exchange = "\uf0ec";
    FontAwesomeFont.fa_cloud_download = "\uf0ed";
    FontAwesomeFont.fa_cloud_upload = "\uf0ee";
    FontAwesomeFont.fa_user_md = "\uf0f0";
    FontAwesomeFont.fa_stethoscope = "\uf0f1";
    FontAwesomeFont.fa_suitcase = "\uf0f2";
    FontAwesomeFont.fa_bell_o = "\uf0a2";
    FontAwesomeFont.fa_coffee = "\uf0f4";
    FontAwesomeFont.fa_cutlery = "\uf0f5";
    FontAwesomeFont.fa_file_text_o = "\uf0f6";
    FontAwesomeFont.fa_building_o = "\uf0f7";
    FontAwesomeFont.fa_hospital_o = "\uf0f8";
    FontAwesomeFont.fa_ambulance = "\uf0f9";
    FontAwesomeFont.fa_medkit = "\uf0fa";
    FontAwesomeFont.fa_fighter_jet = "\uf0fb";
    FontAwesomeFont.fa_beer = "\uf0fc";
    FontAwesomeFont.fa_h_square = "\uf0fd";
    FontAwesomeFont.fa_plus_square = "\uf0fe";
    FontAwesomeFont.fa_angle_double_left = "\uf100";
    FontAwesomeFont.fa_angle_double_right = "\uf101";
    FontAwesomeFont.fa_angle_double_up = "\uf102";
    FontAwesomeFont.fa_angle_double_down = "\uf103";
    FontAwesomeFont.fa_angle_left = "\uf104";
    FontAwesomeFont.fa_angle_right = "\uf105";
    FontAwesomeFont.fa_angle_up = "\uf106";
    FontAwesomeFont.fa_angle_down = "\uf107";
    FontAwesomeFont.fa_desktop = "\uf108";
    FontAwesomeFont.fa_laptop = "\uf109";
    FontAwesomeFont.fa_tablet = "\uf10a";
    FontAwesomeFont.fa_mobile_phone = "\uf10b";
    FontAwesomeFont.fa_mobile = "\uf10b";
    FontAwesomeFont.fa_circle_o = "\uf10c";
    FontAwesomeFont.fa_quote_left = "\uf10d";
    FontAwesomeFont.fa_quote_right = "\uf10e";
    FontAwesomeFont.fa_spinner = "\uf110";
    FontAwesomeFont.fa_circle = "\uf111";
    FontAwesomeFont.fa_mail_reply = "\uf112";
    FontAwesomeFont.fa_reply = "\uf112";
    FontAwesomeFont.fa_github_alt = "\uf113";
    FontAwesomeFont.fa_folder_o = "\uf114";
    FontAwesomeFont.fa_folder_open_o = "\uf115";
    FontAwesomeFont.fa_smile_o = "\uf118";
    FontAwesomeFont.fa_frown_o = "\uf119";
    FontAwesomeFont.fa_meh_o = "\uf11a";
    FontAwesomeFont.fa_gamepad = "\uf11b";
    FontAwesomeFont.fa_keyboard_o = "\uf11c";
    FontAwesomeFont.fa_flag_o = "\uf11d";
    FontAwesomeFont.fa_flag_checkered = "\uf11e";
    FontAwesomeFont.fa_terminal = "\uf120";
    FontAwesomeFont.fa_code = "\uf121";
    FontAwesomeFont.fa_reply_all = "\uf122";
    FontAwesomeFont.fa_mail_reply_all = "\uf122";
    FontAwesomeFont.fa_star_half_empty = "\uf123";
    FontAwesomeFont.fa_star_half_full = "\uf123";
    FontAwesomeFont.fa_star_half_o = "\uf123";
    FontAwesomeFont.fa_location_arrow = "\uf124";
    FontAwesomeFont.fa_crop = "\uf125";
    FontAwesomeFont.fa_code_fork = "\uf126";
    FontAwesomeFont.fa_unlink = "\uf127";
    FontAwesomeFont.fa_chain_broken = "\uf127";
    FontAwesomeFont.fa_question = "\uf128";
    FontAwesomeFont.fa_info = "\uf129";
    FontAwesomeFont.fa_exclamation = "\uf12a";
    FontAwesomeFont.fa_superscript = "\uf12b";
    FontAwesomeFont.fa_subscript = "\uf12c";
    FontAwesomeFont.fa_eraser = "\uf12d";
    FontAwesomeFont.fa_puzzle_piece = "\uf12e";
    FontAwesomeFont.fa_microphone = "\uf130";
    FontAwesomeFont.fa_microphone_slash = "\uf131";
    FontAwesomeFont.fa_shield = "\uf132";
    FontAwesomeFont.fa_calendar_o = "\uf133";
    FontAwesomeFont.fa_fire_extinguisher = "\uf134";
    FontAwesomeFont.fa_rocket = "\uf135";
    FontAwesomeFont.fa_maxcdn = "\uf136";
    FontAwesomeFont.fa_chevron_circle_left = "\uf137";
    FontAwesomeFont.fa_chevron_circle_right = "\uf138";
    FontAwesomeFont.fa_chevron_circle_up = "\uf139";
    FontAwesomeFont.fa_chevron_circle_down = "\uf13a";
    FontAwesomeFont.fa_html5 = "\uf13b";
    FontAwesomeFont.fa_css3 = "\uf13c";
    FontAwesomeFont.fa_anchor = "\uf13d";
    FontAwesomeFont.fa_unlock_alt = "\uf13e";
    FontAwesomeFont.fa_bullseye = "\uf140";
    FontAwesomeFont.fa_ellipsis_h = "\uf141";
    FontAwesomeFont.fa_ellipsis_v = "\uf142";
    FontAwesomeFont.fa_rss_square = "\uf143";
    FontAwesomeFont.fa_play_circle = "\uf144";
    FontAwesomeFont.fa_ticket = "\uf145";
    FontAwesomeFont.fa_minus_square = "\uf146";
    FontAwesomeFont.fa_minus_square_o = "\uf147";
    FontAwesomeFont.fa_level_up = "\uf148";
    FontAwesomeFont.fa_level_down = "\uf149";
    FontAwesomeFont.fa_check_square = "\uf14a";
    FontAwesomeFont.fa_pencil_square = "\uf14b";
    FontAwesomeFont.fa_external_link_square = "\uf14c";
    FontAwesomeFont.fa_share_square = "\uf14d";
    FontAwesomeFont.fa_compass = "\uf14e";
    FontAwesomeFont.fa_toggle_down = "\uf150";
    FontAwesomeFont.fa_caret_square_o_down = "\uf150";
    FontAwesomeFont.fa_toggle_up = "\uf151";
    FontAwesomeFont.fa_caret_square_o_up = "\uf151";
    FontAwesomeFont.fa_toggle_right = "\uf152";
    FontAwesomeFont.fa_caret_square_o_right = "\uf152";
    FontAwesomeFont.fa_euro = "\uf153";
    FontAwesomeFont.fa_eur = "\uf153";
    FontAwesomeFont.fa_gbp = "\uf154";
    FontAwesomeFont.fa_dollar = "\uf155";
    FontAwesomeFont.fa_usd = "\uf155";
    FontAwesomeFont.fa_rupee = "\uf156";
    FontAwesomeFont.fa_inr = "\uf156";
    FontAwesomeFont.fa_cny = "\uf157";
    FontAwesomeFont.fa_rmb = "\uf157";
    FontAwesomeFont.fa_yen = "\uf157";
    FontAwesomeFont.fa_jpy = "\uf157";
    FontAwesomeFont.fa_ruble = "\uf158";
    FontAwesomeFont.fa_rouble = "\uf158";
    FontAwesomeFont.fa_rub = "\uf158";
    FontAwesomeFont.fa_won = "\uf159";
    FontAwesomeFont.fa_krw = "\uf159";
    FontAwesomeFont.fa_bitcoin = "\uf15a";
    FontAwesomeFont.fa_btc = "\uf15a";
    FontAwesomeFont.fa_file = "\uf15b";
    FontAwesomeFont.fa_file_text = "\uf15c";
    FontAwesomeFont.fa_sort_alpha_asc = "\uf15d";
    FontAwesomeFont.fa_sort_alpha_desc = "\uf15e";
    FontAwesomeFont.fa_sort_amount_asc = "\uf160";
    FontAwesomeFont.fa_sort_amount_desc = "\uf161";
    FontAwesomeFont.fa_sort_numeric_asc = "\uf162";
    FontAwesomeFont.fa_sort_numeric_desc = "\uf163";
    FontAwesomeFont.fa_thumbs_up = "\uf164";
    FontAwesomeFont.fa_thumbs_down = "\uf165";
    FontAwesomeFont.fa_youtube_square = "\uf166";
    FontAwesomeFont.fa_youtube = "\uf167";
    FontAwesomeFont.fa_xing = "\uf168";
    FontAwesomeFont.fa_xing_square = "\uf169";
    FontAwesomeFont.fa_youtube_play = "\uf16a";
    FontAwesomeFont.fa_dropbox = "\uf16b";
    FontAwesomeFont.fa_stack_overflow = "\uf16c";
    FontAwesomeFont.fa_instagram = "\uf16d";
    FontAwesomeFont.fa_flickr = "\uf16e";
    FontAwesomeFont.fa_adn = "\uf170";
    FontAwesomeFont.fa_bitbucket = "\uf171";
    FontAwesomeFont.fa_bitbucket_square = "\uf172";
    FontAwesomeFont.fa_tumblr = "\uf173";
    FontAwesomeFont.fa_tumblr_square = "\uf174";
    FontAwesomeFont.fa_long_arrow_down = "\uf175";
    FontAwesomeFont.fa_long_arrow_up = "\uf176";
    FontAwesomeFont.fa_long_arrow_left = "\uf177";
    FontAwesomeFont.fa_long_arrow_right = "\uf178";
    FontAwesomeFont.fa_apple = "\uf179";
    FontAwesomeFont.fa_windows = "\uf17a";
    FontAwesomeFont.fa_android = "\uf17b";
    FontAwesomeFont.fa_linux = "\uf17c";
    FontAwesomeFont.fa_dribbble = "\uf17d";
    FontAwesomeFont.fa_skype = "\uf17e";
    FontAwesomeFont.fa_foursquare = "\uf180";
    FontAwesomeFont.fa_trello = "\uf181";
    FontAwesomeFont.fa_female = "\uf182";
    FontAwesomeFont.fa_male = "\uf183";
    FontAwesomeFont.fa_gittip = "\uf184";
    FontAwesomeFont.fa_sun_o = "\uf185";
    FontAwesomeFont.fa_moon_o = "\uf186";
    FontAwesomeFont.fa_archive = "\uf187";
    FontAwesomeFont.fa_bug = "\uf188";
    FontAwesomeFont.fa_vk = "\uf189";
    FontAwesomeFont.fa_weibo = "\uf18a";
    FontAwesomeFont.fa_renren = "\uf18b";
    FontAwesomeFont.fa_pagelines = "\uf18c";
    FontAwesomeFont.fa_stack_exchange = "\uf18d";
    FontAwesomeFont.fa_arrow_circle_o_right = "\uf18e";
    FontAwesomeFont.fa_arrow_circle_o_left = "\uf190";
    FontAwesomeFont.fa_toggle_left = "\uf191";
    FontAwesomeFont.fa_caret_square_o_left = "\uf191";
    FontAwesomeFont.fa_dot_circle_o = "\uf192";
    FontAwesomeFont.fa_wheelchair = "\uf193";
    FontAwesomeFont.fa_vimeo_square = "\uf194";
    FontAwesomeFont.fa_turkish_lira = "\uf195";
    FontAwesomeFont.fa_try = "\uf195";
    FontAwesomeFont.fa_plus_square_o = "\uf196";
    return FontAwesomeFont;
})();

var IconMoonFont = (function () {
    function IconMoonFont() {
    }
    IconMoonFont.getCode = function (icon) {
        var code = IconMoonFont[icon.replace("-", "_")];
        if (code) {
            return code;
        } else {
            return "";
        }
    };
    IconMoonFont.fontFamily = "'icomoon'";

    IconMoonFont.fa_screen = "\ue600";

    IconMoonFont.fa_laptop = "\ue601";

    IconMoonFont.fa_mobile = "\ue602";

    IconMoonFont.fa_mobile2 = "\ue603";

    IconMoonFont.fa_tablet = "\ue604";

    IconMoonFont.fa_tv = "\ue605";

    IconMoonFont.fa_tree = "\ue606";

    IconMoonFont.fa_sitemap = IconMoonFont.fa_tree;

    IconMoonFont.fa_user = "\ue607";

    IconMoonFont.fa_users = "\ue608";

    IconMoonFont.fa_storage = "\ue609";

    IconMoonFont.fa_uniF51D = "\ue60a";

    IconMoonFont.fa_uniF51C = "\ue60b";

    IconMoonFont.fa_server = "\ue60c";

    IconMoonFont.fa_servers = "\ue60d";
    IconMoonFont.fa_serverbox = "\ue60d";

    IconMoonFont.fa_network = "\ue60e";

    IconMoonFont.fa_hdtv = "\ue60f";

    IconMoonFont.fa_user2 = "\ue610";

    IconMoonFont.fa_friends = "\ue611";

    IconMoonFont.fa_monitor = "\ue612";
    IconMoonFont.fa_desktop = "\ue612";

    IconMoonFont.fa_treediagram = "\ue613";

    IconMoonFont.fa_iphone = "\ue614";

    IconMoonFont.fa_nexus = "\ue615";

    IconMoonFont.fa_imac = "\ue616";

    IconMoonFont.fa_tablet2 = "\ue617";

    IconMoonFont.fa_touchpad = "\ue618";

    IconMoonFont.fa_sidebar = "\ue619";

    IconMoonFont.fa_browser = "\ue61a";
    IconMoonFont.fa_client = IconMoonFont.fa_browser;

    IconMoonFont.fa_android = "\ue61b";
    IconMoonFont.fa_windows = "\ue61c";
    IconMoonFont.fa_apple = "\ue61d";
    IconMoonFont.fa_linux = "\ue61e";
    IconMoonFont.fa_cogs = "\ue61f";
    IconMoonFont.fa_osx = IconMoonFont.fa_apple;
    IconMoonFont.fa_mac = IconMoonFont.fa_apple;
    IconMoonFont.fa_ios = IconMoonFont.fa_apple;
    IconMoonFont.fa_device = "\ue61f";
    IconMoonFont.fa_winphone = IconMoonFont.fa_windows;
    return IconMoonFont;
})();

var IconFont = (function () {
    function IconFont() {
    }
    IconFont.getCode = function (icon) {
        var code = IconMoonFont.getCode(icon);
        if (code.length == 0) {
            code = FontAwesomeFont.getCode(icon);
            if (code.length == 0) {
                code = "";
            }
        }
        return code;
    };
    return IconFont;
})();
///<reference path="IconFont.ts" />
/**
* ...
* @author
*/
var FxSelectorLabelProvider = (function () {
    function FxSelectorLabelProvider() {
    }
    FxSelectorLabelProvider.prototype.addListener = function (listener) {
    };

    //The DecoratingLabelProvider implementation of this IBaseLabelProvider method adds the listener to both the nested label provider and the label decorator.
    FxSelectorLabelProvider.prototype.dispose = function () {
    };

    //The DecoratingLabelProvider implementation of this IBaseLabelProvider method disposes both the nested label provider and the label decorator.
    /*Color*/
    FxSelectorLabelProvider.prototype.getBackground = function (element, i) {
        return null;
    };

    //Provides a background color for the given element.
    FxSelectorLabelProvider.prototype.getStyle = function (element, i) {
        return null;
    };

    /*Font*/
    FxSelectorLabelProvider.prototype.getFont = function (element, i) {
        return IconMoonFont.fontFamily;
    };

    //Provides a font for the given element.
    /*Color*/
    FxSelectorLabelProvider.prototype.getForeground = function (element, i) {
        return null;
    };

    //Provides a foreground color for the given element.
    /*Image*/
    FxSelectorLabelProvider.prototype.getImage = function (element, i) {
        return null;
    };

    //The DecoratingLabelProvider implementation of this ILabelProvider method returns the image provided by the nested label provider's getImage method, decorated with the decoration provided by the label decorator's decorateImage method.
    FxSelectorLabelProvider.prototype.getLabelDecorator = function () {
        return null;
    };

    //Returns the label decorator, or null if none has been set.
    FxSelectorLabelProvider.prototype.getLabelProvider = function () {
        return null;
    };

    //Returns the nested label provider.
    FxSelectorLabelProvider.prototype.getText = function (element, i) {
        return IconMoonFont.getCode(element.icon);
    };

    //The DecoratingLabelProvider implementation of this ILabelProvider method returns the text label provided by the nested label provider's getText method, decorated with the decoration provided by the label decorator's decorateText method.
    FxSelectorLabelProvider.prototype.isLabelProperty = function (element, property) {
        return true;
    };

    //The DecoratingLabelProvider implementation of this IBaseLabelProvider method returns true if the corresponding method on the nested label provider returns true or if the corresponding method on the decorator returns true.
    FxSelectorLabelProvider.prototype.removeListener = function (listener) {
    };

    //The DecoratingLabelProvider implementation of this IBaseLabelProvider method removes the listener from both the nested label provider and the label decorator.
    FxSelectorLabelProvider.prototype.setLabelDecorator = function (decorator) {
    };
    return FxSelectorLabelProvider;
})();
///<reference path="./d.ts/d3.d.ts" />
///<reference path="IconFont.ts" />
///<reference path="FxSelectorLabelProvider.ts" />
var FxSelectorTree = (function () {
    //"#body",720, 500
    function FxSelectorTree(placeholder, viewboxWidth, viewboxHeight, divWidth, divHeight) {
        this.m = [10, 60, 10, 60], this.w = viewboxWidth - this.m[1] - this.m[3];
        this.h = viewboxHeight - this.m[0] - this.m[2];
        this.i = 0;
        this.root = null;
        this.labelProvider = new FxSelectorLabelProvider();

        this.tree = d3.layout.tree().size([this.h, this.w]);
        var sep = this.tree.separation;
        this.diagonal = d3.svg.diagonal().projection(function (d, i) {
            return [d.y - 10, d.x];
        });

        if (divWidth && divHeight) {
            this.vis = d3.select(placeholder).append("svg:svg").attr("width", divWidth).attr("height", divHeight).attr("viewBox", "0 0 " + String(this.w + this.m[1] + this.m[3]) + " " + String(this.h + this.m[0] + this.m[2])).append("svg:g").attr("transform", "translate(" + this.m[3] + "," + this.m[0] + ")");
        } else {
            this.vis = d3.select(placeholder).append("svg:svg").attr("width", String(viewboxWidth)).attr("height", String(viewboxHeight)).attr("viewBox", "0 0 " + String(this.w + this.m[1] + this.m[3]) + " " + String(this.h + this.m[0] + this.m[2])).append("svg:g").attr("transform", "translate(" + this.m[3] + "," + this.m[0] + ")");
        }

        this.vis.append('svg:defs').append('svg:marker').attr('id', 'end-arrow').attr('viewBox', '0 -5 10 10').attr('refX', 6).attr('refy', 0).attr('markerWidth', 4).attr('markerHeight', 4).attr('orient', 'auto').append('svg:path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#000');

        this.vis.append("g").attr("id", "links");
        this.vis.append("g").attr("id", "nodes");
    }
    FxSelectorTree.getIExplorerVersion = function () {
        // Returns the version of Internet Explorer or a -1
        // (indicating the use of another browser).
        var rv = -1;
        if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        } else if (navigator.appName == 'Netscape') {
            var ua = navigator.userAgent;
            var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null)
                rv = parseFloat(RegExp.$1);
        }
        return rv;
    };

    FxSelectorTree.prototype.show = function (json) {
        this.root = json;
        this.root.x0 = this.h / 2;
        this.root.y0 = 0;

        var _this = this;
        function toggleAll(d, i) {
            if (d.children) {
                d.children.forEach(_this.toggleAll);
                _this.toggle(d, i);
            }
        }

        // Initialize the display to show a few nodes.
        //root.children.forEach(toggleAll);
        //toggle(root.children[1]);
        //toggle(root.children[1].children[2]);
        //toggle(root.children[9]);
        //toggle(root.children[9].children[0]);
        this.update(this.root);
    };

    FxSelectorTree.prototype.update = function (source) {
        var duration = d3.event && d3.event.altKey ? 5000 : 500;

        // Compute the new tree layout.
        this.tree.children(function (d, i) {
            return d.entries;
        });
        var nodes = this.tree.nodes(this.root).filter(function (d, i) {
            return (d.name != "root") ? d : null;
        }).reverse();

        // Normalize for fixed-depth.
        nodes.forEach(function (d, i) {
            d.y = d.depth * 80;
        });
        var links = this.tree.links(nodes);

        this.updateLinks(this.vis, links, source, duration);
        this.updateNodes(this.vis, nodes, source, duration);

        // Stash the old positions for transition.
        nodes.forEach(function (d, i) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
        // updateRegion(vis,nodes);
    };

    FxSelectorTree.prototype.updateNodes = function (svg, nodes, source, duration) {
        // Update the nodes…
        var _this = this;
        var node = svg.select("#nodes").selectAll("g.node").data(nodes, function (d, i) {
            return d.id || (d.id = ++_this.i);
        });

        //Enter
        // Enter any new nodes at the parent's current position.
        var _this = this;
        var nodeEnter = node.enter().append("svg:g").attr("class", "node").attr("transform", function (d, i) {
            return "translate(" + source.y + "," + source.x + ")";
        }).on("click", function (d, i) {
            _this.toggle(d, i);
            _this.update(d, i);
        });

        //invisible circle
        nodeEnter.append("svg:circle").attr("r", 1e-6).style("fill", function (d, i) {
            return d._children ? "lightsteelblue" : "#fff";
        });

        //invisible text
        nodeEnter.append("svg:text").attr("x", function (d, i) {
            return d.children || d._children ? -10 : 10;
        }).attr("dy", function (d, i) {
            return d.children || d._children ? "-1.35em" : ".35em";
        }).attr("text-anchor", function (d, i) {
            return d.children || d._children ? "end" : "start";
        }).text(function (d, i) {
            return d.name;
        }).style("fill-opacity", 1e-6);

        //IconMoonFont
        nodeEnter.append("svg:text").attr("x", function (d, i) {
            return -8;
        }).attr("y", function (d, i) {
            return 6;
        }).attr("text-anchor", function (d, i) {
            return "start";
        }).style("fill-opacity", 1e-6).style("cursor", "pointer").append("tspan").style("font-family", function (d, i) {
            return _this.labelProvider.getFont(d, i);
        }).text(function (d, i) {
            return _this.labelProvider.getText(d, i);
        });

        //Update
        // Transition nodes to their new position.
        var nodeUpdate = node.transition().duration(duration).attr("transform", function (d, i) {
            if (d.type === "root") {
                return "translate(" + (d.y - 4) + "," + d.x + ")";
            } else {
                return "translate(" + (d.y + 4) + "," + d.x + ")";
            }
        });

        //make cirlce visible
        nodeUpdate.select("circle").attr("r", 12).style("fill", function (d, i) {
            return d._children ? "lightsteelblue" : "#fff";
        });

        //make text visible
        nodeUpdate.selectAll("text").style("fill-opacity", 1);

        //Exit
        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition().duration(duration).attr("transform", function (d, i) {
            return "translate(" + source.y + "," + source.x + ")";
        }).remove();

        nodeExit.select("circle").attr("r", 1e-6);

        nodeExit.selectAll("text").style("fill-opacity", 1e-6);
    };

    FxSelectorTree.prototype.updateLinks = function (svg, links, source, duration) {
        // Update the links…
        var link = this.vis.select("#links").selectAll(".link").data(links, function (d, i) {
            return d.source.x + "-" + d.source.name + d.source.y + "-" + d.target.x + "-" + d.target.y + d.target.name;
        });

        var _this = this;

        // Enter any new links at the parent's previous position.
        var insert = link.enter().insert("svg:path", "g");

        //IE has a bug for markers
        if (FxSelectorTree.getIExplorerVersion() > -1) {
            //IE issues
            insert.attr("class", "link").attr("d", function (d, i) {
                var o = { x: source.x0, y: source.y0 };
                return _this.diagonal({ source: o, target: o });
            }).transition().duration(duration).attr("d", _this.diagonal);
        } else {
            insert.attr("class", "link").style('marker-start', 'url(#start-arrow)').style('marker-end', 'url(#end-arrow)').attr("d", function (d, i) {
                var o = { x: source.x0, y: source.y0 };
                return _this.diagonal({ source: o, target: o });
            }).transition().duration(duration).attr("d", _this.diagonal);
        }

        // Transition links to their new position.
        link.transition().duration(duration).attr("d", _this.diagonal);

        //*/
        // Transition exiting nodes to the parent's new position.
        link.exit().transition().duration(duration).attr("d", function (d, i) {
            var o = { x: source.x, y: source.y };
            return _this.diagonal({ source: o, target: o });
        }).remove();
    };

    FxSelectorTree.prototype.updateRegion = function (vis, nodes) {
        //bounding boxes
        var filtered = nodes;

        var container = vis.selectAll(".container").data(filtered);
        container.exit().remove(); //*/

        container.enter().append("g").attr("class", "container").attr("transform", function (d, i) {
            //find min max d.x
            var minx = Number.MAX_VALUE;
            var maxx = Number.MIN_VALUE;
            for (var i in d.children) {
                minx = Math.min(minx, d.children[i].x - 30);
                maxx = Math.max(maxx, d.children[i].x + 30);
            }

            console.log("min=" + minx + " max=" + maxx);
            d.minx = minx;
            d.maxx = maxx;

            return "translate(" + (d.children[0].y - 20) + "," + (minx) + ")";
        });

        //x0,y=0 before translation
        container.append("rect").attr("height", function (d, i) {
            return d.maxx - d.minx;
        }).attr("width", function (d, i) {
            //return off-40;
            return 60;
        });
    };

    // Toggle children.
    //
    /*
    function toggle(d,i) {
    if (d.children) {
    d._children = d.children;
    d.children = null;
    } else {
    d.children = d._children;
    d._children = null;
    }
    }//*/
    FxSelectorTree.prototype.toggle = function (d, i) {
        if (d.entries) {
            d._children = d.entries;
            d.entries = null;
        } else {
            d.entries = d._children;
            d._children = null;
        }
    };
    return FxSelectorTree;
})();
//# sourceMappingURL=application.js.map
