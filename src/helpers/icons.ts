import TCard from "types/TCard"

import Icons from "images/icons"



export const getIcon = (iconName?: TCard.MoveType): string | undefined =>
  iconName ? Icons[iconName] : undefined
