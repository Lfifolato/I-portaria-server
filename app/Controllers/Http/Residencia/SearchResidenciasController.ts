import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Residencia from 'App/Models/Residencia'

export default class SearchResidenciasController {
  public async Busca({ request, response }: HttpContextContract) {
    const { numeroApp, visitante, nome } = request.all()

    const resBusca = await Residencia.query()
      .join('visitantes', 'id_residencia', '=', 'residencias.id')
      .where('num_apartamento', `${numeroApp}`)
      .orWhere('visitantes.modelo', 'like', `${visitante}`)
      .orWhere('responsavel_nome', 'like', `${nome}`)

    return response.status(200).send(resBusca)
  }
}
