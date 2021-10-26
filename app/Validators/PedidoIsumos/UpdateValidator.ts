import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    id_user: schema.number.optional(),
    descricao: schema.string.optional({ trim: true }),
    urgencia: schema.enum.optional(['alta', 'medio', 'baixo']),
    status: schema.enum.optional(['pendente', 'andamento', 'cancelado', 'fechado']),
  })

  public messages = {}
}
