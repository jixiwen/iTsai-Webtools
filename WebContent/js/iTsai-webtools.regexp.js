/**
 * iTsai WebTools(Web开发工具集)
 * 
 * @author Chihpeng Tsai(470597142@qq.com)
 * @description 常用正则表达式.
 */

(function() {
	if (!window.iTsai)
		iTsai = {};
})();
iTsai.regexp = {
	toString : function() {
		return 'iTsai.layer - 常用正则表达式';
	},
	domain : /^[\w-]*(\.[\w-]*)+/ig,
	url : /https?:\/\/[\w-]*(\.[\w-]*)+/ig,
	ftp : /ftp:\/\/[\w-]*(\.[\w-]*)+/ig,
	smtp : /smtp:\/\/[\w-]*(\.[\w-]*)+/ig,
	email : /^[-a-zA-Z0-9_\.]+@([0-9A-Za-z][0-9A-Za-z-]+\.)+[A-Za-z]{2,5}$/,
	ipv4 : /^([01]?\d\d?|2[0-4]\d|25[0-5])(\.([01]?\d\d?|2[0-4]\d|25[0-5])){3}$/,
	mac : /^[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}$/,
	rang0t65535 : /^(\d{1,4}|[1-5]\d{4}|6([0-4]\d{3}|5([0-4]\d{2}|5([0-2]\d|3[0-5]))))$/,
	phone : /(^[0-9]{1,4}\-[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)/,// 9999-9999-99999999可包含国际码
	/**
	 * 中文字符
	 */
	char_zhcn : /[u4e00-u9fa5]/,
	byte : /[^x00-xff]/,
	/**
	 * ASCII字符
	 */
	ascii : /[^\x00-xff]/,
	blank : /\s/,
	notBlank : /\S/,
};