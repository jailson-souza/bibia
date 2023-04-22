import { useEffect } from 'react'
import useHome from './hooks/useHome'
import ABibliaApiConnector from '@biblia/providers/connectors/ABibliaApiConnector'

export default function Home() {
   const { isLoadingBooks, books, handleGetBooks } = useHome({ abibliaApiConnector: new ABibliaApiConnector() })

   useEffect(() => {
      handleGetBooks()
   }, [handleGetBooks])

   return (
      <main>
         <h1>Books</h1>
         <div>
            {isLoadingBooks && <span>carregando...</span>}
            {!isLoadingBooks && books?.length > 0 && (
               <ul>
                  {books?.map((book, i) => (
                     <li key={`book-${i}`}>
                        {book?.abbrev?.pt} - {book?.name} - {book?.chapters}
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </main>
   )
}
