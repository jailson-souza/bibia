import Abbrev from '@biblia/shared/domain/biblia/models/Abbrev'

export default interface Book {
   abbrev: Abbrev
   author: string
   chapters: number
   group: string
   name: string
   testament: string
   comment: string
}
