module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        folder: {
            components: 'bower_components',
            src: 'resources',
            dist: 'public'
        },
        concat:
        {
            site: {
                src: [
                    '<%=folder.components%>/jquery/dist/jquery.js',
                    '<%=folder.components%>/underscore/underscore.js',
                    '<%=folder.components%>/backbone/backbone.js',
                    '<%=folder.components%>/backbone.stickit/backbone.stickit.js',

                    // Others
                    '<%=folder.src%>/js/*.js'

                ],
                dest: '<%=folder.dist%>/js/site.js'
            },
            modernizr: {
                src: [
                    '<%=folder.components%>/modernizr/modernizr.js'
                ],
                dest: '<%=folder.dist%>/js/modernizr.js'
            }
        },

        uglify: {
            site: {
                src: ['<%=folder.dist%>/js/site.js'],
                dest: '<%=folder.dist%>/js/site.js'
            },
            modernizr: {
                src: ['<%=folder.dist%>/js/modernizr.js'],
                dest: '<%=folder.dist%>/js/modernizr.js'
            }
        },
        less: {
            application: {
                options: {
                    paths: [
                        "<%=folder.components%>",
                        "<%=folder.src%>/less"
                    ],
                    yuicompress: false
                },
                files: {
                    "<%=folder.dist%>/css/screen.css": "<%=folder.src%>/less/css-screen.less"
                }
            }
        },
		watch: {
			gruntfile: {
				files: ['Gruntfile.js']
			},
			js: {
				files: '<%=folder.src%>/js/**/*.js',
				tasks: ['js']
			},
			css: {
				files: '<%=folder.src%>/less/**/*.less',
				tasks: ['css']
			}
		}
    });

    // Load tasks from "grunt-sample" grunt plugin installed via Npm.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('js', ['concat']);
    grunt.registerTask('css', 'less');

    // Default task.
    grunt.registerTask('default', ['css', 'js']);
    grunt.registerTask('deploy', ['default', 'uglify']);

};