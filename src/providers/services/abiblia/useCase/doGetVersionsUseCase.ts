import IBaseHttpConnector from '@biblia/providers/base/adapters/interfaces/IBaseHttpConnector'
import BaseService from '@biblia/providers/base/services/BaseService'
import { BaseHttpError } from '@biblia/providers/base/errors/HttpError'
import Version from '@biblia/shared/domain/entity/biblia/models/Version'
import IDoGetVersionsUseCase from '@biblia/shared/domain/entity/biblia/useCase/IDoGetVersionsUseCase'
export default class DoGetVersionsUseCase extends BaseService implements IDoGetVersionsUseCase {
   constructor(bibliApiConnector: IBaseHttpConnector) {
      super(bibliApiConnector)
   }
   async execute(): Promise<Version[] | BaseHttpError> {
      return this.http.get('/versions')
   }
}
