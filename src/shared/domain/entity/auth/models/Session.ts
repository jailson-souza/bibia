export default interface Session {
   readonly token: string
   readonly expiresIn: number
   readonly refreshToken?: string
   readonly keepMeLoggedIn?: boolean
}
