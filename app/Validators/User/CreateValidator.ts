import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }),
    cpf: schema.string({ trim: true }, [rules.unique({ table: 'users', column: 'cpf' })]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({ trim: true }),
    ativo: schema.enum(['ativo', 'ferias', 'inativo']),
    admin: schema.boolean(),
    id_empresa: schema.number(),
  })

  public messages = {
    required: 'O parametro {{ field }} é Obrigatorio',
    unique: 'O parametro {{ field }} já cadastrado no sistema',
    email: 'Email Invalido',
  }
}
