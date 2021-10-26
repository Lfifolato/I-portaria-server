import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ItemPedido from 'App/Models/ItemPedido'
import PedidoInsumo from 'App/Models/PedidoInsumo'
import { CreateValidator, UpdateValidator } from 'App/Validators/Item_Pedido'

export default class ItemPedidosController {
  public async index({ response }: HttpContextContract) {
    const item = await ItemPedido.query().orderBy('id', 'asc')

    return response.status(200).send(item)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateValidator)

    const pedido = await PedidoInsumo.findBy('id', data.id_pedido)

    if (!pedido) {
      return response.status(200).send({ error: 'Pedido não Encontrado' })
    }

    const item = await ItemPedido.create(data)

    return response.status(201).send(item)
  }

  public async show({ params, response }: HttpContextContract) {
    const item = await ItemPedido.findOrFail(params.id)

    return response.status(200).send(item)
  }

  public async update({ request, response, params }: HttpContextContract) {
    const item = await ItemPedido.findOrFail(params.id)

    const data = await request.validate(UpdateValidator)

    item.merge(data)

    await item.save()

    return response.status(200).send(item)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const item = await ItemPedido.findOrFail(params.id)

    await item.delete()

    return response.status(200).send({ msg: 'Sucesso' })
  }
}
