import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Residencia from './Residencia'

export default class Empresa extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cnpj: string

  @column()
  public porte: string

  @column()
  public cep: string

  @column()
  public uf: string

  @column()
  public logradouro: string

  @column()
  public bairro: string

  @column()
  public numero: string

  @hasMany(() => User, {
    foreignKey: 'id_empresa',
  })
  public usuarios: HasMany<typeof User>

  @hasMany(() => Residencia, {
    foreignKey: 'id_empresa',
  })
  public residencia: HasMany<typeof Residencia>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
