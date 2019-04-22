import * as React from "react"
// import { Component as Container } from "react"

import NavLink from "components/NavLink"

import Card from "components/Card"
import CardSet from "components/CardSet"
import DFactorCardFace from "components/DFactorCardFace"
import MainCardFace from "components/MainCardFace"
import NotesCardFace from "components/NotesCardFace"
import PlaceholderCardFace from "components/PlaceholderCardFace"
import TypesCardFace from "components/TypesCardFace"

import TCard from "types/TCard"

import MockData from "constants/MockData"

import "./style"



const { cards: { kenshi } } = MockData



export class Colosseum extends React.Component<{}, {}> {

  public displayName: string

  public constructor(props: {}) {
    super(props)

    this.displayName = "Colosseum"
  }



  public render(): JSX.Element {
    return (
      <div className="AppInnerWrap">
        <div className="BattleWrap">
          <div className="BattleBackgroundWrap">
            <div className="BattleBackground" style={{ backgroundImage: "url(images/kahns-colosseum-cropped.jpg)" }} />
            <div className="BattleGradient" />
          </div>

          <h1 className="heading" title="This might just have to be an image, because of the border">
            BATTLE
          </h1>

          <div className="Battle">

            <CardSet>
              <Card>
                <MainCardFace {...kenshi} />
                <NotesCardFace {...kenshi} />
              </Card>
              <Card>
                {kenshi.moves.dFactor.map((dFactor: TCard.DFactor, index: number): JSX.Element => 
                  <DFactorCardFace key={index} name={kenshi.name} dFactor={dFactor} />)}
              </Card>
              <Card>
                <TypesCardFace {...kenshi} />
                <PlaceholderCardFace />
              </Card>
            </CardSet>

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
      </div>
    )
  }
}



export default Colosseum
