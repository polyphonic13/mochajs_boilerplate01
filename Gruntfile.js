module.exports = function(grunt) {
	var srcDir = 'public/src';
	var buildDir = 'public/build';
	var testDir = 'test';
	
	var gruntNpmTasks = [
		'grunt-contrib-clean',
		'grunt-contrib-concat',
		'grunt-contrib-copy',
		'grunt-contrib-uglify',
		'grunt-contrib-watch',
		'grunt-mocha-istanbul',
		'grunt-replace',
		'grunt-ssh',
		'grunt-connect'
	];

	grunt.initConfig({
		srcDir: srcDir,
		buildDir: buildDir,
		testDir: testDir,
		
		clean: {
			removeBuildDirs: ['<%= buildDir %>']
		},
		concat: {
			options: {
				separator: '\n',
				nonull: true
			},
			main: {
				src: [
					"<%= srcDir %>/js/animal.js"
				],
				dest: "<%= buildDir %>/js/animal.js"
			}
		},
		mocha_istanbul: {
			coverage: {
				src: 'test',
				options: {
					mask: '**/*.spec.js'
				}
			}
		},
		istanbul_check_coverage: {
			default: {
				options: {
					coverageFolder: 'coverage*',
					check: {
						lines: 80,
						statements: 80
					}
				}
			}
		},
		replace: {
			module_exports: {
				options: {
					patterns: [
					{
						match: /module\.exports.*/gi,
						replacement: ''
					}
				]
				},
				files: [{
					expand: true,
					cwd: '<%= buildDir %>',
					src: ['**/*.js'],
					dest: '<%= buildDir %>'
				}]
			}
		},
		uglify: {
			options: {
				report: 'gzip',
				sourceMap: true
			},
			main: {
				expand: true,
				report: 'gzip',
				cwd: '<%= buildDir %>/js/',
				src: ['**/*.js', '!*.min.js'],
				dest: '<%= buildDir %>/js/',
				ext: '.min.js'
			}
		},
		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: '<%= srcDir %>/',
						src: [ '**/*.html' ],
						dest: '<%= buildDir %>/'
					}
				]
			}
		},
		watch: {
			js: {
				files: [
					'<%= srcDir %>/js/**/*.js' 
				],
				tasks: ['build']
			},
			tests: {
				files: [
					'<%= testDir %>/js/**/*.js' 
				],
				tasks: ['mochaTest']
			}
		},
		connect: {
			dev: {
				port: 7000,
				base: 'public/',
				keepAlive: true
			}
		}
	});
	
    grunt.event.on('coverage', function(lcovFileContents, done){
		console.log('ON COVERAGE EVENT, lcovFileContents = ', lcovFileContents);
        done();
    });

	gruntNpmTasks.forEach(function(task) {
		grunt.loadNpmTasks(task);
	});
	
	grunt.registerTask(
		'default',
		[
			'clean',
			'concat'
		]
	);
	
	grunt.registerTask(
		'test',
		[
			'default',
			'uglify',
			'mocha_istanbul'
		]
	);
	
	grunt.registerTask(
		'build',
		[
			'test',
			'default',
			'copy',
			'replace',
			'uglify'
		]
	);
	
	grunt.registerTask(
		'deploy',
		[
			'build',
			// some stuff to get files to production server
		]
	);
};