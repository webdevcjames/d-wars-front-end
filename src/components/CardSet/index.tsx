import * as React from "react"
// import { Component } from "react"

import "./style.styl"



interface Props {
  children: JSX.Element[]
}

interface State {
  translation: number
}



export class CardSet extends React.Component<Props, State> {

  public displayName: string

  public constructor(props: Props) {
    super(props)

    this.state = {
      translation: 0
    }

    this.displayName = "CardSet"
  }



  public render(): JSX.Element {
    const { children } = this.props
    const { translation } = this.state

    return (
      <div
        className="CardSet"
        onMouseOut={(): void => this.setState({ translation: 0 })}
        onMouseOver={(): void => this.setState({ translation: 275 })}
      >
        {children.map((child: JSX.Element, index: number): JSX.Element => (
          <div
            key={index}
            className="CardPlacer"
            style={{
              transform: `translateX(${(70 * index) + (translation * index)}px)`,
              zIndex: index * -1
            }}
          >
            {child}
          </div>
        ))}
      </div>
    )
  }
}



export default CardSet
