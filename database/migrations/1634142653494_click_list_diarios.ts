import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ClickListDiarios extends BaseSchema {
  protected tableName = 'click_list_diarios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
        .integer('id_user')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.boolean('limpeza').notNullable()
      table.text('obs_limpeza').defaultTo('')
      table.boolean('organizacao').notNullable()
      table.text('obs_organizacao').defaultTo('')
      table.boolean('todas_entregas').notNullable()
      table.text('obs_entrega').defaultTo('')
      table.boolean('problema').notNullable()
      table.text('obs_problema').defaultTo('')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
