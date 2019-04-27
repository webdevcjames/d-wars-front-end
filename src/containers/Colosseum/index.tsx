import * as React from "react"
// import { Component as Container } from "react"
import { RouteComponentProps } from "react-router"

import chunk from "lodash/chunk"

import BattleStage from "components/BattleStage"
import NavLink from "components/NavLink"

import Card from "components/Card"
import CardSet from "components/CardSet"
import DFactorCardFace from "components/DFactorCardFace"
import MainCardFace from "components/MainCardFace"
import NotesCardFace from "components/NotesCardFace"
import PlaceholderCardFace from "components/PlaceholderCardFace"
import TypesCardFace from "components/TypesCardFace"

import TCard from "types/TCard"

import { cards, stages } from "constants/MockData"

import "./style"



interface Props extends RouteComponentProps {
  children?: JSX.Element[] | JSX.Element | string
}



const { kenshi } = cards



export class Colosseum extends React.Component<Props, {}> {

  public displayName: string

  public constructor(props: Props) {
    super(props)

    this.displayName = "Colosseum"
  }



  public render(): JSX.Element {
    let cardFaceArray: JSX.Element[] = [
      <MainCardFace {...kenshi} />,
      ...kenshi.notes.map((noteFace: TCard.NoteFace, index: number): JSX.Element => 
        <NotesCardFace key={index} name={kenshi.name} notes={noteFace} traits={kenshi.traits} />),
      ...kenshi.moves.dFactor.map((dFactor: TCard.DFactor, index: number): JSX.Element => 
        <DFactorCardFace key={index} name={kenshi.name} dFactor={dFactor} />),
      <TypesCardFace {...kenshi} />
    ]
    if (cardFaceArray.length % 2) cardFaceArray.push(<PlaceholderCardFace />)
    const cardArray: JSX.Element[] = chunk(cardFaceArray, 2).map((cardFaces: JSX.Element[], index: number): JSX.Element => (
      <Card key={index}>
        {cardFaces.map((cardFace: JSX.Element, index: number): JSX.Element => React.cloneElement(cardFace, { key: index }))}
      </Card>
    ))

    return (
      <div className="AppInnerWrap">
        <BattleStage stage={stages["kahns_colosseum"]}>
          <div className="Battle">
            <CardSet>
              {cardArray}
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
        </BattleStage>
      </div>
    )
  }
}



export default Colosseum
