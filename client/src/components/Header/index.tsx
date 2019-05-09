import * as React from "react"

import "./style"



interface HeaderProps {
  children:   (JSX.Element | string)[] | JSX.Element[] | JSX.Element | string
  className?: string
  id?: 		    string
}



export const Header: React.SFC<HeaderProps> = ({ children, className, id }): JSX.Element => (
  <div
    className={`Header${className ? ` ${className}` : ""}`}
    id={id}
  >
    {children}
  </div>
)



Header.displayName = "Header"



export default Header
