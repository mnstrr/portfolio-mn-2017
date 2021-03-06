module.exports = {
	ajax: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/server/mocks',
				src: '**/*.{json,html}',
				dest: '<%= paths.app %>/mocks'
			}
		]
	},
	assets: {
		files: [
			// includes files within path and its sub-directories
			{
				cwd: '<%= paths.src %>/assets',
				src: [
					'**/{,*/}*'
					//TODO: add exception for source images
				],
				dest: '<%= paths.app %>'
			}
		]
	}
};
