import React, { Component } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./style.styl"



export class Card extends Component {

  constructor(props) {
    super(props)

    this.state = {
      flip: false
    }
  }



  render() {
    const { children } = this.props
    const { flip } = this.state
    return (
      <div
        className="CardWrap"
        onClick={() => this.setState({ flip: !flip })}
      >
        <div className={classNames("Card", { flip })}>
          {children}
        </div>
      </div>
    )
  }
}



Card.displayName = "Card"



Card.propTypes = {
  children: PropTypes.node,
}



export default Card
