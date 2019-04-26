import * as React from "react"
// import { Component as Container } from "react"
import { Route, Switch } from "react-router-dom"

import AppMenu from "components/AppMenu"
import Header from "components/Header"

import Colosseum from "containers/Colosseum"
import Dashboard from "containers/Dashboard"

import { menuItems } from "constants/App"

import Avatar from "images/avatar.png"

import "./style"



export class App extends React.Component<{}, {}> {

  public displayName: string

  public constructor(props: {}) {
    super(props)

    this.displayName = "App"
  }



  public render(): JSX.Element {
    return (
      <div className="AppContainer">
        <div className="AppBody">
          <AppMenu menuItems={menuItems} />

          <div className="AppContent">
            <Header>
              <div className="Username">Korill Venn</div>
              <img src={Avatar} className="Avatar"/>
            </Header>

            <Switch>
              <Route exact path="/" render={(props): JSX.Element => <Dashboard {...props} />} />
              <Route path="/colosseum" render={(props): JSX.Element => <Colosseum {...props} />} />

              {/* 404 */}
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
