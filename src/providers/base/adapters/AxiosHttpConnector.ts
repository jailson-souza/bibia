import { AxiosInstance, AxiosResponse } from 'axios'
import HttpError, { BaseHttpError } from '../errors/HttpError'
import IBaseHttpConnector, { GetParams } from './interfaces/IBaseHttpConnector'
export default abstract class AxiosHttpConnector implements IBaseHttpConnector {
   private _api: AxiosInstance
   constructor(axiosInstance: AxiosInstance) {
      this._api = axiosInstance
   }

   async get<I, O>(path: string, input?: GetParams<I>): Promise<O | BaseHttpError> {
      try {
         const response = await this._api.get(path, { headers: input?.headers, data: input?.data })
         return this.bindResponse<O>(response)
      } catch (error: any) {
         return this.bindResponse(null as any, error)
      }
   }

   async post<I, O>(path: string, input?: GetParams<I>): Promise<O | BaseHttpError> {
      try {
         const response = await this._api.post(path, { headers: input?.headers, data: input?.data })
         return this.bindResponse<O>(response)
      } catch (error: any) {
         return this.bindResponse(null as any, error)
      }
   }

   async patch<I, O>(path: string, input?: GetParams<I>): Promise<O | BaseHttpError> {
      try {
         const response = await this._api.patch(path, { headers: input?.headers, data: input?.data })
         return this.bindResponse<O>(response)
      } catch (error: any) {
         return this.bindResponse(null as any, error)
      }
   }

   async put<I, O>(path: string, input?: GetParams<I>): Promise<O | BaseHttpError> {
      try {
         const response = await this._api.put(path, { headers: input?.headers, data: input?.data })
         return this.bindResponse<O>(response)
      } catch (error: any) {
         return this.bindResponse(null as any, error)
      }
   }

   async delete<I, O>(path: string, input?: GetParams<I>): Promise<O | BaseHttpError> {
      try {
         const response = await this._api.delete(path, { headers: input?.headers, data: input?.data })
         return this.bindResponse<O>(response)
      } catch (error: any) {
         return this.bindResponse(null as any, error)
      }
   }

   private bindResponse<O = any>(response?: AxiosResponse, error?: any): O | BaseHttpError {
      if (response?.data) {
         return response.data
      } else {
         return HttpError.bind({ message: error?.message, status: error?.response?.status, errors: [] })
      }
   }
}
