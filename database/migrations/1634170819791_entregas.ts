import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Entregas extends BaseSchema {
  protected tableName = 'entregas'

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
      table.string('tipo').notNullable().comment('Tipo [Entrega, Correspondência]')
      table.string('remetente').notNullable().comment('Registrar o nome remetente')
      table.boolean('status_Entrega').defaultTo(false).notNullable()
      table.string('retirou_nome').notNullable()
      table.integer('retirou_cpf').notNullable()
      table.date('data_retirada').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
