import IBaseHttpConnector from '../adapters/interfaces/IBaseHttpConnector'
export default abstract class BaseService {
   protected http: IBaseHttpConnector
   constructor(http: IBaseHttpConnector) {
      this.http = http
   }
}
