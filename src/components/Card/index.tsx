import * as React from "react"

import Rotate3dIcon from "mdi-react/Rotate3dIcon"

import "./style"



interface CardProps {
  children: JSX.Element[]
}



export const Card: React.SFC<CardProps> = ({ children }): JSX.Element => {
  const [ flip, setFlip ] = React.useState(false)
    
  return (
    <div className="Card">
      <div className={`Card__Inner${flip ? " Card__Inner--Flipped" : ""}`}>
        {children.map((child): JSX.Element => React.cloneElement(child, { classNames: "Card__Face" }))}
      </div>
      <div className="Card__Flip" onClick={(): void => setFlip(!flip)}>
        <Rotate3dIcon className="Card__FlipIcon" size={28} />
      </div>
    </div>
  )
}



Card.displayName = "Card"



export default Card
