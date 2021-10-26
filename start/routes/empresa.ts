import Route from '@ioc:Adonis/Core/Route'

Route.resource('/empresa', 'Empresa/EmpresasController').apiOnly()

Route.group(() => {}).middleware('auth')
