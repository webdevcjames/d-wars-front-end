import * as React from "react"

import CardFace from "components/CardFace"

import TCard from "types/TCard"

import "./style"



interface Props {
  name:        TCard.Name
  moveTypes:   TCard.MoveType[][]
  resistances: TCard.Resistance[]
}



export const TypesCardFace = ({ name, moveTypes, resistances }: Props): JSX.Element => {
  let maxMoveTypeColLen = 2
  moveTypes.forEach((moveType): void => {
    if (moveType.length > maxMoveTypeColLen) maxMoveTypeColLen = moveType.length })
  let paddedMoveTypes = moveTypes.concat(new Array(4 - moveTypes.length).fill([], moveTypes.length, 4))
  paddedMoveTypes = paddedMoveTypes.map((move): TCard.MoveType[] =>
    move.concat(new Array(maxMoveTypeColLen - move.length).fill(null, move.length, maxMoveTypeColLen)))
  const resistancePadding = 4 - (resistances.length % 4)
  let paddedResistances = resistances.concat(new Array(resistancePadding).fill(null, resistances.length, resistancePadding))

  return (
    <CardFace type="Types">
      <div className="CardFill" />
      
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
                      style={{ backgroundImage: moveType ? `url(${moveType})` : "" }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="CardResistancesHeading">Resistances</div>
            <div className="CardResistances">
              {paddedResistances.map((resistance, index): JSX.Element =>
                <div key={index} className="CardResistanceCol">
                  <div className="CardResistance" style={{ backgroundImage: resistance ? `url(${resistance})` : "" }} />
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
