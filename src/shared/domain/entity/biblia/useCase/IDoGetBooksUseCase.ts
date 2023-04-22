import Book from '@biblia/shared/domain/entity/biblia/models/Book'
import IDoBaseUseCase from '../../../base/useCase/IDoBaseUseCase'
export default interface IDoGetBooksUseCase extends IDoBaseUseCase<void, Omit<Book, 'coment'>[]> {}
