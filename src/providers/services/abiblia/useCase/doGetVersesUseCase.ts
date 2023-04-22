import BaseService from '@biblia/providers/_base/services/BaseService'
import ABibliaApiAdapter from '@biblia/providers/adapters/ABibliaApiAdapter'
import NotFoundError from '@biblia/shared/domain/_base/erros/NotFoundError'
import Verse from '@biblia/shared/domain/biblia/models/Verse'
import IDoGetVerses, { GetVersesParams } from '@biblia/shared/domain/biblia/useCase/IDoGetVersesUseCase'
export default class DoGetVerses extends BaseService implements IDoGetVerses {
   constructor() {
      super(new ABibliaApiAdapter())
   }
   async execute(input: GetVersesParams): Promise<Verse[]> {
      try {
         const response = await this.http.api.get<Verse[]>(`/verses/${input.version}/${input.abbrev}/${input.chapter}`)
         return response.data
      } catch (error: any) {
         throw new NotFoundError(error?.message)
      }
   }
}
