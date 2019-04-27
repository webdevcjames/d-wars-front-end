import * as React from "react"

import TStage from "types/TStage"

import "./style"



interface Props {
  children: JSX.Element[] | JSX.Element | string
  stage:    TStage.Stage
}



export class Colosseum extends React.Component<Props, {}> {

  public displayName: string



  public constructor(props: Props) {
    super(props)

    this.displayName = "Colosseum"
  }



  public render(): JSX.Element {
    const { children, stage: { art } } = this.props

    return (
      <div className="BattleWrap">
        <div className="BattleBackgroundWrap">
          <div className="BattleBackground" style={{ backgroundImage: `url(${art})` }} />
          <div className="BattleGradient" />
        </div>

        <h1
          className="heading"
          title="This might just have to be an image, because of the border"
          style={{ paddingTop: "14px" }}
        >
          BATTLE
        </h1>

        {children}
      </div>
    )
  }
}



export default Colosseum
