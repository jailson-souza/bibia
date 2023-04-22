import IBaseHttpConnector from '@biblia/providers/base/adapters/interfaces/IBaseHttpConnector'
import { BaseHttpError } from '@biblia/providers/base/errors/HttpError'
import BaseService from '@biblia/providers/base/services/BaseService'
import Verse from '@biblia/shared/domain/entity/biblia/models/Verse'
import IDoGetVerseByNumber, {
   GetVerseParams
} from '@biblia/shared/domain/entity/biblia/useCase/IDoGetVerseByNumberUseCase'
export default class DoGetVerseByNumber extends BaseService implements IDoGetVerseByNumber {
   constructor(bibliApiConnector: IBaseHttpConnector) {
      super(bibliApiConnector)
   }
   async execute(input: GetVerseParams): Promise<Verse | BaseHttpError> {
      return await this.http.get(`/verses/${input.version}/${input.abbrev}/${input.chapter}/${input.number}`)
   }
}
