import BaseService from '@biblia/providers/_base/services/BaseService'
import ABibliaApiAdapter from '@biblia/providers/adapters/ABibliaApiAdapter'
import NotFoundError from '@biblia/shared/domain/_base/erros/NotFoundError'
import Verse from '@biblia/shared/domain/biblia/models/Verse'
import IDoGetVerseByNumber, { GetVerseParams } from '@biblia/shared/domain/biblia/useCase/IDoGetVerseByNumberUseCase'
export default class DoGetVerseByNumber extends BaseService implements IDoGetVerseByNumber {
   constructor() {
      super(new ABibliaApiAdapter())
   }
   async execute(input: GetVerseParams): Promise<Verse> {
      try {
         const response = await this.http.api.get<Verse>(
            `/verses/${input.version}/${input.abbrev}/${input.chapter}/${input.number}`
         )
         return response.data
      } catch (error: any) {
         throw new NotFoundError(error?.message)
      }
   }
}
