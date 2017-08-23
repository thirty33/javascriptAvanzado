var page = require('page')

var main = document.getElementById('main-container')


page('/', function(ctx, next){
	main.innerHTML = 'Homeeee'
})

page('/signup', function(ctx, next){
	main.innerHTML = 'signup2'
})

page()