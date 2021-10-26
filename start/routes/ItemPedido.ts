import Route from '@ioc:Adonis/Core/Route'

Route.resource('/itempedido', 'ItemPedido/ItemPedidosController').apiOnly()

Route.group(() => {}).middleware('auth')
