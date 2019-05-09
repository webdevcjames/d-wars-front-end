import * as React from "react"
import { Route, Switch } from "react-router-dom"

import AppMenu from "components/AppMenu"
import Header from "components/Header"
import UserDetails from "components/UserDetails"

import Colosseum from "containers/Colosseum"
import Dashboard from "containers/Dashboard"
import PageNotFound from "containers/PageNotFound"

import { menuItems } from "constants/AppData"
import { users } from "constants/MockData"

import { call } from "helpers/app"

import "./style"



export const App: React.SFC = (): JSX.Element => {
  const [ apiResponse, setApiResponse ] = React.useState("")
  const [ dbResponse, setDbResponse ] = React.useState("")

  React.useEffect((): void => {
    call("http://localhost:9000/testAPI", setApiResponse)
    call("http://localhost:9000/testDB", setDbResponse)
  })

  return (
    <div className="App">
      <div className="App__Body">
        <AppMenu menuItems={menuItems} />
  
        <div className="App__Content">
          <Header>
            {apiResponse} {dbResponse} <UserDetails user={users["korill_venn"]} />
          </Header>
  
          <div className="App__ContentInner">
            <Switch>
              <Route exact path="/" render={(props): JSX.Element => <Dashboard {...props} />} />
              <Route path="/colosseum" render={(props): JSX.Element => <Colosseum {...props} />} />
  
              <Route render={(props): JSX.Element => <PageNotFound {...props} />} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}



App.displayName = "App"



export default App
