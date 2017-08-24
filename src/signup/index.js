var page = require('page')
var empty = require('empty-element')
var template = require('./template')


page('/signup', function(ctx, next){
	var main = document.getElementById('main-container')
	// var main = $('#main-container')
	// main.append(template)
	// var main = $('#main-container')

	empty(main).appendChild(template)

	// main.innerHTML = '<div class="col s12 m7"><div class="row"><div class="singup-box"><h1 class="platzigram">Platzigram</h1><form action="" class="singup-form"><h2 class="sub-title">registrate para ver fotos de tus amigos estudiando en platzi</h2><div class="section"><a href="" class="btn btn-fb hide-on-small-only">Iniciar sesion con facebook</a><a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesion</a><div class="divider"></div><div class="section"><input type="email" name="email" placeholder="correo electronico" /><input type="text" name="name" placeholder="nombre completo" /><input type="text" name="username" placeholder="nombre de usuario" /><input type="password" name="password" placeholder="contrasena" /><button class="btn waves effect waves-light btn-singup" type="submit">Registrate</button></div></div></form></div></div><div class="row"><div class="login-box"><h5>Tienes una cuenta?</h3> <a href="/signin">Entrar</a></div></div></div>'
	// main.innerHTML = template
})


