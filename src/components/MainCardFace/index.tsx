import * as React from "react"

import CardFace from "../../components/CardFace"

import "./style.styl"



interface Move {
  names:  string[]
  values: string[]
}

interface Props {
  art:   string
  name:  string
  stats: { health: string }
  moves: Move[]
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

          {moves.map(({ names, values }, index): JSX.Element => (
            <div key={index} className="CardMove">
              <div className="CardMoveName" dangerouslySetInnerHTML={{ __html: names.map((name): string => `<span>${name}</span>`).join(" / ") }} />
              <div className="CardMoveSpacer" />
              <div className="CardMoveValue">{values.join(" / ")}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </CardFace>
)



MainCardFace.displayName = "MainCardFace"



export default MainCardFace
