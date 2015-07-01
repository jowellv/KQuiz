'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.initConfig({
    mochaTest: {
      test: {
        options: {
        },
        src: ['test/*_test.js']
      }
    },
    jshint: {
      server: {
        src: ['Gruntfile.js',
              './lib/**/*.js',
              './models/**/*.js',
              './routes/**/*.js',
              './test/*test.js',
              '*.js'
             ],
      },
      options: {
        node: true,
        globals: {
          describe: true,
          it: true,
          before: true,
          after: true,
          beforeEach: true,
          afterEach: true
        }
      }
    },
    watch: {
      files: ['./app/**/*.js', './app/**/*.html'],
      tasks: ['build']
    }
  });
  grunt.registerTask('test', ['jshint:server', 'mochaTest']);
  grunt.registerTask('default', ['test']);
};
