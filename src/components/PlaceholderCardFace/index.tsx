import * as React from "react"

import CardFace from "components/CardFace"

import "./style"



export const PlaceholderCardFace = (): JSX.Element => (
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



export default PlaceholderCardFace
