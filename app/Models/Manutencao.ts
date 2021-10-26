import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Empresa from './Empresa'

export default class Manutencao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public id_empresa: number

  @column()
  public elevador: boolean

  @column()
  public luz: boolean

  @column()
  public agua: boolean

  @column()
  public pintura: boolean

  @column()
  public portao: boolean

  @column()
  public jardim: boolean

  @column()
  public descricao: string

  @belongsTo(() => Empresa, {
    foreignKey: 'id_empresa',
  })
  public empresa: BelongsTo<typeof Empresa>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
