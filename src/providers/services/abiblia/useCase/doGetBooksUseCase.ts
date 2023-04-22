import { BaseHttpError } from '@biblia/providers/base/errors/HttpError'
import BaseService from '@biblia/providers/base/services/BaseService'
import ABibliaApiConnector from '@biblia/providers/connectors/ABibliaApiConnector'
import Book from '@biblia/shared/domain/entity/biblia/models/Book'
import IDoGetBooksUseCase from '@biblia/shared/domain/entity/biblia/useCase/IDoGetBooksUseCase'
export default class DoGetBooksUseCase extends BaseService implements IDoGetBooksUseCase {
   constructor() {
      super(new ABibliaApiConnector())
   }
   execute(): Promise<BaseHttpError | Omit<Book, 'coment'>[]> {
      return this.http.get('/books')
   }
}
