import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class ItemPedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_pedido: number

  @column()
  public nome: string

  @column()
  public marca_preferencia: string

  @column()
  public quant: number

  @hasMany(() => ItemPedido, {
    foreignKey: 'id_pedido',
  })
  public items: HasMany<typeof ItemPedido>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
