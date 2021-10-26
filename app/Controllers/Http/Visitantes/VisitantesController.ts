import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Visitante from 'App/Models/Visitante'
import { CreateValidator, UpdateValidator } from 'App/Validators/Visitantes'
import { cpf } from 'cpf-cnpj-validator'

export default class VisitantesController {
  public async index({ response }: HttpContextContract) {
    const visitante = await Visitante.query().orderBy('id', 'asc')

    return response.status(200).send(visitante)
  }

  public async store({ response, request }: HttpContextContract) {
    const data = await request.validate(CreateValidator)

    const validarCPF = cpf.isValid(data.cpf)

    if (!validarCPF) {
      return response.status(400).send({ error: 'Cpf invalido' })
    }

    const visitante = await Visitante.create(data)

    return response.status(201).send(visitante)
  }

  public async show({ response, params }: HttpContextContract) {
    const visitante = await Visitante.findOrFail(params.id)

    return response.status(200).send(visitante)
  }

  public async update({ response, params, request }: HttpContextContract) {
    const visitante = await Visitante.findOrFail(params.id)

    const data = await request.validate(UpdateValidator)

    visitante.merge(data)

    await visitante.save()

    return response.status(201).send(visitante)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const visitante = await Visitante.findOrFail(params.id)

    await visitante.delete()

    return response.status(200).send({ msg: 'Sucesso' })
  }
}
