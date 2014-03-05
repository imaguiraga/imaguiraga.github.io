/*
 * Generated on 2014-02-13
 * generator-assemble v0.4.3
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  var path = require('path');
  var hljs = require('highlight.js');

  // Project configuration.
  grunt.initConfig({
    webapp: {
      src: 'src/_webapp/templates',
      dist: 'dist/webapp'
    },

    watch: {
      assemble: {
        files: ['<%= webapp.src %>/{data,pages}/{,*/}*.{md,hbs,yml,md_,html}'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= webapp.dist %>/{,*/}*.html',
          '<%= webapp.dist %>/assets/{,*/}*.css',
          '<%= webapp.dist %>/assets/{,*/}*.js',
          '<%= webapp.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= webapp.dist %>'
          ]
        }
      }
    },

    assemble: {
       options: {
        postprocess: require('pretty'),
        marked: {
          breaks: true,
          gfm: true,

          highlight: function (code, lang, callback)  {
            return hljs.highlight(lang, code).value;
          },

          //langPrefix: 'language-',
          pedantic: false,
          sanitize: false,
          silent: false,
          smartLists: false,
          smartypants: false,
          tables: true
        },
        layout: 'index.layout.html',
        plugins: ['assemble-contrib-anchors','assemble-contrib-permalinks','assemble-contrib-sitemap','assemble-contrib-toc']
      },

      webapp: {
        options: {
          flatten: true,
          helpers: '<%= webapp.src %>/helpers/helper-*.js',
          assets: '<%= webapp.dist %>/assets',
          layoutdir: '<%= webapp.src %>/layouts',
          data: '<%= webapp.src %>/data/*.{json,yml}',
          partials: '<%= webapp.src %>/includes/*.{hbs,md,md_,html}'
        },
        files: {
          '<%= webapp.dist %>/': ['<%= webapp.src %>/pages/*.{hbs,md,md_,html}']
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= webapp.dist %>/**'],
    //Copy assets files
    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {
            expand: true,
            flatten: false,
            cwd: '<%= webapp.src %>/static/',
            src: ['**/!(_*.*)'], dest: '<%= webapp.dist %>/',
            filter: function(filepath) {
              //console.log(path.basename(filepath)+" - "+(path.basename(filepath).charAt(0) != "_"));
              return true;//path.basename(filepath).charAt(0) != "_";//skip file/dir with _
            }
          }
        ]
      }
    },
    typescript: {
        base: {
          src: ['<%= webapp.src %>/static/_typescript/**/*.ts'],
          dest: '<%= webapp.src %>/static/assets/scripts/js',
          flatten:true,
          options: {
            //module: 'amd', //or commonjs
            target: 'es5', //or es3
            //base_path: 'path/to/typescript/files',
            sourcemap: true,
            declaration: true
          }
        }
      }

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-toc');
  grunt.loadNpmTasks('grunt-typescript');

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'typescript',
    'copy',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
