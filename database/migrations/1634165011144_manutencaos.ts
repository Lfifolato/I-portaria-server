import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Manutencaos extends BaseSchema {
  protected tableName = 'manutencaos'

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
      table.boolean('elevador').notNullable()
      table.boolean('luz').notNullable()
      table.boolean('agua').notNullable()
      table.boolean('pintura').notNullable()
      table.boolean('gas').notNullable()
      table.boolean('portao').notNullable()
      table.boolean('jardim').notNullable()
      table.text('descricao').notNullable()
      table
        .text('status')
        .notNullable()
        .comment('finalizado, andamento, espera_terceiro,pendente_avaliação')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
