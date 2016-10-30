module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      scripts: {
        files: "less/styles.less",
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    },
    less: {
      development: {
        files: {
          "css/styles.css": "less/styles.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['serve', 'less', 'watch']);
};
