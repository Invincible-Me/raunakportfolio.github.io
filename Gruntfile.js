module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            css: {
                src : ['css/sass/main.scss', 'css/sass/theme.scss'],
                dest: 'build/css/styles.css',
            },
        },
        uglify: {
            js: {
                src : ['js/main.js'],
                dest: 'build/js/main.min.js',
            }
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['uglify:js'],
            },
            css: {
                files: ['css/**/*.scss'],
                tasks: ['concat:css'],
            },
        },
    });

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default', ['concat', 'watch', 'uglify']);
};