import Book from '@biblia/shared/domain/entity/biblia/models/Book'
import IDoBaseUseCase from '../../../base/useCase/IDoBaseUseCase'
export interface GetBookByAbbrevParams {
   abbrev: string
}
export default interface IDoGetBookByAbbrevUseCase extends IDoBaseUseCase<GetBookByAbbrevParams, Book> {}
