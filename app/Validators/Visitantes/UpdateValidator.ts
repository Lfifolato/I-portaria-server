import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_residencia: schema.number.optional(),
    nome: schema.string.optional({ trim: true }),
    cpf: schema.string.optional({ trim: true }),
    carro: schema.boolean.optional(),
    placa_carro: schema.string.optional({ trim: true }),
    modelo: schema.string.optional({ trim: true }),
    cor: schema.string.optional({ trim: true }),
    ano: schema.string.optional({ trim: true }),
    uf: schema.string.optional({ trim: true }),
    municipio: schema.string.optional({ trim: true }),
  })

  public messages = {}
}
