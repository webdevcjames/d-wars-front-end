import React from "react"
import PropTypes from "prop-types"
import { Route, withRouter } from "react-router-dom"
import classNames from "classnames"

import "./style.styl"



export const NavLink = ({ children, onClick, to }) => (
  <Route render={({ history, location }) => {
    const active = location.pathname === to
    const click = () => onClick ? onClick(navigate) : navigate()
    const navigate = () => history.push(to)

    return (
      <a
        href={to}
        className={classNames("NavLink", { active })}
        onClick={e => e.preventDefault() || click()}
      >
        {children}
      </a>
    )
  }}/>
)



NavLink.displayName = "NavLink"



NavLink.propTypes = {
  children: PropTypes.node,
  onClick:  PropTypes.func,
  to:       PropTypes.string,
}



export default withRouter(NavLink)
