import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Residencia from 'App/Models/Residencia'
import { CreateValidator, UpdateValidator } from 'App/Validators/Residencia'
import { cpf } from 'cpf-cnpj-validator'
export default class ResidenciasController {
  public async index({ response }: HttpContextContract) {
    const residencia = await Residencia.query().orderBy('id', 'asc')
    return response.status(200).send(residencia)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateValidator)
    const validarCPF = cpf.isValid(data.responsavel_cpf)

    if (!validarCPF) {
      return response.status(400).send({ error: 'Cpf invalido' })
    }

    const residencia = await Residencia.create(data)

    return response.status(201).send(residencia)
  }

  public async show({ params, response }: HttpContextContract) {
    const residencia = await Residencia.findOrFail(params.id)

    await residencia.load('entregas')
    await residencia.load('vistantes')

    return response.status(200).send(residencia)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const residencia = await Residencia.findOrFail(params.id)

    const data = await request.validate(UpdateValidator)
    if (!data.responsavel_cpf) {
      return response.badRequest()
    }

    const validarCPF = cpf.isValid(data.responsavel_cpf)

    if (!validarCPF) {
      return response.status(400).send({ error: 'Cpf invalido' })
    }

    residencia.merge(data)

    await residencia.save()

    return response.status(200).send(residencia)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const residencia = await Residencia.findOrFail(params.id)
    await residencia.delete()

    return response.status(200).send({ msg: 'Sucesso' })
  }
}
