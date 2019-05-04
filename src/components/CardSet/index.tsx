import * as React from "react"

import CardContext from "contexts/CardContext"

import ChevronDoubleRightIcon from "mdi-react/ChevronDoubleRightIcon"

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
      <div className="CardSet">
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
        <div
          className={`CardSet__Toggle${xTranslation ? " CardSet__Toggle--Expanded" : ""}`}
          onClick={(): void => setXTranslation(!xTranslation ? 275 : 0)}
          style={{
            transform: `translateX(${(70 * (children.length - 1)) + 50 + (xTranslation * children.length)}px)`,
            zIndex: children.length * -1
          }}
        >
          <div className="CardSet__ToggleInner">
            <ChevronDoubleRightIcon className="CardSet__ToggleIcon" />
          </div>
        </div>
      </div>
    </CardContext.Provider>
  )
}



CardSet.displayName = "CardSet"



export default CardSet
