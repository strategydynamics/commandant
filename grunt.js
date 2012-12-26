module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-coffee');

  grunt.initConfig({
    lint: {
      all: ['grunt.js', './examples/scene.js', './test/*.js']
    },
    test: {
      files: ['test/*.js']
    },
    concat: {
      dist: {
        src: ['./node_modules/q/q.js', './commandant.js'],
        dest: './commandant.q.js'
      }
    },
    min: {
      dist: {
        src: ['./commandant.js'],
        dest: './commandant.min.js'
      },
      dist_q: {
        src: ['./commandant.q.js'],
        dest: './commandant.q.min.js'
      }
    },
    uglify: {
      mangle: { toplevel: false },
      squeeze: { dead_code: true },
      codegen: { beautify: false }
    },
    coffee: {
      app: {
        src: ['commandant.coffee'],
        dest: './',
        options: {
          bare: false
        }
      }
    }
  });

  grunt.registerTask('default', 'coffee lint test concat min');
};
