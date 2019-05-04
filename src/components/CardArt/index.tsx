import * as React from "react"

import CardFill from "components/CardFill"

import CardContext from "contexts/CardContext"

import TCard from "types/TCard"

import "./style"



interface CardArtProps {
  art: TCard.Art
}



export const CardArt: React.SFC<CardArtProps> = ({ art }): JSX.Element => {
  const { color: { bg } } = React.useContext(CardContext)
  
  let style: { [property: string]: string }  = { backgroundImage: `url(${art})` }
  if (bg) style = { ...style, backgroundColor: bg }

  return (
    <div className="CardArt" style={style}>
      <CardFill hasArt />
    </div>
  )
}



CardArt.displayName = "CardArt"



export default CardArt
