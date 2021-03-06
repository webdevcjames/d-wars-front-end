import * as React from "react"

import CardFace from "components/CardFace"
import CardFill from "components/CardFill"

import CardContext from "contexts/CardContext"

import TCard from "types/TCard"

import { getIcon } from "helpers/icons"

import "./style"



interface TypesCardFaceProps {
  children?: JSX.Element[] | JSX.Element | string
}



export const TypesCardFace: React.SFC<TypesCardFaceProps> = ({ ...CardFaceProps }): JSX.Element => {
  const { card: { name, moves, resistances } } = React.useContext(CardContext)

  let maxMoveTypeColLen = 2
  const moveMatrix: ({ type: TCard.MoveType }[])[] = Object.values(moves)
  moveMatrix.forEach((move: { type: TCard.MoveType }[]): void => {
    if (move.length > maxMoveTypeColLen) maxMoveTypeColLen = move.length })
  const paddedMoveTypes: TCard.MoveType[][] = moveMatrix.map((move: { type: TCard.MoveType }[]): TCard.MoveType[] =>
    move.map(({ type }: { type: TCard.MoveType }): TCard.MoveType => type).concat((new Array(maxMoveTypeColLen - move.length)).fill(undefined)))
  const resistancePadding = 4 - (resistances.length % 4)
  const paddedResistances = resistances.concat((new Array(resistancePadding)).fill(undefined))
  
  return (
    <CardFace {...CardFaceProps} type="Types">
      <CardFill />
      
      <div className="CardDetails">
        <div className="CardName">{name}</div>

        <div className="CardTypesContainer">
          <div className="CardTypes">
            <div className="CardMoveTypesHeading">Move Types</div>
            <div className="CardMoveTypes">
              {paddedMoveTypes.map((move, colIndex): JSX.Element => (
                <div key={colIndex} className="CardMoveTypeCol">
                  {move.map((moveType, rowIndex): JSX.Element =>
                    <div
                      key={`${colIndex}${rowIndex}`}
                      className="CardMoveType"
                      title={moveType}
                      style={{ backgroundImage: moveType ? `url(${getIcon(moveType)})` : "" }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="CardResistancesHeading">Resistances</div>
            <div className="CardResistances">
              {paddedResistances.map((resistance, index): JSX.Element =>
                <div key={index} className="CardResistanceCol">
                  <div
                    className="CardResistance"
                    title={resistance}
                    style={{ backgroundImage: resistance ? `url(${getIcon(resistance)})` : "" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </CardFace>
  )
}



TypesCardFace.displayName = "TypesCardFace"



export default TypesCardFace
