import DomainError from '@biblia/shared/domain/base/models/DomainError'

export enum TextCode {
   BadRequest = 'BadRequest',
   Unautorized = 'Unautorized',
   Forbidden = 'Forbidden',
   NotFound = 'NotFound',
   RequestTimeOut = 'RequestTimeOut',
   InternalServer = 'InternalServer'
}

interface DataError<T = string> {
   isError?: boolean
   message: string
   statusCode: number
   textCode: TextCode | keyof typeof TextCode
   errors?: T[]
}

export abstract class BaseHttpError<T = string> extends DomainError {
   public statusCode: number
   public textCode: TextCode | keyof typeof TextCode
   public errors?: T[] | any

   constructor(inputError: DataError<T>) {
      super(inputError?.message)
      this.statusCode = inputError?.statusCode
      this.textCode = inputError?.textCode
      this.errors = inputError?.errors
   }

   public data(): DataError {
      return {
         isError: this.isError,
         statusCode: this.statusCode,
         textCode: this.textCode,
         message: this.message,
         errors: this.errors
      }
   }
}

class BadRequesHttpError<T = string> extends BaseHttpError<T> {
   constructor(message: string, errors?: T[]) {
      super({
         message,
         statusCode: 400,
         textCode: 'BadRequest',
         errors
      })
   }
}

class UnautorizedHttpError<T = string> extends BaseHttpError<T> {
   constructor(message: string, errors?: T[]) {
      super({
         message,
         statusCode: 401,
         textCode: 'Unautorized',
         errors
      })
   }
}

class ForbiddenHttpError<T = string> extends BaseHttpError<T> {
   constructor(message: string, errors?: T[]) {
      super({
         message,
         statusCode: 403,
         textCode: 'Forbidden',
         errors
      })
   }
}

class NotFoundHttpError extends BaseHttpError {
   constructor(message: string) {
      super({
         message,
         statusCode: 404,
         textCode: 'NotFound'
      })
   }
}

class RequestTimeOutHttpError<T = string> extends BaseHttpError<T> {
   constructor(message: string, errors?: T[]) {
      super({
         message,
         statusCode: 408,
         textCode: 'RequestTimeOut',
         errors
      })
   }
}

class ServerHttpError<T = string> extends BaseHttpError<T> {
   constructor(message: string, statusCode?: number, errors?: T[]) {
      super({
         message,
         statusCode: statusCode || 500,
         textCode: 'InternalServer',
         errors
      })
   }
}

interface BindInputError {
   status: number
   message: string
   errors?: string[] | any[] | undefined
}

export default class HttpError {
   static bind({ status, message, errors }: BindInputError): BaseHttpError {
      if (status === 400) {
         return new BadRequesHttpError(message, errors)
      }
      if (status === 401) {
         return new UnautorizedHttpError(message, errors)
      }
      if (status === 403) {
         return new ForbiddenHttpError(message, errors)
      }
      if (status === 404) {
         return new NotFoundHttpError(message)
      }
      if (status === 408) {
         return new RequestTimeOutHttpError(message, errors)
      }
      return new ServerHttpError(message, status)
   }
}
