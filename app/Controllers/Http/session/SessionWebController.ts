import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class SessionWebController {
  public async store({ auth, request, response }: HttpContextContract) {
    const { email, password } = request.all()
    try {
      const user = await User.findBy('email', email)

      if (!user) {
        return response.status(400).send({ msg: 'Usuario não localizado' })
      } else if (user.ativo === 'ferias' || user.ativo === 'inativo') {
        return response.status(400).send({ msg: 'acesso negado' })
      }

      const token = await auth.attempt(email, password)

      user.rememberMeToken = token.token

      return response.status(201).json(user)
    } catch (e) {
      response.status(e.status).send({ error: e.message })
    }
  }
}
