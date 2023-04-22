import Verse from '@biblia/shared/domain/entity/biblia/models/Verse'
import IDoUseCase from '../../../base/useCase/IDoBaseUseCase'

export interface GetVersesParams {
   version: string
   abbrev: string
   chapter: number
}

export default interface IDoGetVerses extends IDoUseCase<GetVersesParams, Verse[]> {}
