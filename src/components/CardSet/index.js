import React, { Component } from "react"
import PropTypes from "prop-types"

import "./style.styl"



export class CardSet extends Component {

  constructor(props) {
    super(props)

    this.state = {
      translation: 0
    }
  }



  render() {
    const { children } = this.props
    const { translation } = this.state

    return (
      <div
        className="CardSet"
        onMouseOut={() => this.setState({ translation: 0 })}
        onMouseOver={() => this.setState({ translation: 275 })}
      >
        {children.map((child, index) => (
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



CardSet.displayName = "CardSet"



CardSet.propTypes = {}



export default CardSet
