import * as React from "react"

import BattleContext from "contexts/BattleContext"

import TReact from "types/TReact"

import "./style"



interface BattleProps {
  children?: JSX.Element[] | JSX.Element | string
}



export const Battle: React.SFC<BattleProps> = ({ children }): JSX.Element => {
  const [ activeIndex, setActiveIndex ]: TReact.State<number | undefined> = React.useState(undefined)
  return (
    <BattleContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="Battle">{children}</div>
    </BattleContext.Provider>
  )
}




Battle.displayName = "Battle"



export default Battle
