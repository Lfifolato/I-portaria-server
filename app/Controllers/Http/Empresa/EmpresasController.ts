import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Empresa from 'App/Models/Empresa'
import { CreateValidator, UpdateValidator } from 'App/Validators/Empresa'

import { cnpj } from 'cpf-cnpj-validator'

export default class EmpresasController {
  public async index({ response }: HttpContextContract) {
    const empresas = await Empresa.query().orderBy('id', 'asc')
    return response.status(200).send(empresas)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateValidator)

    const cnpjValida = cnpj.isValid(data.cnpj)

    if (!cnpjValida) {
      return response.status(400).send({ error: 'Cnpj invalido' })
    }

    const empresa = await Empresa.create(data)
    return response.status(200).send(empresa)
  }

  public async show({ response, params }: HttpContextContract) {
    const empresa = await Empresa.findOrFail(params.id)
    await empresa.load('residencia')
    await empresa.load('usuarios')
    return response.status(200).send(empresa)
  }

  public async update({ response, request, params }: HttpContextContract) {
    const empresa = await Empresa.findOrFail(params.id)
    const data = await request.validate(UpdateValidator)
    empresa.merge(data)
    await empresa.save()
    return response.status(200).send(empresa)
  }

  public async destroy({ response, params }: HttpContextContract) {
    const empresa = await Empresa.findOrFail(params.id)
    empresa.delete()

    return response.send({ mgs: 'sucesso' })
  }
}
