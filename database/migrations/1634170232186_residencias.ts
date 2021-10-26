import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Residencias extends BaseSchema {
  protected tableName = 'residencias'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('id_empresa')
        .unsigned()
        .references('id')
        .inTable('empresas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('num_apartamento').notNullable()
      table.string('bloco_apartamento').defaultTo('00')
      table.string('responsavel_nome').notNullable()
      table.string('responsavel_cpf').notNullable()
      table.string('responsavel_email').notNullable()
      table.string('responsavel_contato').notNullable()
      table.boolean('notification').defaultTo(true)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
