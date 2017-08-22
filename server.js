var express = require('express')
var app = express()

app.set('view engine', 'pug')

app.get('/', function(req,res){
	res.render('index')
})

app.listen(8000,function(err){
	if(err) return console.log('hubo un error'), process.exit(1)

	console.log('Platzigram escuchando en el puerto 8000')

})