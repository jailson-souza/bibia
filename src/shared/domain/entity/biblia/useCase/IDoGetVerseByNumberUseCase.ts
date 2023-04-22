import Verse from '@biblia/shared/domain/entity/biblia/models/Verse'
import IDoUseCase from '../../../base/useCase/IDoBaseUseCase'

export interface GetVerseParams {
   version: string
   abbrev: string
   chapter: number
   number: number
}

export default interface IDoGetVerseByNumber extends IDoUseCase<GetVerseParams, Verse> {}
