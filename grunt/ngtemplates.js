module.exports = {
	dev: {
		options: {
			append: true,
			module: 'qookiescode'
		},
		cwd: '<%= config.src.app %>',
		src: [
			'**/*.html',
			'!*.html'
		],
		dest: '<%= config.dist.root %>qookiescode.js'
	},
	dist: {
		options: {
			append: true,
			module: 'qookiescode',
			htmlmin: {
				removeComments: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true
			}
		},
		cwd: '<%= config.src.app %>',
		src: [
			'**/*.html',
			'!*.html'
		],
		dest: '<%= config.dist.root %>qookiescode.js'
	}
};
