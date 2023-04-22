export default abstract class DomainError {
   public isError = true
   public message: string
   constructor(message: string) {
      this.message = message
   }
}
