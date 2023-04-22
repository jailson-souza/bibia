import BaseService from '@biblia/providers/_base/services/BaseService'
import ABibliaApiAdapter from '@biblia/providers/adapters/ABibliaApiAdapter'
import NotFoundError from '@biblia/shared/domain/_base/erros/NotFoundError'
import Version from '@biblia/shared/domain/biblia/models/Version'
import IDoGetVersionsUseCase from '@biblia/shared/domain/biblia/useCase/IDoGetVersionsUseCase'
export default class DoGetVersionsUseCase extends BaseService implements IDoGetVersionsUseCase {
   constructor() {
      super(new ABibliaApiAdapter())
   }
   async execute(): Promise<Version[]> {
      try {
         const response = await this.http.api.get<Version[]>('/versions')
         return response.data
      } catch (error: any) {
         throw new NotFoundError(error?.message)
      }
   }
}
