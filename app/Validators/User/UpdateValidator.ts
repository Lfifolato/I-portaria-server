import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string.optional({ trim: true }),
    cpf: schema.string.optional({ trim: true }),
    email: schema.string.optional({ trim: true }, [rules.email()]),
    password: schema.string.optional({ trim: true }),
    admin: schema.boolean.optional(),
    ativo: schema.enum.optional(['ativo', 'ferias', 'inativo']),
    id_empresa: schema.number.optional(),
  })

  public messages = {
    email: 'Email Invalido',
  }
}
