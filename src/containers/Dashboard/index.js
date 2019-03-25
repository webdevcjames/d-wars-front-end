import React, { Component as Container } from "react"
import PropTypes from "prop-types"

import NavLink from "../../components/NavLink"

import "./style.styl"



export class Dashboard extends Container {

  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div className="AppInnerWrap">
        <h1 className="heading" title="This might just have to be an image, because of the border">
          DIMENSION <span style={{ letterSpacing: "-4px", margin: "0 0 0 4px" }}>W</span>ARS
        </h1>

        <div className="FeatureWrap">
          <div className="Feature" style={{ backgroundImage: "url(images/kahns-colosseum-cropped.jpg)" }} />
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



Dashboard.displayName = "Dashboard"



Dashboard.propTypes = {}



export default Dashboard
