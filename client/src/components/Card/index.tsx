import * as React from "react"

import Rotate3dIcon from "mdi-react/Rotate3dIcon"

import CardContext from "contexts/CardContext"

import TReact from "types/TReact"

import "./style"



interface CardProps {
  children: JSX.Element[]
}



export const Card: React.SFC<CardProps> = ({ children }): JSX.Element => {
  const [ flip, setFlip ]: TReact.State<boolean> = React.useState(false)
  const { expanded } = React.useContext(CardContext)
    
  return (
    <div className="Card">
      <div className={`Card__Inner${flip ? " Card__Inner--Flipped" : ""}`}>
        {children.map((child): JSX.Element => React.cloneElement(child, { className: "Card__Face" }))}
      </div>
      <div className={`Card__Flip${expanded ? " Card__Flip--Expanded" : ""}`} onClick={(): void => setFlip(!flip)}>
        <Rotate3dIcon className="Card__FlipIcon" size={28} />
      </div>
    </div>
  )
}



Card.displayName = "Card"



export default Card
