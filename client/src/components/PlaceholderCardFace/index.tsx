import * as React from "react"

import CardFace from "components/CardFace"
import CardFill from "components/CardFill"

import "./style"



type PlaceholderCardFaceProps = object



export const PlaceholderCardFace: React.SFC<PlaceholderCardFaceProps> = ({ ...CardFaceProps }): JSX.Element => (
  <CardFace {...CardFaceProps} type="Placeholder">
    <CardFill />
    
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
