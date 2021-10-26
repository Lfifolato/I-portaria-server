import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CreateValidator, UpdateValidator } from 'App/Validators/User'
import User from 'App/Models/User'
import { cpf } from 'cpf-cnpj-validator'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.query().orderBy('id', 'asc')
    return response.status(200).send(users)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateValidator)

    const validarCPF = cpf.isValid(data.cpf)

    if (!validarCPF) {
      return response.status(400).send({ error: 'Cpf invalido' })
    }

    const user = await User.create(data)

    return response.status(201).send(user)
  }

  public async show({ response, params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.load('checklist')

    return response.status(200).send(user)
  }

  public async update({ response, params, request }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    const data = await request.validate(UpdateValidator)

    console.log(data)

    user.merge(data)

    await user.save()

    return response.status(201).send(user)
  }

  public async destroy({ response, params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    await user.delete()

    return response.status(201).send({ mensagem: 'Sucesso' })
  }
}
