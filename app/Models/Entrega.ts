import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Residencia from './Residencia'

export default class Entrega extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_residencia: number

  @column()
  public tipo: string

  @column()
  public remetente: string

  @column()
  public status_Entrega: boolean

  @column()
  public retirou_nome: string

  @column()
  public retirou_cpf: string

  @column()
  public data_retirada: DateTime

  @belongsTo(() => Residencia, {
    foreignKey: 'id_residencia',
  })
  public residencia: BelongsTo<typeof Residencia>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
