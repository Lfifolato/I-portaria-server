import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    limpeza: schema.boolean.optional(),
    obs_limpeza: schema.string.optional({ trim: true }),
    organizacao: schema.boolean.optional(),
    obs_organizacao: schema.string.optional({ trim: true }),
    todas_entregas: schema.boolean.optional(),
    obs_entrega: schema.string.optional({ trim: true }),
    problema: schema.boolean.optional(),
    obs_problema: schema.string.optional({ trim: true }),
  })

  public messages = {}
}
