import FetchHttpConnector from '../base/adapters/FetchHttpConnector'
export default class ABibliaApiConnector extends FetchHttpConnector {
   constructor() {
      super('https://www.abibliadigital.com.br/api')
   }
}
