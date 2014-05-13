'use strict';
module.exports = function(grunt) {
	grunt.initConfig({ /* Working with Dev-Server */
		connect: {
			dev: {
				options: {
					debug: true,
					port: 9000,
					base: '.',
					hostname: 'streets.lcl'
				}
			}
		},
		/* Working with Watchers */
		watch: {
			css: {
				files: ['css/dev/*.css'],
				tasks: ['autoprefixer', 'borschik']
			},
			html: {
				files: ['index.dev.html'],
				tasks: ['htmlmin']
			}
		},
		concurrent: {
			options: {
				logConcurrentOutput: true
			},
			tasks: ['watch:css', 'watch:html']
		},
		/* Working with CSS */
		autoprefixer: {
			options: {
				browsers: ['last 5 version', 'ie 8', 'ie 9', 'ff 13', 'opera 12']
			},
			multiple_files: {
				flatten: true,
				expand: true,
				src: 'css/dev/*.css',
				dest: 'css/dist/'
			}
		},
		borschik: {
			css: {
				src: ['css/styles.css'],
				dest: ['css/compile/styles.min.css'],
				options: {
					minimize: true
				}
			}
		},
		/* Working with HTML */
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'index.html': 'index.dev.html',
				}
			}
		}
	});
	require('load-grunt-tasks')(grunt);
	grunt.registerTask('default', ['connect']);
	grunt.registerTask('dev', ['autoprefixer', 'borschik', 'htmlmin', 'connect', 'concurrent:tasks']);
	grunt.registerTask('build', ['autoprefixer', 'borschik', 'htmlmin']);
};