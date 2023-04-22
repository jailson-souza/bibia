import IBaseHttpConnector from '@biblia/providers/base/adapters/interfaces/IBaseHttpConnector'
import { BaseHttpError } from '@biblia/providers/base/errors/HttpError'
import BaseService from '@biblia/providers/base/services/BaseService'
import Book from '@biblia/shared/domain/entity/biblia/models/Book'
import IDoGetBooksUseCase from '@biblia/shared/domain/entity/biblia/useCase/IDoGetBooksUseCase'
export default class DoGetBooksUseCase extends BaseService implements IDoGetBooksUseCase {
   constructor(bibliApiConnector: IBaseHttpConnector) {
      super(bibliApiConnector)
   }
   execute(): Promise<BaseHttpError | Omit<Book, 'coment'>[]> {
      return this.http.get('/books')
   }
}
