import React from "react"
import PropTypes from "prop-types"

import CardFace from "../../components/CardFace"



export const MainCardFace = ({ art, name, stats, moves }) => (
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

          {moves.map(({ names, values }, index) => (
            <div key={index} className="CardMove">
              <div className="CardMoveName" dangerouslySetInnerHTML={{ __html: names.map(name => `<span>${name}</span>`).join(" / ") }} />
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



MainCardFace.propTypes = {
  art:      PropTypes.string,
  name:     PropTypes.string,
  stats:    PropTypes.object,
  moves:    PropTypes.array,
}



export default MainCardFace



