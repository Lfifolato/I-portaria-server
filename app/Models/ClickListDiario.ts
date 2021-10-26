import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ClickListDiario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_user: number

  @column()
  public limpeza: boolean

  @column()
  public obs_limpeza: string

  @column()
  public organizacao: boolean

  @column()
  public obs_organizacao: string

  @column()
  public todas_entregas: boolean

  @column()
  public obs_entrega: string

  @column()
  public problema: boolean

  @column()
  public obs_problema: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
