import { BaseHttpError } from '../../errors/HttpError'

export interface GetParams<I = any> {
   headers?: {
      [key: string]: string
   }
   query?: {
      [key: string]: string
   }
   data?: I
}

export default interface IBaseHttpConnector {
   get<I, O>(path: string, input?: GetParams<I>): Promise<O | BaseHttpError>
   post<I, O>(path: string, input?: GetParams<I>): Promise<O | BaseHttpError>
   patch<I, O>(path: string, input?: GetParams<I>): Promise<O | BaseHttpError>
   put<I, O>(path: string, input?: GetParams<I>): Promise<O | BaseHttpError>
   delete<I, O>(path: string, input?: GetParams<I>): Promise<O | BaseHttpError>
}
