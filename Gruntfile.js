module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: '_site/',
          port: 4000,
          open: true,
          hostname: '0.0.0.0'
        }
      }
    },
    shell: {
      prod: {
        command: "jekyll build --config '_config-prod.yml'",
        options: {
          async: false
        }
      },
      dev: {
        command: 'jekyll build',
        options: {
          async: false
        }
      }
    },
    watch: {
      css: {
        files: ['_sass/**/*.scss'],
        tasks: ['compass','shell:dev'],
      },
      html: {
        files: [
          '**/*.html',
          '**/*.md',
          '!_site/**/*.html'
        ],
        tasks: ['shell:dev']
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    copy: {
      main: {
        src: 'lib/js/vendor/modernizr-2.6.2.min.js',
        dest: 'js/vendor/modernizr-2.6.2.min.js',
      },
    },
    concat: {
      index: {
        src: [
          'lib/js/vendor/jquery-1.11.1.min.js',
          'lib/js/vendor/underscore-min.js',
          'lib/js/vendor/backbone-min.js',
          'lib/js/vendor/jquery.mousewheel.js',
          'lib/js/vendor/jquery.jscrollpane.js',
          'lib/js/vendor/waypoints.min.js',
          'lib/js/app.js',
          'lib/js/ui/navbar.js'
        ],
        dest: 'js/docs.js',
      }
    },
    uglify: {
      dist: {
        files: {
          'js/docs.min.js': ['js/docs.js'],
          'js/index.min.js': ['lib/js/index.js'],
          'js/editor.min.js': ['lib/js/editor.js'],
          'js/tutorials.min.js': ['lib/js/tutorials.js']
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'css/docs.min.css': [
            'lib/css/vendor/jquery.jscrollpane.css',
            'lib/css/vendor/syntax.css',
            'lib/css/docs.css'
          ]
        }
      }
    }
  });

  grunt.registerTask('build', [
    'copy',
    'concat',
    'uglify',
    'compass',
    'cssmin',
    'shell:prod',
  ]);

  grunt.registerTask('default', [
    // 'test',
    'compass',
    'shell:dev',
    'connect',
    'watch'
  ]);
};