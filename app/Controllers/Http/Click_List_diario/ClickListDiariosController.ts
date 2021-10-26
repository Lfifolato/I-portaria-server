import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ClickListDiario from 'App/Models/ClickListDiario'
import { CreateValidator, UpdateValidator } from 'App/Validators/chek_list_Diario'

export default class ClickListDiariosController {
  public async index({ response }: HttpContextContract) {
    const diario = await ClickListDiario.query().orderBy('id', 'asc')
    return response.status(200).send(diario)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(CreateValidator)
    const diario = await ClickListDiario.create(data)
    return response.status(200).send(diario)
  }

  public async show({ params, response }: HttpContextContract) {
    const diario = await ClickListDiario.findOrFail(params.id)

    return response.status(200).send(diario)
  }
  public async update({ response, params, request }: HttpContextContract) {
    const diario = await ClickListDiario.findOrFail(params.id)

    const data = await request.validate(UpdateValidator)

    diario.merge(data)

    await diario.save()
    return response.status(201).send(diario)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const diario = await ClickListDiario.findOrFail(params.id)

    await diario.delete()

    return response.status(200).send({ msg: 'Sucesso' })
  }
}
