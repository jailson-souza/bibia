import axios from 'axios'
import AxiosHttpConnector from '../base/adapters/AxiosHttpConnector'
export default class ABibliaApiConnector extends AxiosHttpConnector {
   constructor() {
      super(axios.create({ baseURL: 'https://www.abibliadigital.com.br/api' }))
   }
}
