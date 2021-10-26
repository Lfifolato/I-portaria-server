import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    num_apartamento: schema.string.optional({ trim: true }),
    bloco_apartamento: schema.string.optional({ trim: true }),
    responsavel_nome: schema.string.optional({ trim: true }),
    responsavel_email: schema.string.optional({ trim: true }, [rules.email()]),
    responsavel_cpf: schema.string.optional({ trim: true }),
    responsavel_contato: schema.string.optional({ trim: true }),
    notification: schema.boolean.optional(),
  })

  public messages = {
    email: 'Email Invalido',
  }
}
