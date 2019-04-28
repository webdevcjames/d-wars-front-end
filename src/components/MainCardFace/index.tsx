import * as React from "react"

import flatten from "lodash/flatten"

import CardFace from "components/CardFace"

import TCard from "types/TCard"

import "./style"



interface Props {
  name:  TCard.Name
  art:   TCard.Art
  stats: TCard.Stats
  moves: TCard.Moves
}



export class MainCardFace extends React.Component<Props, {}> {

  public displayName: string

  
  
  public constructor(props: Props) {
    super(props)

    this.displayName = "MainCardFace"
  }



  public renderMove = (moveName: string): JSX.Element => (
    <span
      className="CardMoveSubName"
      onClick={(e): void => {
        e.stopPropagation()
        alert(`Performing move "${moveName}"...`)
      }}
    >
      {moveName}
    </span>
  )



  public render(): JSX.Element {
    const { art, name, stats, moves } = this.props

    return (
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
                  <div className="CardMoveName">
                    {flatten(move.map(({ name }, index): JSX.Element | JSX.Element[] =>
                      index < move.length - 1
                        ? [ this.renderMove(name), <span>&nbsp;/&nbsp;</span> ]
                        : this.renderMove(name)
                    )).map((move: JSX.Element, index: number): JSX.Element =>
                      React.cloneElement(move, { key: index }))}
                  </div>
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
  }
}



export default MainCardFace
