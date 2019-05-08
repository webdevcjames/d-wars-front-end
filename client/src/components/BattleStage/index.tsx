import * as React from "react"

import MainHeading from "components/MainHeading"

import TStage from "types/TStage"

import "./style"



interface BattleStageProps {
  children: JSX.Element[] | JSX.Element | string
  stage:    TStage.Stage
}



export const BattleStage: React.SFC<BattleStageProps> = ({ children, stage: { art } }): JSX.Element => (
  <div className="BattleStage">
    <div className="BattleStage__BackgroundWrap">
      <div className="BattleStage__Background" style={{ backgroundImage: `url(${art})` }} />
      <div className="BattleStage__Gradient" />
    </div>

    <MainHeading className="BattleStage__Heading">BATTLE</MainHeading>

    {children}
  </div>
)



BattleStage.displayName = "BattleStage"



export default BattleStage
