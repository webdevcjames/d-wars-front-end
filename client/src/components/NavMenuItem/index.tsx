import * as React from "react"

import "./style"



interface NavMenuItemProps {
  children: (JSX.Element | undefined)[] | (JSX.Element | undefined)
  isOpen?:  boolean
  sub?:     boolean
}



export const NavMenuItem: React.SFC<NavMenuItemProps> = ({ children, isOpen, sub }): JSX.Element =>
  <li className={`NavMenuItem${sub ? " NavMenuItem--Sub" : ""}${isOpen ? " NavMenuItem--Open" : ""}`}>{children}</li>



NavMenuItem.displayName = "NavMenuItem"



export default NavMenuItem
