import * as React from "react"

import CardContext from "contexts/CardContext"

import TCard from "types/TCard"

import "./style"



interface CardFaceProps {
  children:   JSX.Element[]
  className?: string
  type?:      TCard.Type
}



export const CardFace: React.SFC<CardFaceProps> = ({ children, className, type }): JSX.Element => {
  const { card: { color: { text, borderSolid, borderGradient } } } = React.useContext(CardContext)

  let sortedGradientStops, gradient
  if (borderGradient) {
    sortedGradientStops = [ ...borderGradient.stops ].sort((a, b): number => parseInt(a.position, 10) - parseInt(b.position, 10))
    gradient = `linear-gradient(${borderGradient.angle}deg, ${sortedGradientStops.map(({ position, color }): string => `${color} ${position}`).join(", ")})`
  }

  let style: { [property: string]: string } = {}
  if (text) style = { ...style, color: text }
  if (borderSolid) style = { ...style, backgroundColor: borderSolid }
  if (gradient) style = { ...style, backgroundImage: gradient }

  return (
    <div className={`CardFace${type ? ` ${type}` : ""}${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  )
}



CardFace.displayName = "CardFace"



export default CardFace
