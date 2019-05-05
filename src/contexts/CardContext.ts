import * as React from "react"

import TCard from "types/TCard"



const defaultCard: TCard.Card = {
  name:   "",
  art:    "",
  color:  {},
  stats:  { class: "Melee", health: "" },
  moves:  { base: [], rage: [], final: [], dFactor: [] },
  notes:  [],
  traits: [],
  resistances: [],
}



export const CardContext: React.Context<{ card: TCard.Card; expanded: boolean }> = React.createContext({ card: { ...defaultCard }, expanded: false })



export default CardContext