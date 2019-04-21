import * as React from "react"
import classNames from "classnames"

import "./style.styl"



interface Props {
  children: JSX.Element[] | JSX.Element
  isOpen?:  boolean
}



export const NavMenuItem = ({ children, isOpen }: Props): JSX.Element =>
  <li className={classNames("NavMenuItem", { open: isOpen })}>{children}</li>



NavMenuItem.displayName = "NavMenuItem"



export default NavMenuItem
