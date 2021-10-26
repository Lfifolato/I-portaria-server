import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PedidoInsumo from 'App/Models/PedidoInsumo'
import { CreateValidator, UpdateValidator } from 'App/Validators/PedidoIsumos'

export default class PedidoInsumosController {
  public async index({ response }: HttpContextContract) {
    //const user = await auth.authenticate()

    const pedidos = await PedidoInsumo.query()
      .preload('solicitante')
      //.where('id_user', user.id)
      .orderBy('id', 'asc')

    return response.status(200).send(pedidos)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateValidator)

    const pedido = await PedidoInsumo.create(data)

    return response.status(201).send(pedido)
  }

  public async show({ response, params }: HttpContextContract) {
    const pedido = await PedidoInsumo.findOrFail(params.id)

    await pedido.load('items')
    await pedido.load('solicitante')

    return response.status(200).send(pedido)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const pedido = await PedidoInsumo.findOrFail(params.id)

    const data = await request.validate(UpdateValidator)

    pedido.merge(data)

    await pedido.save()

    return response.status(200).send(pedido)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const pedido = await PedidoInsumo.findOrFail(params.id)

    await pedido.delete()

    return response.status(200).send({ msg: 'Sucesso' })
  }
}
