import * as React from "react"
import { Route, RouteComponentProps, withRouter } from "react-router-dom"

import classNames from "classnames"

import "./style"



interface Props extends RouteComponentProps {
  children:  JSX.Element[] | JSX.Element | string
  isOpen?:    boolean
  onClick?:  (callback: () => void) => void
  onToggle?: () => void
  to?:       string
}



export const NavLink = ({ children, isOpen, onClick, onToggle, to }: Props): JSX.Element => (
  <Route render={({ history, location }): JSX.Element => {
    const active = location.pathname === to
    const navigate = (): void => to ? history.push(to) : undefined
    const click = (): void => onClick ? onClick(navigate) : navigate()

    return (
      <a
        href={to || "#"}
        className={classNames("NavLink", { active }, { toggle: onToggle })}
        onClick={(e): void => {
          e.preventDefault()
          if (!active) click()
        }}
      >
        {children}
        
        {onToggle && <div
          className={classNames("NavToggleIcon", { open: isOpen })}
          onClick={(e): void => {
            e.preventDefault()
            e.stopPropagation()
            onToggle()
          }}
        />}
      </a>
    )
  }}/>
)



NavLink.displayName = "NavLink"


export default withRouter(NavLink)
