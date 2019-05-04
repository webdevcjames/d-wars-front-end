import * as React from "react"

import CardContext from "contexts/CardContext"

import TCard from "types/TCard"
import TReact from "types/TReact"

import "./style"



interface CardSetProps {
  card:     TCard.Card
  children: JSX.Element[]
}



export const CardSet: React.SFC<CardSetProps> = ({ card, children }): JSX.Element => {
  const [ xTranslation, setXTranslation ]: TReact.State<number> = React.useState(0)

  return (
    <CardContext.Provider value={card}>
      <div
        className="CardSet"
        onMouseOut={(): void => setXTranslation(0)}
        onMouseOver={(): void => setXTranslation(275)}
      >
        {children.map((child, index): JSX.Element => (
          <div
            key={index}
            className="CardSet__Placer"
            style={{
              transform: `translateX(${(70 * index) + (xTranslation * index)}px)`,
              zIndex: index * -1
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </CardContext.Provider>
  )
}



CardSet.displayName = "CardSet"



export default CardSet
