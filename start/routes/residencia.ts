import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {}).middleware('auth')

Route.resource('/residencia', 'Residencia/ResidenciasController').apiOnly()
