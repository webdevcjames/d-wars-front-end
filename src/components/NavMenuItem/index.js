import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "./style.styl"



export const NavMenuItem = ({ children, isOpen }) =>
  <li className={classNames("NavMenuItem", { open: isOpen })}>{children}</li>



NavMenuItem.displayName = "NavMenuItem"



NavMenuItem.propTypes = {
  children: PropTypes.node,
  isOpen:   PropTypes.bool,
}



export default NavMenuItem
