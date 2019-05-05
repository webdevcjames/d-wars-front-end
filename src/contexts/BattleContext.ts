import * as React from "react"



export const BattleContext: React.Context<{
  activeIndex?: number
  setActiveIndex: (index: number | undefined) => void
}> = React.createContext({ setActiveIndex: (): void => {} })



export default BattleContext