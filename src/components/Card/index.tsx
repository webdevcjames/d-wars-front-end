import * as React from "react"
// import { Component } from "react"

import classNames from "classnames"

import "./style"



interface Props {
  children: JSX.Element[]
}

interface State {
  flip: boolean
}



export class Card extends React.Component<Props, State> {

  public displayName: string



  public constructor(props: Props) {
    super(props)

    this.state = {
      flip: false
    }

    this.displayName = "Card"
  }



  public render(): JSX.Element {
    const { children } = this.props
    const { flip } = this.state
    
    return (
      <div
        className="CardWrap"
        onClick={(): void => this.setState({ flip: !flip })}
      >
        <div className={classNames("Card", { flip })}>
          {children}
        </div>
      </div>
    )
  }
}



export default Card
