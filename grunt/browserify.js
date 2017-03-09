module.exports = {
	options: {
		watch: true
	},
	default: {
		src: [
			'<%= config.src.app %>qookiescode.js'
		],
		dest: '<%= config.dist.browserify %>qookiescode.js'
	}
};
