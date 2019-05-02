import * as React from "react"
// import { Component } from "react"

import "./style"



interface Props {
  children: JSX.Element[]
}

interface State {
  clickOriginX: number | null
  flip: boolean
  rotation: number
}



const ROTATE_THRESHOLD = 50



export class Card extends React.Component<Props, State> {

  public displayName: string



  public constructor(props: Props) {
    super(props)

    this.state = {
      clickOriginX: null,
      flip: false,
      rotation: 0
    }

    this.displayName = "Card"
  }



  public getDraggedState = (e: React.MouseEvent): void => {
    const {
      clickOriginX: stateClickOriginX,
      flip: stateFlip,
      rotation: stateRotation
    } = this.state
    let clickOriginX: number | null = stateClickOriginX
    let flip: boolean = stateFlip
    let rotation: number = stateRotation

    if (e.type === "mousedown") {
      clickOriginX = e.screenX
      this.setState({ clickOriginX })
    } if (e.type === "mousemove" && clickOriginX !== null) {
      console.warn(e.movementX - clickOriginX)

      const sign = (e.screenX - clickOriginX) >= 0 ? 1 : -1
      rotation = Math.min(Math.abs(e.screenX - clickOriginX), ROTATE_THRESHOLD) * sign // use some sort of inverse exponent or logarithm here
      this.setState({ clickOriginX, flip, rotation })
    } if (e.type === "mouseup") {
      if (clickOriginX && Math.abs(e.screenX - clickOriginX) > ROTATE_THRESHOLD) flip = !flip
      clickOriginX = null
      rotation = 0 // maybe accumulate rotation or flip (based on rotation) instead
      this.setState({ clickOriginX, flip, rotation })
    }

  }



  public render(): JSX.Element {
    const { children } = this.props
    const { flip, rotation } = this.state
    
    return (
      <div
        className="CardWrap"
        onMouseDown={this.getDraggedState}
        onMouseMove={this.getDraggedState}
        onMouseUp={this.getDraggedState}
      >
        <div
          className="Card"
          style={{ transform: `rotateY(${rotation}deg) rotateY(${flip ? 180 : 0}deg)` }}
        >
          {children}
        </div>
      </div>
    )
  }
}



export default Card
