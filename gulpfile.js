var gulp = require('gulp')
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var rucksack = require('rucksack-css')
var gls = require('gulp-live-server')
var rename = require('gulp-rename')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')




// vigilar cambios con sass
gulp.task('styles', function(){
	gulp
		.src('./src/scss/index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('./dist/css'))
		// .pipe(browserSync.stream())


})



function compile(watch) {
  var bundle = watchify(browserify('./src/index.js'));

  function rebundle() {
    bundle
      .transform(babel, {presets: ["es2015"]})
      .bundle()
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('./dist/js'))
  }

  if (watch) {
    bundle.on('update', () => {
      console.log('-->Bundling...');
      rebundle();
    });
  }

  rebundle();
}



//enviar elementos desde assets a dist(public)
gulp.task('assets', function(){
	gulp
		.src('assets/*')
		.pipe(gulp.dest('./dist/images'))
})


gulp.task('build', () => compile());

gulp.task('watch', () => compile(true));


// gulp.task('default', ['watch', 'serv', 'css'])
gulp.task('default', ['styles', 'assets','build'])