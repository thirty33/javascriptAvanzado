var gulp = require('gulp')
var postcss = require('gulp-postcss')
var rucksack = require('rucksack-css')
var cssnext = require ('postcss-cssnext')
// var autoprefixer = require('autoprefixer')
var cssnested = require('postcss-nested')
// var mixins = require('postcss-mixins')
// var lost = require ('lost')
// var atImport = require('postcss-import')
// var csswring = require('csswring')
// var mqpacker = require('css-mqpacker')
var browserSync = require('browser-sync').create()

gulp.task('serv', function () {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	})
})

// Tarea para procesar el css

gulp.task('css', function(){
	var processors = [
		// autoprefixer({browsers : ['> 5%', 'ie 8']}),
		// atImport(),
		// mixins(),
		cssnested,
		// lost(),
		rucksack(),
		cssnext({browsers : ['> 5%', 'ie 8']}),
		// mqpacker(),
		// csswring()
	]

		return gulp.src('./src/index.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream())

})

// Tarea para vigilar los cambios 

gulp.task('watch', function(){
	gulp.watch('./src/*.css', ['css'])
	gulp.watch('./src/js/*.js').on('change', function(){
		browserSync.reload()
	})
	gulp.watch('./dist/*.html').on('change', function(){
		browserSync.reload()
	})


})


gulp.task('default', ['watch', 'serv', 'css'])