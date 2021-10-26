import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    retirou_nome: schema.string({ trim: true }),
    retirou_cpf: schema.string({ trim: true }),
    data_retirada: schema.date({
      format: 'yyyy-MM-dd',
    }),
  })

  public messages = {
    required: 'O {{field}} o Obrigatorio',
  }
}
