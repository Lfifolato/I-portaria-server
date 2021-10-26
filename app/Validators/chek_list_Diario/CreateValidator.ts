import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_user: schema.number(),
    limpeza: schema.boolean(),
    obs_limpeza: schema.string.optional({ trim: true }),
    organizacao: schema.boolean(),
    obs_organizacao: schema.string.optional({ trim: true }),
    todas_entregas: schema.boolean(),
    obs_entrega: schema.string.optional({ trim: true }),
    problema: schema.boolean(),
    obs_problema: schema.string.optional({ trim: true }),
  })

  public messages = {
    required: 'O Campo {{field}} é obrigatorio',
  }
}
