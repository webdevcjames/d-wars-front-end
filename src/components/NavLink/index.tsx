import * as React from "react"
import { Route, withRouter, RouteComponentProps } from "react-router-dom"
import classNames from "classnames"

import "./style.styl"



interface Props extends RouteComponentProps {
  children: JSX.Element[] | JSX.Element | string
  onClick?: (callback: () => void) => void
  to?:      string
}



export const NavLink = ({ children, onClick, to }: Props): JSX.Element => (
  <Route render={({ history, location }): JSX.Element => {
    const active = location.pathname === to
    const navigate = (): void => to ? history.push(to) : undefined
    const click = (): void => onClick ? onClick(navigate) : navigate()

    return (
      <a
        href={to}
        className={classNames("NavLink", { active })}
        onClick={(e): void => {
          e.preventDefault()
          click()
        }}
      >
        {children}
      </a>
    )
  }}/>
)



NavLink.displayName = "NavLink"


export default withRouter(NavLink)
