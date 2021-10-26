import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Entrega from './Entrega'
import Visitante from './Visitante'

export default class Residencia extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_empresa: number

  @column()
  public num_apartamento: string

  @column()
  public bloco_apartamento: string

  @column()
  public responsavel_nome: string

  @column()
  public responsavel_cpf: string

  @column()
  public responsavel_email: string

  @column()
  public responsavel_contato: string

  @column()
  public notification: boolean

  @hasMany(() => Entrega, {
    foreignKey: 'id_residencia',
  })
  public entregas: HasMany<typeof Entrega>

  @hasMany(() => Visitante, {
    foreignKey: 'id_residencia',
  })
  public vistantes: HasMany<typeof Visitante>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
