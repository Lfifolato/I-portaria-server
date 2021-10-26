import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PrestadorServico extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public telefone: string

  @column()
  public ativo: boolean

  @column()
  public carro: boolean

  @column()
  public placa_carro: string

  @column()
  public modelo: string

  @column()
  public cor: string

  @column()
  public ano: string

  @column()
  public uf: string

  @column()
  public municipio: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
