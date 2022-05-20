module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: {
                    'dist/PokemonCardComponent.min.js': './PokemonCardComponent.js',
                    'dist/script.min.js': './script.js',
                    'dist/utils.min.js': './utils.js',
                    'dist/build.min.js': '{}.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['uglify']);
}