import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Empresa from 'App/Models/Empresa'
import User from 'App/Models/User'

export default class InitSeeder extends BaseSeeder {
  public async run() {
    await Empresa.create({
      nome: 'Condominio Primavera',
      cnpj: '6898989898989',
      cep: '14090400',
      bairro: 'Jardim Paulistano',
      logradouro: 'Rua Angelo Belloni',
      uf: 'SP',
      porte: 'Medio',
      numero: '309',
    })

    await User.createMany([
      {
        nome: 'Operador10',
        cpf: '565656565d5',
        email: 'operadorr@gmail.com',
        password: '123',
        ativo: 'ativo',
        admin: false,
        id_empresa: 1,
      },
      {
        nome: 'Operador1',
        cpf: '56565dd6565d5',
        email: 'operador@gmail.com',
        password: '123',
        ativo: 'ferias',
        admin: false,
        id_empresa: 1,
      },
      {
        nome: 'Operador1',
        cpf: '56565dd6565d5',
        email: 'operadorrr@gmail.com',
        password: '123',
        ativo: 'inativo',
        admin: false,
        id_empresa: 1,
      },
    ])
  }
}
