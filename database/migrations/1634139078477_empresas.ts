import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Empresas extends BaseSchema {
  protected tableName = 'empresas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.string('cnpj').notNullable()
      table.string('porte').notNullable()
      table.string('cep').notNullable()
      table.string('uf').notNullable()
      table.string('logradouro').notNullable()
      table.string('bairro').notNullable()
      table.string('numero').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
