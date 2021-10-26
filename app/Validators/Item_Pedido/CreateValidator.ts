import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_pedido: schema.number(),
    nome: schema.string({ trim: true }),
    marca_preferencia: schema.string.optional({ trim: true }),
    quant: schema.number(),
  })

  public messages = {
    required: 'O campo {{field}} é Obrigatorio',
  }
}
