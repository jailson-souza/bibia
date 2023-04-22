import Version from '../models/Version'
import IDoBaseUseCase from '../../../base/useCase/IDoBaseUseCase'
export default interface IDoGetVersionsUseCase extends IDoBaseUseCase<void, Version[]> {}
