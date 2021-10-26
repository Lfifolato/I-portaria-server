import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string({ trim: true }),
    cnpj: schema.string({ trim: true }, [rules.unique({ table: 'empresas', column: 'cnpj' })]),
    porte: schema.string({ trim: true }),
    cep: schema.string({ trim: true }),
    uf: schema.string({ trim: true }),
    logradouro: schema.string({ trim: true }),
    bairro: schema.string({ trim: true }),
    numero: schema.string({ trim: true }),
  })

  public messages = {
    required: 'O parametro {{ field }} é Obrigatorio',
    unique: 'O parametro {{ field }} já cadastrado no sistema',
  }
}
