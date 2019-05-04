import * as React from "react"
import { RouteComponentProps } from "react-router"

import chunk from "lodash/chunk"

import Battle from "components/Battle"
import BattleStage from "components/BattleStage"

import Card from "components/Card"
import CardSet from "components/CardSet"
import DFactorCardFace from "components/DFactorCardFace"
import MainCardFace from "components/MainCardFace"
import NotesCardFace from "components/NotesCardFace"
import PlaceholderCardFace from "components/PlaceholderCardFace"
import TypesCardFace from "components/TypesCardFace"

import { cards, stages } from "constants/MockData"

import "./style"



const { kenshi } = cards



export const Colosseum: React.SFC<RouteComponentProps> = (): JSX.Element => {
  React.useEffect((): void => { document.title = "Dimension Wars - Colosseum" })

  let cardFaceArray: JSX.Element[] = [
    <MainCardFace />,
    ...kenshi.notes.map((_, index: number): JSX.Element => 
      <NotesCardFace key={index} index={index} />),
    ...kenshi.moves.dFactor.map((_, index: number): JSX.Element => 
      <DFactorCardFace key={index} index={index} />),
    <TypesCardFace />
  ]
  if (cardFaceArray.length % 2) cardFaceArray.push(<PlaceholderCardFace />)
  const cardArray: JSX.Element[] = chunk(cardFaceArray, 2).map((cardFaces: JSX.Element[], index: number): JSX.Element => (
    <Card key={index}>
      {cardFaces.map((cardFace: JSX.Element, index: number): JSX.Element => React.cloneElement(cardFace, { key: index }))}
    </Card>
  ))

  return (
    <React.Fragment>
      <BattleStage stage={stages["kahns_colosseum"]}>
        <Battle>
          <CardSet card={kenshi}>
            {cardArray}
          </CardSet>
        </Battle>
      </BattleStage>
    </React.Fragment>
  )
}



Colosseum.displayName = "Colosseum"



export default Colosseum
