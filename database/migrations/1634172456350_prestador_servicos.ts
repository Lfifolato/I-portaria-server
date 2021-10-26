import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PrestadorServicos extends BaseSchema {
  protected tableName = 'prestador_servicos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nome').notNullable()
      table.string('cpf').notNullable()
      table.string('telefone').notNullable()
      table.boolean('ativo').defaultTo(true)
      table.boolean('carro').defaultTo(false)
      table.string('placa_veiculo')
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
