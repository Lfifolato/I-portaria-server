import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {}).middleware('auth')

Route.resource('/pedido', 'PedidoIsumos/PedidoInsumosController').apiOnly()
