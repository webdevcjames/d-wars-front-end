import * as React from "react"

import "./style"



interface NavMenuProps {
  children: JSX.Element[] | JSX.Element
  sub?:     boolean
}



export const NavMenu: React.SFC<NavMenuProps> = ({ children, sub }): JSX.Element =>
  <ul className={`NavMenu${sub ? " NavMenu--Sub" : ""}`}>{children}</ul>



NavMenu.displayName = "NavMenu"



export default NavMenu
