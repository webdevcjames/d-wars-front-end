import * as React from "react"

import TUser from "types/TUser"

import "./style"



interface UserDetailsProps {
  user: TUser.User
}



export const UserDetails: React.SFC<UserDetailsProps> = ({ user: { displayName, avatar } }): JSX.Element => (
  <React.Fragment>
    <div className="UserDetails__Username">{displayName}</div>
    <img className="UserDetails__Avatar" src={avatar} />
  </React.Fragment>
)



UserDetails.displayName = "UserDetails"



export default UserDetails
