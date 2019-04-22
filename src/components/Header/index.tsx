import * as React from "react"
// import { Component } from "react"

import classNames from "classnames"

import "./style"



interface Props {
  children:   JSX.Element[]
  className?: string
  id?: 			 string
}



export class Header extends React.Component<Props, {}> {

  public displayName: string

  public constructor(props: Props) {
    super(props)

    this.state = {}

    this.displayName = "Header"
  }



  public render(): JSX.Element {
    const { children, className, id } = this.props
    return (
      <div
        className={classNames("HeaderContainer", className)}
        id={id}
      >
        {children}
      </div>
    )
  }
}



export default Header
