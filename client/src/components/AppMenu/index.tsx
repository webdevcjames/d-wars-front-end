import * as React from "react"
import { RouteComponentProps, withRouter } from "react-router"

import NavLink from "components/NavLink"
import NavMenu from "components/NavMenu"
import NavMenuItem from "components/NavMenuItem"

import TNav from "types/TNav"
import TReact from "types/TReact"

import "./style"



interface AppMenuProps extends RouteComponentProps {
  menuItems: TNav.Link[]
}



export const AppMenu: React.SFC<AppMenuProps> = ({ history, location, menuItems }): JSX.Element => {
  const [ open, setOpen ]: TReact.State<string[]> = React.useState([])

  const isHome = location.pathname === "/"

  const openMenu = (link: string): void => {  
    if (open.includes(link)) setOpen(open.filter((openLink): boolean => openLink !== link))
    else setOpen([ ...open, link ])
  }

  const renderMenu = (items: TNav.Link[], isOpen?: boolean, sub?: boolean): JSX.Element[] => (
    items.map(({ items, link, label }, index): JSX.Element => (
      <NavMenuItem key={index} isOpen={isOpen && sub} sub={sub}>
        <NavLink
          hover
          isOpen={open.includes(link)}
          onToggle={items ? (): void => openMenu(link) : undefined}
          sub={sub}
          to={link}
        >
          {label}
        </NavLink>

        {items && <NavMenu sub>{renderMenu(items, open.includes(link), true)}</NavMenu>}
      </NavMenuItem>
    ))
  )

  return (
    <div className="AppMenu">
      <div className="AppMenu__Header">
        <h1
          className={`AppMenu__Heading${isHome ? " AppMenu__Heading--Active" : ""}`}
          onClick={(): boolean | void => !isHome && history.push("/")}
          title="Dimension Wars"
        >
          D-
          <span style={{ letterSpacing: "-20px", margin: "0 0 0 6px" }}>W</span>
          <span style={{ margin: "0 6px 0 0" }}>a</span>
          <span style={{ margin: "0 10px 0 0" }}>r</span>
          s</h1>
      </div>

      <div className="AppMenu__Content">
        <NavMenu>
          {renderMenu(menuItems)}
        </NavMenu>

        <NavLink onClick={(): void => console.warn("Logging out...")}>
          Logout
        </NavLink>
      </div>
    </div>
  )
}



AppMenu.displayName = "AppMenu"



export default withRouter(AppMenu)
