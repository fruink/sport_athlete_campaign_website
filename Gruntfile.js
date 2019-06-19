module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),//read all the packages inside the json file

    uglify: {
      build: {
        src: 'js/app.js',
        dest: 'prod/app.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};
