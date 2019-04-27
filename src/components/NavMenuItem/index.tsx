import * as React from "react"

import classNames from "classnames"

import "./style"



interface Props {
  children: (JSX.Element | undefined)[] | (JSX.Element | undefined)
  isOpen?:  boolean
}



export const NavMenuItem = ({ children, isOpen }: Props): JSX.Element =>
  <li className={classNames("NavMenuItem", { open: isOpen })}>{children}</li>



NavMenuItem.displayName = "NavMenuItem"



export default NavMenuItem
