import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import ItemPedido from './ItemPedido'

export default class PedidoInsumo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ serializeAs: null })
  public id_user: number

  @column()
  public descricao: string

  @column()
  public urgencia: string

  @column()
  public status: string

  @belongsTo(() => User, {
    foreignKey: 'id_user',
  })
  public solicitante: BelongsTo<typeof User>

  @hasMany(() => ItemPedido, {
    foreignKey: 'id_pedido',
  })
  public items: HasMany<typeof ItemPedido>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
