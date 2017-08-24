var yo = require('yo-yo')
var landing = require('../landing')

var signinForm = yo`<div class="col s12 m7">
						<div class="row">
							<div class="singup-box">
								<h1 class="platzigram">Platzigram</h1>
								<form action="" class="singup-form">
									<div class="section">
										<a href="" class="btn btn-fb hide-on-small-only">Iniciar sesion con facebook</a>
										<a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesion</a>
										<div class="divider">
										</div>
										<div class="section">
											<input type="text" name="username" placeholder="nombre de usuario" />
											<input type="password" name="password" placeholder="contrasena" />
											<button class="btn waves effect waves-light btn-singup" type="submit">Inicia sesion</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div class="row">
							<div class="login-box">
								<h5>no tienes una cuenta?</h3> 
								<a href="/signup">Registrate</a>
							</div>
						</div>
					</div>`;
											
											

									
								
								
				

module.exports = landing(signinForm)
// module.exports	= signinForm
