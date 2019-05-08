import * as React from "react"

import "./style"



interface ButtonGroupProps {
  children?: JSX.Element[]
}



export const ButtonGroup: React.SFC<ButtonGroupProps> = ({ children }): JSX.Element => (
  <div className="ButtonGroup">
    {children && children.map((child, index): JSX.Element => 
      <div key={index} className="ButtonGroup__Item">
        {child}
      </div>
    )}
  </div>
)



ButtonGroup.displayName = "ButtonGroup"



export default ButtonGroup
