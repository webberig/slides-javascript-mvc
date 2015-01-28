/*global module:false*/
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        folders: {
            components: 'bower_components',
            dist: 'dist',
            src: 'src'
        },

        copy: {
            reveal: {
                files: [
                    {
                        src: '**',
                        dest: '<%= folders.dist %>/reveal.js/css/',
                        expand: true,
                        cwd: '<%= folders.components %>/reveal.js/css/'
                    },
                    {
                        src: '**',
                        dest: '<%= folders.dist %>/reveal.js/js/',
                        expand: true,
                        cwd: '<%= folders.components %>/reveal.js/js/'
                    },
                    {
                        src: '**',
                        dest: '<%= folders.dist %>/reveal.js/lib/',
                        expand: true,
                        cwd: '<%= folders.components %>/reveal.js/lib/'
                    },
                    {
                        src: '**',
                        dest: '<%= folders.dist %>/reveal.js/plugin/',
                        expand: true,
                        cwd: '<%= folders.components %>/reveal.js/plugin/'
                    }

                ]
            }
        },
        less: {
            options: {
                paths: [
//                    '<%= folders.components %>',
                    '<%= folders.src %>/less'
                ]
            },
            main: {
                src: '<%= folders.src %>/less/*.less',
                expand: true,
                flatten: true,
                ext: '.css',
                dest: '<%= folders.dist %>/css/'
            }
        },
        concat: {
            app: {
                src: ['<%= folders.src %>/js/app.js', '<%= folders.src %>/js/slides/*.js'],
                dest: '<%= folders.dist %>/js/app.js'
            }
        },
        twigger: {
            options: {
                twig: {
                    base: '<%= folders.src %>/views/'
                }
            },
            main: {
                src: '<%= folders.src %>/views/index.html.twig',
                dest: '<%= folders.dist %>/index.html'
            }
        },
        watch: {
            twig: {
                files: '<%= folders.src %>/views/**/*',
                tasks: ['twigger']
            },
            css: {
                files: '<%= folders.src %>/less/**/*',
                tasks: ['less']
            }

        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-twigger');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['copy', 'twigger', 'less', 'concat']);

};