import * as React from "react"
// import { Component } from "react"

import isEmpty from "lodash/isEmpty"

import NavLink from "components/NavLink"
import NavMenu from "components/NavMenu"
import NavMenuItem from "components/NavMenuItem"

import TNav from "types/TNav"

import "./style"



interface Props {
  menuItems: TNav.Link[]
}

interface State {
  open?: string
}



export class AppMenu extends React.Component<Props, State> {

  public displayName: string

  public constructor(props: Props) {
    super(props)

    this.state = {
      open: undefined
    }

    this.displayName = "AppMenu"
  }



  public openMenu(items: TNav.Link[] | undefined, link: string, navigate: () => void): void {
    const { open } = this.state

    if (link === open || isEmpty(items))
      navigate()
    if (link === open && !isEmpty(items)) {
      this.setState({ open: undefined })
    } else if (link !== open && !isEmpty(items)) {
      this.setState({ open: link })
    }
  }



  public render(): JSX.Element {
    const { menuItems } = this.props
    const { open } = this.state

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
            {menuItems.map(({ items = [], link, label }, index): JSX.Element => (
              <NavMenuItem key={index} isOpen={link === open}>
                <NavLink onClick={(navigate): void => this.openMenu(items, link, navigate)} to={link}>
                  {label}
                </NavLink>

                {items && (
                  <NavMenu sub>
                    {items.map(({ link, label }, index): JSX.Element => (
                      <NavMenuItem key={index}>
                        <NavLink onClick={(navigate): void => this.openMenu([], link, navigate)} to={link}>
                          {label}
                        </NavLink>
                      </NavMenuItem>
                    ))}
                  </NavMenu>
                )}
              </NavMenuItem>
            ))}
          </NavMenu>

          {/* eslint-disable-next-line no-console */}
          <NavLink onClick={(): void => console.warn("Logging out...")}>
            Logout
          </NavLink>
        </div>
      </div>
    )
  }
}



export default AppMenu
