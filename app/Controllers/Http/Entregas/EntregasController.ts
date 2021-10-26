import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Entrega from 'App/Models/Entrega'
import Residencia from 'App/Models/Residencia'
import api from 'App/services/api'
import { CreateValidator, UpdateValidator } from 'App/Validators/Entrega'

export default class EntregasController {
  public async index({ response }: HttpContextContract) {
    const data = await Entrega.query().orderBy('id', 'asc')

    return response.status(200).send(data)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateValidator)

    const residencia = await Residencia.findBy('id', data.id_residencia)

    if (!residencia) {
      return response.status(200).send({ error: 'Residencia não localizada' })
    } else if (!residencia.notification) {
      const entrega = await Entrega.create(data)
      return response.status(201).send(entrega)
    }

    const body = {
      phone: `55${residencia.responsavel_contato}`,
      message: `📦📦    I-Portaria   📦📦
      Você tem uma ${data.tipo} na
        Portaria do remetente ${data.remetente}
        estamos aguardando sua Retirada 📬  `,
    }
    try {
      const entrega = await Entrega.create(data)
      await api.post('/send-messages', body)
      return response.status(201).send(entrega)
    } catch (e) {
      return response.status(400).send({ error: 'Erro' })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    const entrega = await Entrega.findOrFail(params.id)

    return response.status(200).send(entrega)
  }

  public async update({ params, response, request }: HttpContextContract) {
    const entrega = await Entrega.findOrFail(params.id)

    const data = await request.validate(UpdateValidator)

    entrega.merge(data)

    await entrega.save()

    return response.status(201).send(entrega)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const entrega = await Entrega.findOrFail(params.id)

    await entrega.delete()

    return response.status(200).send({ msg: 'Entrega deletada' })
  }
}
