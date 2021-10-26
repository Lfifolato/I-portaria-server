import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_user: schema.number(),
    descricao: schema.string({ trim: true }),
    urgencia: schema.enum(['alta', 'medio', 'baixo']),
  })

  public messages = {
    required: 'O compo {{field}} é Obrigatorio',
  }
}
