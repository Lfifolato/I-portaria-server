import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_residencia: schema.number(),
    nome: schema.string({ trim: true }),
    cpf: schema.string({ trim: true }),
    carro: schema.boolean(),
    placa_carro: schema.string.optional({ trim: true }),
    modelo: schema.string.optional({ trim: true }),
    cor: schema.string.optional({ trim: true }),
    ano: schema.string.optional({ trim: true }),
    uf: schema.string.optional({ trim: true }),
    municipio: schema.string.optional({ trim: true }),
  })

  public messages = {}
}
