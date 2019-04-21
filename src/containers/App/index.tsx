import * as React from "react"
// import { Component as Container } from "react"
import { Route, Switch } from "react-router-dom"
import { isEmpty } from "lodash"

import Header from "../../components/Header"
import NavLink from "../../components/NavLink"
import NavMenu from "../../components/NavMenu"
import NavMenuItem from "../../components/NavMenuItem"

import Dashboard from "../Dashboard"
import Colosseum from "../Colosseum"

import "./style.styl"



const menuItems = [
  {
    items: [
      { link: "/discussion", label: "Discussion" },
      { link: "/sub2",       label: "Subpage #2" },
      { link: "/sub3",       label: "Subpage #3" }
    ],
    link: "/", 				   label: "Home"
  },
  { link: "/colosseum",  label: "Colosseum" },
  { link: "/journal",    label: "Journal" },
  { link: "/players",    label: "Players" },
  { link: "/draft",      label: "Draft" },
  { link: "/bazaar",     label: "Bazaar" },
  { link: "/the den",    label: "The Den" },
  { link: "/stats",      label: "Stats" },
  { link: "/compendium", label: "Compendium" },
  { link: "/archives",   label: "Archives" },
  { link: "/help",       label: "Help" },
]



interface Link {
  link: string
  label: string
  items?: Link[]
}

interface State {
  open?: string
}



export class App extends React.Component<{}, State> {

  public displayName: string

  public constructor(props: {}) {
    super(props)

    this.state = {
      open: undefined
    }

    this.displayName = "App"
  }



  public openMenu(items: Link[] | undefined, link: string, navigate: () => void): void {
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
    const { open } = this.state

    return (
      <div className="AppContainer">
        <div className="AppBody">
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

          <div className="AppContent">
            <Header>
              <div className="Username">Korill Venn</div>
              <img src="images/avatar.png" className="Avatar"/>
            </Header>

            <Switch>
              <Route exact path="/" render={(props): JSX.Element => <Dashboard {...props} />} />
              <Route path="/colosseum" render={(props): JSX.Element => <Colosseum {...props} />} />

              <Route render={(): JSX.Element => (
                <div className="AppInnerWrap">
                  <h1 className="heading" title="This might just have to be an image, because of the border">
                    DIMENSION <span style={{ letterSpacing: "-4px", margin: "0 0 0 4px" }}>W</span>ARS
                  </h1>
                  <p style={{ marginTop: "96px", textAlign: "center" }}>Uh oh!</p>
                  <p style={{ marginTop: "32px", textAlign: "center" }}>
                    Mollit et sint duis tempor ea qui laborum ullamco. Commodo eiusmod enim ut cupidatat do eu. Est amet sint cupidatat do ea aliquip amet commodo in proident eu do proident ad. Ea nulla mollit velit fugiat ad eiusmod commodo qui ipsum. Elit aliqua veniam minim ullamco aliqua ullamco deserunt esse. Aute ipsum anim cupidatat quis aliqua consequat aliqua ullamco in eu tempor elit sunt. Pariatur deserunt ut quis deserunt irure est deserunt cillum anim duis est officia enim.
                  </p>
                </div>
              )} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}



export default App
