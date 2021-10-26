import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_residencia: schema.number.optional(),
    tipo: schema.enum.optional(['entrega', 'correspodencia']),
    remetente: schema.string.optional({ trim: true }),
  })

  public messages = {}
}
