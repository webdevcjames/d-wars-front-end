import * as React from "react"

import CardFace from "components/CardFace"

import TCard from "types/TCard"

import "./style"



interface Props {
  name: TCard.Name
  dFactor: TCard.DFactor
}



export const DFactorCardFace = ({ name, dFactor: { title, type, desc } }: Props): JSX.Element => (
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



export default DFactorCardFace
