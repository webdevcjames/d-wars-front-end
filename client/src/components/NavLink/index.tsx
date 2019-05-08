import * as React from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"

import "./style"



interface NavLinkProps extends RouteComponentProps {
  children:   JSX.Element[] | JSX.Element | string
  className?: string
  hover?:     boolean 
  isOpen?:    boolean
  onClick?:   (callback: () => void) => void
  onToggle?:  () => void
  sub?:       boolean
  to?:        string
}



export const NavLink: React.SFC<NavLinkProps> = ({ children, className, history, hover, isOpen, location, onClick, onToggle, sub, to }): JSX.Element => {
  const active = location.pathname === to
  const navigate = (): void => to ? history.push(to) : undefined
  const click = (): void => onClick ? onClick(navigate) : navigate()

  return (
    <a
      href={to || "#"}
      className={`NavLink${active ? " NavLink--Active" : ""}${onToggle ? " NavLink--Toggle" : ""}${hover ? " NavLink--Hover" : ""}${sub ? " NavLink--Sub" : ""}${className ? ` ${className}` : ""}`}
      onClick={(e): void => {
        e.preventDefault()
        if (!active) click()
      }}
    >
      {hover && <div className="NavLink__Hover" />}

      <div className="NavLink__Content">{children}</div>
      
      {onToggle && <div
        className={`NavLink__ToggleIcon${isOpen ? " NavLink__ToggleIcon--Open" : ""}`}
        onClick={(e): void => {
          e.preventDefault()
          e.stopPropagation()
          onToggle()
        }}
      />}
    </a>
  )
}



NavLink.displayName = "NavLink"



export default withRouter(NavLink)
