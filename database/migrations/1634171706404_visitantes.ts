import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Visitantes extends BaseSchema {
  protected tableName = 'visitantes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('id_residencia')
        .unsigned()
        .references('id')
        .inTable('residencias')
        .onDelete('CASCADE')
        .onDelete('CASCADE')
      table.string('nome').notNullable()
      table.string('cpf').notNullable()
      table.boolean('carro').defaultTo(false)
      table.string('placa_carro')
      table.string('modelo')
      table.string('cor')
      table.string('ano')
      table.string('uf')
      table.string('municipio')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
