var yo = require('yo-yo')

module.export = yo`<div class="container">
					<div class="row">
						<div class="col s10	push-s1">
							<div class="row">
								<!-- sing up y logo -->
								<div class="col m5 hide-on-small-only">
									<div class="img-res ">
									<img src="images/iphone.png" alt="" class="responsive-img">
										
									</div>
									<!-- <img src="images/iphone.png" alt=""> -->
								</div>
								<div class="col s12 m7">
									<div class="row">
										<div class="singup-box">
											
											<h1 class="platzigram">Platzigram</h1>
											
											<form action="" class="singup-form">
												<h2 class="sub-title">registrate para ver fotos de tus amigos estudiando en platzi</h2>
												<div class="section">
													<a href="" class="btn btn-fb hide-on-small-only">Iniciar sesion con facebook</a>
													<a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesion</a>
													<div class="divider">
													</div>
													<div class="section">
														<input type="email" name="email" placeholder="correo electronico" />
														<input type="text" name="name" placeholder="nombre completo" />
														<input type="text" name="username" placeholder="nombre de usuario" />
														<button class="btn waves effect waves-light btn-singup" type="submit">Registrate</button>
														<input type="password" name="password" placeholder="contrasena" />

													</div>
														
												</div>
											</form>
										</div>
									</div>
									<div class="row">
										<div class="login-box">
										<h5>Tienes una cuenta?</h3> 
										<a href="/singin">Entrar</a>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>`