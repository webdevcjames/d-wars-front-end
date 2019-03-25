import React from "react"
import PropTypes from "prop-types"

import "./style.styl"



export const NavMenu = ({ children, sub }) =>
  <ul className={`${sub ? "Sub" : ""}NavMenu`}>{children}</ul>



NavMenu.displayName = "NavMenu"



NavMenu.propTypes = {
  children: PropTypes.node,
  sub:      PropTypes.bool, 
}



export default NavMenu
