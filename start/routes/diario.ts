import Route from '@ioc:Adonis/Core/Route'

Route.resource('/diario', 'Click_List_diario/ClickListDiariosController').apiOnly()

Route.group(() => {}).middleware('auth')
