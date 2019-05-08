import * as React from "react"

import BattleContext from "contexts/BattleContext"
import CardContext from "contexts/CardContext"

import ChevronDoubleLeftIcon from "mdi-react/ChevronDoubleLeftIcon"
import ChevronDoubleRightIcon from "mdi-react/ChevronDoubleRightIcon"

import TCard from "types/TCard"
import TReact from "types/TReact"

import "./style"



interface CardSetProps {
  card:     TCard.Card
  children: JSX.Element[]
  index:    number
  side?:    TCard.Side
}



export const CardSet: React.SFC<CardSetProps> = ({ card, children, index, side }): JSX.Element => {
  const [ hover, setHover ]: TReact.State<boolean> = React.useState(false)
  const [ xTranslation, setXTranslation ]: TReact.State<number> = React.useState(0)
  const { activeIndex, setActiveIndex } = React.useContext(BattleContext)

  const expanded = activeIndex === index
  const isRight  = side === "Right"
  const xTranslationSign = isRight ? -1 : 1

  const setExpandedClasses = (className: string): string => typeof activeIndex === "number"
    ? (
      expanded
        ? ` ${className}--Expanded`
        : ` ${className}--NotExpanded`
    )
    : ""

  return (
    <CardContext.Provider value={{ card, expanded }}>
      <div
        className={`CardSet${setExpandedClasses("CardSet")}${hover ? " CardSet--Hover" : ""}${side ? ` CardSet--${side}` : ""}`}
        onMouseEnter={(): void => { !hover && setHover(true) }}
        onMouseLeave={(): void => { hover && setHover(false) }}
      >
        <div className="CardSet__Inner">
          {children.map((child, index): JSX.Element => (
            <div
              key={index}
              className="CardSet__Placer"
              style={{
                transform: `translateX(${((70 * index) + (xTranslation * index)) * xTranslationSign}px)`,
                zIndex: index * -1
              }}
            >
              {child}
            </div>
          ))}
          <div
            className={`CardSet__Toggle${setExpandedClasses("CardSet__Toggle")}${hover ? " CardSet__Toggle--Hover" : ""}`}
            onClick={(): void => {
              setXTranslation(!xTranslation ? 275 : 0)
              setActiveIndex(expanded ? undefined : index)
            }}
            style={{
              transform: `translateX(${((70 * children.length) + (xTranslation * children.length) - (xTranslation ? 25 : 20)) * xTranslationSign}px)`,
              zIndex: children.length * -1
            }}
          >
            <div className="CardSet__ToggleInner">
              {!isRight && <ChevronDoubleRightIcon className="CardSet__ToggleIcon" size={28} />}
              {isRight && <ChevronDoubleLeftIcon className="CardSet__ToggleIcon" size={28} />}
            </div>
          </div>
        </div>
      </div>
    </CardContext.Provider>
  )
}



CardSet.displayName = "CardSet"



export default CardSet
