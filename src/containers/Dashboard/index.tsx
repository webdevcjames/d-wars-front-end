import * as React from "react"
// import { Component as Container } from "react"
import { RouteComponentProps } from "react-router"

import NavLink from "components/NavLink"

import BattleBackground from "images/kahns-colosseum-cropped.jpg"

import "./style"



interface Props extends RouteComponentProps {
  children?: JSX.Element[] | JSX.Element | string
}



export class Dashboard extends React.Component<Props, {}> {

  public displayName: string

  public constructor(props: Props) {
    super(props)

    this.displayName = "Dashboard"
  }



  public render(): JSX.Element {
    return (
      <div className="AppInnerWrap">
        <h1 className="heading" title="This might just have to be an image, because of the border">
          DIMENSION <span style={{ letterSpacing: "-4px", margin: "0 0 0 -16px" }}>W</span>ARS
        </h1>

        <div className="FeatureWrap">
          <div className="Feature" style={{ backgroundImage: `url(${BattleBackground})` }} />
          <div className="FeatureGradient" />
        </div>

        <div className="HomeButtons">
          <div className="NavButtonWrap">
            <NavLink to="/discussion">
              Discussion
            </NavLink>
          </div>
          <div className="NavButtonWrap">
            <NavLink to="/sub2">
              Subpage #2
            </NavLink>
          </div>
          <div className="NavButtonWrap">
            <NavLink to="/sub3">
              Subpage #3
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}



export default Dashboard
