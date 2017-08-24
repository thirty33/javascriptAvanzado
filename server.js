var gulp = require('gulp')
var gls = require('gulp-live-server')
var express = require('express')
var app = express()


app.set('view engine', 'pug')

app.use(express.static('dist')) 

app.get('/', function(req,res){
	res.render('index', {title : 'Platzigram'})
	 
})

app.get('/signup', function(req,res){
	res.render('index', {title : 'Platzigram - signup'})
	 
})

app.get('/signin', function(req,res){
	res.render('index',  {title : 'Platzigram - signin'})
	 
})



app.listen(8000,function(err){
	if(err) return console.log('hubo un error'), process.exit(1)

	console.log('Platzigram escuchando en el puerto 8000')

})