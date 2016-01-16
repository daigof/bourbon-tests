'use strict';

var gulp = require( 'gulp' );
var del = require( 'del' );
var sass = require( 'gulp-ruby-sass' );

gulp.task( 'clean', function() {
  return del( [
    // here we use a globbing pattern to match everything inside the ` folder
    'dist/**/*'
    // we don't want to clean this file though so we negate the pattern
    // '!dist/mobile/deploy.json'
  ] );
} );

gulp.task( 'sass', function() {
  return sass( 'src/sass/app.scss' ).on( 'error', sass.logError ).pipe( gulp.dest( 'dist' ) );
} );

gulp.task( 'static', function() {
  gulp.src( 'src/**/*.html').pipe( gulp.dest( 'dist' ) );
} );

gulp.task( 'default', [ 'clean', 'sass', 'static' ] );
