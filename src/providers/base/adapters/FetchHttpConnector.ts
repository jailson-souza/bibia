import axios from 'axios'
import AxiosHttpConnector from './AxiosHttpConnector'
import IBaseHttpConnector, { GetParams } from './interfaces/IBaseHttpConnector'
import { BaseHttpError } from '../errors/HttpError'

export default abstract class FetchHttpConnector extends AxiosHttpConnector implements IBaseHttpConnector {
   private _baseURL: string

   constructor(baseURL: string) {
      super(axios.create({ baseURL }))
      this._baseURL = baseURL
   }

   async get<I, O>(path: string, input?: GetParams<I> | undefined): Promise<O | BaseHttpError<string>> {
      try {
         console.log('RequestWithFetchAPI')
         const queryParams = input?.query
            ? '?' +
              Object.keys(input?.query)
                 .map(key => `${key}=${input?.query?.[key]}`)
                 .join('&')
            : ''
         const url = `${this._baseURL}${path}${queryParams}`
         const response = await fetch(url, {
            body: JSON.stringify(input?.data),
            headers: input?.headers
         })
         const data: O = await response.json()
         return data
      } catch (error: any) {
         return {
            isError: true,
            message: error?.message
         } as BaseHttpError<string>
      }
   }
}
