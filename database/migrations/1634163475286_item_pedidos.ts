import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ItemPedidos extends BaseSchema {
  protected tableName = 'item_pedidos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('id_pedido')
        .unsigned()
        .references('id')
        .inTable('pedido_insumos')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('nome').notNullable()
      table.string('marca_preferencia')
      table.integer('quant').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
