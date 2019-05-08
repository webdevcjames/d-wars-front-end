import * as React from "react"
import { RouteComponentProps } from "react-router"

import ButtonGroup from "components/ButtonGroup"
import Feature from "components/Feature"
import MainHeading from "components/MainHeading"
import NavLink from "components/NavLink"

import { menuItems } from "constants/AppData"

import BattleBackground from "images/kahns-colosseum-cropped.jpg"

import "./style"



const links = menuItems[0].items || []



export const Dashboard: React.SFC<RouteComponentProps> = (): JSX.Element => {
  React.useEffect((): void => { document.title = "Dimension Wars - Home" })

  return (
    <React.Fragment>
      <MainHeading>
        DIMENSION <span style={{ letterSpacing: "-2px", margin: "0 0 0 -16px" }}>W</span>ARS
      </MainHeading>

      <Feature image={BattleBackground} />
  
      <ButtonGroup>
        {links.map(({ link, label }, index): JSX.Element => (
          <NavLink key={index} to={link}>
            {label}
          </NavLink>
        ))}
      </ButtonGroup>
    </React.Fragment>
  )
}



Dashboard.displayName = "Dashboard"



export default Dashboard
