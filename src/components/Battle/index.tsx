import * as React from "react"

import "./style"



interface BattleProps {
  children?: JSX.Element[] | JSX.Element | string
}



export const Battle: React.SFC<BattleProps> = ({ children }): JSX.Element =>
  <div className="Battle">{children}</div>



Battle.displayName = "Battle"



export default Battle
