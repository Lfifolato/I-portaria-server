import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_residencia: schema.number(),
    tipo: schema.enum(['entrega', 'correspondencia']),
    remetente: schema.string({ trim: true }),
  })

  public messages = {
    required: 'O {{field}} é Obrigatorio',
  }
}
