import * as React from "react"
import classNames from "classnames"

import "./style.styl"



type CardType = undefined | "Notes" | "DFactor" | "Types" | "Placeholder"

interface Props {
  children: JSX.Element[]
  type?:    CardType
}



export const CardFace = ({ children, type }: Props): JSX.Element => {
  return (
    <div
      className={classNames("CardFace", type)}
      style={{
        color: "#c91a1e",
        backgroundColor: "#c91a1e",
        backgroundImage: "linear-gradient(30deg, rgba(87, 7, 7, 0.9) 0%, rgba(87, 7, 7, 0.9) 5%, rgba(245, 69, 63, 0.9) 30%, rgba(186, 15, 9, 0.9) 55%, rgba(186, 15, 9, 0.9) 60%, rgba(186, 15, 9, 0.9) 65%, rgba(243, 28, 20, 0.9) 80%, rgba(87, 7, 7, 0.9) 95%, rgba(87, 7, 7, 0.9) 100%)",
      }}
    >
      {children}
    </div>
  )
}



CardFace.displayName = "CardFace"



export default CardFace
