module.exports = function(grunt) {
	var srcDir = 'public/src';
	var buildDir = 'public/build';
	
	var gruntNpmTasks = [
		'grunt-contrib-clean',
		'grunt-contrib-concat',
		'grunt-contrib-uglify',
		'grunt-contrib-watch',
		'grunt-replace',
		'grunt-ssh',
		'grunt-connect'
	];

	grunt.initConfig({
		srcDir: srcDir,
		buildDir: buildDir,
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
			},
			file: {
				src: ['<%= opt %>.js'],
				dest: '<%= opt %>.min.js'
			}
		},
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
		'build',
		[
			'default',
			'uglify'
		]
	);
	
	grunt.registerTask(
		'deploy',
		[
			'default',
			'replace',
			'uglify'
		]
	);
};