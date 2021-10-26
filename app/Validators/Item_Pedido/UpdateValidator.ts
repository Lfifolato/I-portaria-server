import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_pedido: schema.number.optional(),
    nome: schema.string.optional({ trim: true }),
    marca_preferencia: schema.string.optional({ trim: true }),
    quant: schema.number.optional(),
  })

  public messages = {}
}
