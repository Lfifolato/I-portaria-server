import Route from '@ioc:Adonis/Core/Route'

Route.resource('/user', 'Users/UsersController').apiOnly()

Route.group(() => {}).middleware('auth')
