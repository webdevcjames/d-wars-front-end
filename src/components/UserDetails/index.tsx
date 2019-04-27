import * as React from "react"

import TUser from "types/TUser"

import "./style"



interface Props {
  user: TUser.User
}



export class UserDetails extends React.Component<Props, {}> {

  public displayName: string

  public constructor(props: Props) {
    super(props)

    this.displayName = "UserDetails"
  }



  public render(): JSX.Element {
    const { user: { displayName, avatar } } = this.props

    return (
      <React.Fragment>
        <div className="Username">{displayName}</div>
        <img className="Avatar" src={avatar} />
      </React.Fragment>
    )
  }
}



export default UserDetails
