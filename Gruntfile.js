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
                    "public/css/app.css": "css/app.less"
                }
            }
        },

        watch: {
            scripts: {
                files: ['js/**/*.js', 'css/**/*.less'],
                tasks: ['concat','less'],
                options: {
                    spawn: false
                }
            }
        },


        concat: {
            basic_and_extras: {
                files: {
                    'public/js/app.js': ['js/app.js', 'js/**/*.js'],
                    'public/js/lib.js': ['libs/angular/angular.js', 'libs/angular-mocks/angular-mocks.js','libs/angular-route/angular-route.js']
                }
            }
        }



    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');


    grunt.registerTask('default', ['watch']);


};



