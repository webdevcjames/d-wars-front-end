import React from "react"
import PropTypes from "prop-types"

import CardFace from "../../components/CardFace"



export const DFactorCardFace = ({ name, dFactor: { title, type, desc } }) => (
  <CardFace type="DFactor">
    <div className="CardFill" />
    
    <div className="CardDetails">
      <div className="CardName">{name}</div>

      <div className="CardDFactorContainer">
        <div className="CardDFactor">
          <div className="CardDFactorLead">
            <div className="CardDFactorHeading">D-Factor</div>
            <div className="CardDFactorTitle">{title}</div>
          </div>
          <div className="CardDFactorType">{type}</div>
          <div className="CardDFactorDesc">{desc}</div>
        </div>
      </div>
    </div>
  </CardFace>
)



DFactorCardFace.displayName = "DFactorCardFace"



DFactorCardFace.propTypes = {
  name:     PropTypes.string,
  dFactor:  PropTypes.shape({
    title: PropTypes.string,
    type:  PropTypes.string,
    desc:  PropTypes.string,
  }),
}



export default DFactorCardFace



