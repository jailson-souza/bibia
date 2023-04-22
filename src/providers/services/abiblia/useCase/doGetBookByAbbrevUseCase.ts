import IBaseHttpConnector from '@biblia/providers/base/adapters/interfaces/IBaseHttpConnector'
import { BaseHttpError } from '@biblia/providers/base/errors/HttpError'
import BaseService from '@biblia/providers/base/services/BaseService'
import Book from '@biblia/shared/domain/entity/biblia/models/Book'
import IDoGetBookByAbbrevUseCase, {
   GetBookByAbbrevParams
} from '@biblia/shared/domain/entity/biblia/useCase/IDoGetBookByAbbrevUseCase'

export default class DoGetBookByAbbrevUseCase extends BaseService implements IDoGetBookByAbbrevUseCase {
   constructor(bibliApiConnector: IBaseHttpConnector) {
      super(bibliApiConnector)
   }
   async execute(input: GetBookByAbbrevParams): Promise<Book | BaseHttpError> {
      return this.http.get<void, Book>(`/books/${input.abbrev}`)
   }
}
