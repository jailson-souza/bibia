import IBaseHttpConnector from '@biblia/providers/base/adapters/interfaces/IBaseHttpConnector'
import { BaseHttpError } from '@biblia/providers/base/errors/HttpError'
import BaseService from '@biblia/providers/base/services/BaseService'
import Verse from '@biblia/shared/domain/entity/biblia/models/Verse'
import IDoGetVerses, { GetVersesParams } from '@biblia/shared/domain/entity/biblia/useCase/IDoGetVersesUseCase'
export default class DoGetVerses extends BaseService implements IDoGetVerses {
   constructor(bibliApiConnector: IBaseHttpConnector) {
      super(bibliApiConnector)
   }
   execute(input: GetVersesParams): Promise<Verse[] | BaseHttpError> {
      return this.http.get(`/verses/${input.version}/${input.abbrev}/${input.chapter}`)
   }
}
