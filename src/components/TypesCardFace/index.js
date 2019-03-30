import React from "react"
import PropTypes from "prop-types"

import CardFace from "../../components/CardFace"

import "./style.styl"



export const TypesCardFace = ({ name, moveTypes, resistances }) => {
  let maxMoveTypeColLen = 2
  moveTypes.forEach(moveType => {
    if (moveType.length > maxMoveTypeColLen) maxMoveTypeColLen = moveType.length })
  let paddedMoveTypes = moveTypes.concat(new Array(4 - moveTypes.length).fill([], moveTypes.length, 4))
  paddedMoveTypes = paddedMoveTypes.map(move =>
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
              {paddedMoveTypes.map((move, colIndex) => (
                <div key={colIndex} className="CardMoveTypeCol">
                  {move.map((moveType, rowIndex) =>
                    <div
                      key={`${colIndex}${rowIndex}`}
                      className="CardMoveType"
                      style={moveType && { backgroundImage: `url(${moveType})` }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="CardResistancesHeading">Resistances</div>
            <div className="CardResistances">
              {paddedResistances.map((resistance, index) =>
                <div key={index} className="CardResistanceCol">
                  <div className="CardResistance" style={resistance && { backgroundImage: `url(${resistance})` }} />
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



TypesCardFace.propTypes = {
  name:        PropTypes.string,
  moveTypes:   PropTypes.array,
  resistances: PropTypes.array,
}



export default TypesCardFace
