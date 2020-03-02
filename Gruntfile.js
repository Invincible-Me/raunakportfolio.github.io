module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            css: {
                src : ['css/main.css', 'css/noscript.css', 'css/scss/**/*.scss'],
                dest: 'build/css/styles.css',
            },
        },
        uglify: {
            js: {
                src : ['js/main.js'],
                dest: 'build/js/main.min.js',
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    cwd: 'images/',
                    expand: true,
                    src: ['**/*.{png,jpg,svg}'],
                    dest: 'build/images'
                  }]
            }
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['uglify:js'],
            },
            css: {
                files: ['css/**/*.scss', 'css/*.css'],
                tasks: ['concat:css'],
            },
        },
    });

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.registerTask('default', ['concat', 'watch', 'uglify', 'imagemin']);
};