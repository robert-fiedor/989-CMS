/**
 * Created by Rob on 11/8/2014.
 */

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "public/css/app.css": "src/less/app.less"
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/app/**/!(*.spec).js','src/less/*.less'],
                tasks: ['concat', 'less', 'uglify'],
                options: {
                    spawn: false
                }
            }
        },

        concat: {
            basic_and_extras: {
                files: {
                    'public/js/app.js': ['src/app.js','src/app/**/!(*.spec).js'],
                    'public/js/lib.js': [
                        'src/libs/angular/angular.js',
                        'src/libs/angular-mocks/angular-mocks.js',
                        'src/libs/bower-angular-resource-master/angular-resource.js',
                        'src/libs/angular-route/angular-route.js',
                        'src/libs/angular-ui-router.js',
                        'src/libs/ui-bootstrap-tpls-0.12.0.js',
                        'src/libs/lodash.js'
                    ]
                }
            }
        },

        uglify: {
            options: {
                sourceMap: true
            },
            js: {
                files: {
                    'public/js/lib-min.js': ['public/js/lib.js'],
                    'public/js/app-min.js': ['public/js/app.js']
                }
            }
        },

        //dont delete
        //https://www.npmjs.com/package/grunt-karma

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: true

            }
        },


        simplemocha: {
            options: {
                globals: ['should'],
                timeout: 3000,
                ignoreLeaks: false,
                grep: '*-test',
                ui: 'bdd',
                reporter: 'tap'
            },

            all: {src: ['tests/**/*.js']}
        }

    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['concat', 'less', 'uglify','watch', ]);


};



