import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Entrega from 'App/Models/Entrega'

import { UpdateValidator } from 'App/Validators/Recebimento'

export default class RecebimentoController {
  public async update({ params, response, request }: HttpContextContract) {
    const entrega = await Entrega.findOrFail(params.id)

    const data = await request.validate(UpdateValidator)
    entrega.merge(data)

    await entrega.save()

    return response.status(200).send(entrega)
  }
}
