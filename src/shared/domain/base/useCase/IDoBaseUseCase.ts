import DomainError from '../models/DomainError'
export default interface IDoBaseUseCase<I, O> {
   execute(input: I): Promise<O | DomainError>
}
