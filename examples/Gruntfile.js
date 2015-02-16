/*
 * grunt-flatdoc
 * https://github.com/sergiovilar/grunt-flatdoc
 *
 * Copyright (c) 2013 Sérgio Vilar
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    flatdoc: {
      folder:{
        options:{
          folder: 'doc',
          port:3333
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-flatdoc');
  // By default, lint and run all tests.
  grunt.registerTask('default', ['flatdoc']);

};
