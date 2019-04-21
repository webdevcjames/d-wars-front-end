import * as React from "react"

import "./style.styl"



interface Props {
  children: JSX.Element[]
  sub?:     boolean 
}



export const NavMenu = ({ children, sub }: Props): JSX.Element =>
  <ul className={`${sub ? "Sub" : ""}NavMenu`}>{children}</ul>



NavMenu.displayName = "NavMenu"



export default NavMenu
