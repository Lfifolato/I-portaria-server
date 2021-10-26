import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_empresa: schema.number(),
    num_apartamento: schema.string({ trim: true }),
    bloco_apartamento: schema.string({ trim: true }),
    responsavel_nome: schema.string({ trim: true }),
    responsavel_contato: schema.string({ trim: true }),
    responsavel_email: schema.string({ trim: true }, [
      rules.unique({ table: 'residencias', column: 'responsavel_email' }),
      rules.email(),
    ]),
    responsavel_cpf: schema.string({ trim: true }, [
      rules.unique({ table: 'residencias', column: 'responsavel_cpf' }),
    ]),
  })

  public messages = {
    required: 'o Campo {{field}} é Obrigatorio',
    unique: 'o Campo {{field}} já Cadastrado',
    email: 'Email Invalido',
  }
}
