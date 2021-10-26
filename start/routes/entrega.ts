import Route from '@ioc:Adonis/Core/Route'
// /RecebimentoController
Route.resource('/entrega', 'Entregas/EntregasController').apiOnly()

Route.group(() => {}).middleware('auth')
