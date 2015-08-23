#Gruntfile.coffee
module.exports = (grunt) ->
	#config
	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'

		paths:
			srcDir: 'src/'
			distDir: 'dist/'

		compass:
			dev:
				options:
					httpPath: '/'
					cssDir: '<%= paths.srcDir %>css/'
					sassDir: '<%= paths.srcDir %>scss/'
					imagesDir: '<%= paths.srcDir %>img/'
					javascriptDir: '<%= paths.srcDir %>js/'
					outputStyle: 'expanded'
					noLineComments: true
					environment: 'development'

		sprite:
			all:
				src: '<%= paths.srcDir %>img/sprite/*.png'
				dest: '<%= paths.distDir %>img/sprite.png'
				destCss: '<%= paths.srcDir %>scss/sprite/_sprite.scss'
				algorithm: 'binary-tree'
				padding: 5

		cssmin:
			files:
				expand: true
				cwd: '<%= paths.srcDir %>css/'
				src: 'common.css'
				dest: '<%= paths.distDir %>css/'
				ext: ".css"
				
		concat: 
			files: 
				src: '<%= paths.srcDir %>js/*.js'
				dest: '<%= paths.distDir %>js/common.js'

		watch:
			css:
				files: ['<%= paths.srcDir %>scss/*.scss','<%= paths.srcDir %>css/common.css']
				tasks: ['compass:dev','cssmin']
			js:
				files: '<%= paths.srcDir %>js/*.js'
				tasks: ['concat']

	#plugin
	grunt.loadNpmTasks 'grunt-contrib-concat'
	grunt.loadNpmTasks 'grunt-contrib-cssmin'
	grunt.loadNpmTasks 'grunt-contrib-compass'
	grunt.loadNpmTasks 'grunt-spritesmith'
	grunt.loadNpmTasks 'grunt-contrib-watch' 

	#tasks
	grunt.registerTask 'default',['concat','sprite','watch']