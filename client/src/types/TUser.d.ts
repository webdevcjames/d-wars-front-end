declare namespace TUser {
  type Username    = string
  type DisplayName = string
  type Avatar      = string

  interface User {
    username:    Username
    displayName: DisplayName
    avatar:      Avatar
  }
}



export default TUser
