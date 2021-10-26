import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'

const instances = Env.get('INSTANCES')
const token = Env.get('TOKEN')

const api = axios.create({
  baseURL: `https://api.z-api.io/instances/${instances}/token/${token}`,
})

export default api
