import * as React from "react"
// import { Component } from "react"

import NavLink from "components/NavLink"
import NavMenu from "components/NavMenu"
import NavMenuItem from "components/NavMenuItem"

import TNav from "types/TNav"

import "./style"



interface Props {
  menuItems: TNav.Link[]
}

interface State {
  open: string[]
}



export class AppMenu extends React.Component<Props, State> {

  public displayName: string



  public constructor(props: Props) {
    super(props)

    this.state = {
      open: []
    }

    this.displayName = "AppMenu"
  }



  public openMenu = (link: string): void => {
    const { open } = this.state

    if (open.includes(link)) this.setState({ open: open.filter((openLink): boolean => openLink !== link) })
    else this.setState({ open: [ ...open, link ] })
  }



  public renderMenu = (items: TNav.Link[]): JSX.Element[] => {
    const { open } = this.state
    
    return items.map(({ items, link, label }, index): JSX.Element => (
      <NavMenuItem key={index} isOpen={open.includes(link)}>
        <NavLink
          hover
          isOpen={open.includes(link)}
          onToggle={items ? (): void => this.openMenu(link) : undefined}
          to={link}
        >
          {label}
        </NavLink>

        {items && <NavMenu sub>{this.renderMenu(items)}</NavMenu>}
      </NavMenuItem>
    ))
  }



  public render(): JSX.Element {
    const { menuItems } = this.props

    return (
      <div className="AppMenuContainer">
        <div className="AppMenuHeader">
          <h1>
            D-
            <span style={{ letterSpacing: "-20px", margin: "0 0 0 6px" }}>W</span>
            <span style={{ margin: "0 6px 0 0" }}>a</span>
            <span style={{ margin: "0 10px 0 0" }}>r</span>
            s</h1>
        </div>

        <div className="AppMenu">
          <NavMenu>
            {this.renderMenu(menuItems)}
          </NavMenu>

          <NavLink onClick={(): void => console.warn("Logging out...")}>
            Logout
          </NavLink>
        </div>
      </div>
    )
  }
}



export default AppMenu
