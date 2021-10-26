import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PedidoInsumos extends BaseSchema {
  protected tableName = 'pedido_insumos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('id_user')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.string('descricao').notNullable().comment('descrição breve do pedido')
      table.string('urgencia').notNullable().comment('enum[alta, médio, baixo]')
      table
        .string('status')
        .defaultTo('pendente')
        .notNullable()
        .comment('enum[pendente, andamento, Cancelado, Fechado]')
        .defaultTo('pendente')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
