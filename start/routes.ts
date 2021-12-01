import Route from '@ioc:Adonis/Core/Route'
import './routes/users'
import './routes/session'
import './routes/empresa'
import './routes/residencia'
import './routes/diario'
import './routes/visitante'
import './routes/pedido'
import './routes/ItemPedido'
import './routes/entrega'

Route.get('/', async () => {
  return { api: 'I-Portaria', version: '1.0', ambiente: 'Produção' }
})

Route.post('/busca', 'SearchResidenciasController.Busca')
