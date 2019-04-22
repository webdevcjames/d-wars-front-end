import * as React from "react"

import CardFace from "components/CardFace"

import TCard from "types/TCard"

import "./style"

interface Props {
  name:  TCard.Name
  art:   TCard.Art
  stats: TCard.Stats
  moves: TCard.Moves
}



export const MainCardFace = ({ art, name, stats, moves }: Props): JSX.Element => (
  <CardFace>
    <div className="CardArt" style={{ backgroundImage: `url(${art})` }}>
      <div className="CardFill" />
    </div>
    
    <div className="CardDetails">
      <div className="CardName">{name}</div>

      <div className="CardStatsContainer">
        <div className="CardStatsSeparators">
          <div className="CardAttributes" />
          <div className="CardMove" />
          <div className="CardMove" />
          <div className="CardMove" />
        </div>

        <div className="CardStats">
          <div className="CardAttributes">
            <div className="CardClass" />
            <div className="CardAttributeSpacer" />
            <div className="CardHealth">{stats.health}</div>
          </div>

          {Object.values(moves).slice(0, 3).map((move: TCard.StandardMove[], index): JSX.Element => (
            <div key={index} className="CardMove">
              <div
                className="CardMoveName"
                dangerouslySetInnerHTML={{ __html: move.map(({ name }): string => `<span>${name}</span>`).join(" / ") }}
              />
              <div className="CardMoveSpacer" />
              <div className="CardMoveValue">
                {move.filter(({ value }, index): boolean => index === 0 ? true : value !== move[index - 1].value)
                  .map(({ value }): string => value).join(" / ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </CardFace>
)



MainCardFace.displayName = "MainCardFace"



export default MainCardFace
