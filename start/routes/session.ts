import Route from '@ioc:Adonis/Core/Route'

Route.resource('/sessionweb', 'session/SessionWebController').apiOnly()
