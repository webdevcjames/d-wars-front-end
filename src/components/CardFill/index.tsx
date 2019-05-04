import * as React from "react"

import CardContext from "contexts/CardContext"

import "./style"



interface CardFillProps {
  hasArt?: boolean
}



export const CardFill: React.SFC<CardFillProps> = ({ hasArt }): JSX.Element => {
  const { color: { bg } } = React.useContext(CardContext)

  const style = bg
    ? (hasArt
      ? {
        backgroundColor: "transparent",
        backgroundImage: `linear-gradient(to bottom, ${bg}ff 0px, ${bg}ff 38px, ${bg}00 56px, ${bg}00 260px, ${bg}ff 278px, ${bg}ff 484px)`
      }
      : {
        backgroundColor: bg,
        backgroundImage: "none"
      })
    : {}

  return (
    <div
      className={`CardFill${hasArt ? " CardFill--HasArt" : " CardFill--Solid"}`}
      style={style}
    />
  )
}



CardFill.displayName = "CardFill"



export default CardFill
