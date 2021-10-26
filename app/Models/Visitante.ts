import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Residencia from './Residencia'

export default class Visitante extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_residencia: number

  @column()
  public nome: string

  @column()
  public cpf: string

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

  @belongsTo(() => Residencia, {
    foreignKey: 'id_residencia',
  })
  public residencia: BelongsTo<typeof Residencia>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
