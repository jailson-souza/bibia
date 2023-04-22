import { useCallback, useMemo, useState } from 'react'
import DoGetBooksUseCase from '@biblia/providers/services/abiblia/useCase/doGetBooksUseCase'
import DoGetBookByAbbrevUseCase from '@biblia/providers/services/abiblia/useCase/doGetBookByAbbrevUseCase'
import Book from '@biblia/shared/domain/entity/biblia/models/Book'
import { GetBookByAbbrevParams } from '@biblia/shared/domain/entity/biblia/useCase/IDoGetBookByAbbrevUseCase'
import { BaseHttpError } from '@biblia/providers/base/errors/HttpError'
import IBaseHttpConnector from '@biblia/providers/base/adapters/interfaces/IBaseHttpConnector'

interface IbookError {
   message: string
   book?: {
      abbrev?: {
         pt?: string
         en?: string
      }
      author?: string
      chapters?: string
      group?: string
      name?: string
      testament?: string
      comment?: string
   }
}

interface IUseHomeParams {
   abibliaApiConnector: IBaseHttpConnector
}

export default function useHome({ abibliaApiConnector }: IUseHomeParams) {
   /* useCase */
   const getBooks = useMemo(() => new DoGetBooksUseCase(abibliaApiConnector), [abibliaApiConnector])
   const getBookByAbbrev = useMemo(() => new DoGetBookByAbbrevUseCase(abibliaApiConnector), [abibliaApiConnector])

   /* books's hooks */
   const [isLoadingBooks, setIsLoadingBooks] = useState(false)
   const [books, setBooks] = useState<Book[]>([])
   const [bookError, setBookError] = useState<IbookError>({} as IbookError)

   /* book's hooks */
   const [isLoadingBook, setIsLoadingBook] = useState(false)
   const [book, setBook] = useState<Book>()

   const handleGetBooks = useCallback(async (): Promise<void> => {
      setIsLoadingBooks(true)
      setBookError({} as IbookError)
      const response = await getBooks.execute()
      console.log('response', response)
      if (response instanceof BaseHttpError) {
         setBooks([])
         setBookError({ message: response.message } as IbookError)
         setIsLoadingBooks(false)
         return
      }
      setBooks(response)
      setIsLoadingBooks(false)
   }, [getBooks])

   const handleGetBookByAbbrev = useCallback(
      async ({ abbrev }: GetBookByAbbrevParams) => {
         setIsLoadingBook(true)
         setBookError({} as IbookError)
         const response = await getBookByAbbrev.execute({ abbrev })
         if (response instanceof BaseHttpError) {
            setBook(undefined)
            setBookError({ message: response?.message })
            setIsLoadingBook(false)
            return
         }
         setBook(response)
         setIsLoadingBook(false)
      },
      [getBookByAbbrev]
   )

   return {
      isLoadingBooks,
      bookError,
      books,
      handleGetBooks,
      isLoadingBook,
      book,
      handleGetBookByAbbrev
   }
}
