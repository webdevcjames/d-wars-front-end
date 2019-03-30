import React from "react"
import PropTypes from "prop-types"

import CardFace from "../../components/CardFace"

import "./style.styl"



export const PlaceholderCardFace = () => (
  <CardFace type="Placeholder">
    <div className="CardFill" />
    
    <div className="CardDetails">
      <div className="CardPlaceholderContainer">
        <div className="CardPlaceholder">
          <div className="CardPlaceholderHeading">D-Wars</div>
        </div>
      </div>
    </div>
  </CardFace>
)



PlaceholderCardFace.displayName = "PlaceholderCardFace"



PlaceholderCardFace.propTypes = {}



export default PlaceholderCardFace
