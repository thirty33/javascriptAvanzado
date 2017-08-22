var gulp = require('gulp')
var sass = require('gulp-sass')
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
var gls = require('gulp-live-server')
var rename = require('gulp-rename')

// var server = gls.static(['dist', 'src'])


// vigilar cambios con sass
gulp.task('styles', function(){
	gulp
		.src('./src/scss/index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('./dist/css'))
		// .pipe(browserSync.stream())


})


//enviar elementos desde assets a dist(public)
gulp.task('assets', function(){
	gulp
		.src('assets/*')
		.pipe(gulp.dest('./dist'))
})

// gulp.task('serv', function () {
// 	browserSync.init({
// 		server: {
// 			baseDir: './dist'
// 		}
// 	})
// 	// server.start()
// })

// Tarea para procesar el css

// gulp.task('css', function(){
// 	var processors = [
// 		// autoprefixer({browsers : ['> 5%', 'ie 8']}),
// 		// atImport(),
// 		// mixins(),
// 		cssnested,
// 		// lost(),
// 		rucksack(),
// 		cssnext({browsers : ['> 5%', 'ie 8']}),
// 		// mqpacker(),
// 		// csswring()
// 	]

// 		return gulp.src('./src/index.css')
// 		.pipe(postcss(processors))
// 		.pipe(gulp.dest('./dist/css'))
// 		.pipe(browserSync.stream())
		
// })

// Tarea para vigilar los cambios 

// gulp.task('watch', function(){
// 	// gulp.watch('./src/*.css', ['css'])
// 	gulp.watch('./src/scss/*.scss', ['styles'])

// 	gulp.watch('./src/js/*.js').on('change', function(){
// 		browserSync.reload()
// 	})
// 	gulp.watch('./dist/*.html').on('change', function(file){
// 		browserSync.reload()
// 		// server.notify.apply(server,[file])
// 	})

	
// })


// gulp.task('default', ['watch', 'serv', 'css'])
gulp.task('default', ['styles', 'assets'])