import * as React from "react"

import CardFace from "components/CardFace"
import CardFill from "components/CardFill"

import CardContext from "contexts/CardContext"

import "./style"



interface DFactorCardFaceProps {
  children?: JSX.Element[] | JSX.Element | string
  index:     number
}



export const DFactorCardFace: React.SFC<DFactorCardFaceProps> = ({ index , ...CardFaceProps }): JSX.Element => {
  const { name, moves: { dFactor } } = React.useContext(CardContext)
  const { title, dFactorType, desc } = dFactor[index]

  return (
    <CardFace {...CardFaceProps} type="DFactor">
      <CardFill />
      
      <div className="CardDetails">
        <div className="CardName">{name}</div>
  
        <div className="CardDFactorContainer">
          <div className="CardDFactor">
            <div className="CardDFactorLead">
              <div className="CardDFactorHeading">D-Factor</div>
              <div className="CardDFactorTitle">{title}</div>
            </div>
            <div className="CardDFactorType">{dFactorType}</div>
            <div className="CardDFactorDesc">{desc}</div>
          </div>
        </div>
      </div>
    </CardFace>
  )
}



DFactorCardFace.displayName = "DFactorCardFace"



export default DFactorCardFace
