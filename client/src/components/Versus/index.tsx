import * as React from "react"

import "./style"



interface VersusProps {
  children?: JSX.Element[]
}



export const Versus: React.SFC<VersusProps> = (): JSX.Element => (
  <div className="Versus">
    <h2 className="Versus__Heading">VS</h2>
  </div>
)



Versus.displayName = "Versus"



export default Versus
