import React, { Component as Container } from "react"
import PropTypes from "prop-types"

import CardSet from "../../components/CardSet"
import Card from "../../components/Card"
import MainCardFace from "../../components/MainCardFace"
import NotesCardFace from "../../components/NotesCardFace"
import DFactorCardFace from "../../components/DFactorCardFace"
import NavLink from "../../components/NavLink"

import "./style.styl"



const kenshi = {
  art:   "/images/kenshi.png",
  name:  "Kenshi",
  stats: {
    health: "25"
  },
  moves: [ { names: [ "Tele-Flurry" ], values: [ "1*" ] }, { names: [ "Tele-Push", "Tele-Beatdown" ], values: [ "2" ] }, { names: [ "Soul Blade" ], values: [ "3" ] } ],
  notes: [
    { name: "Blade Absorb",      desc: "lorem something something lorem something something" },
    { name: "Heightened Senses", desc: "lorem something something lorem something something" },
    { name: "Tele-Flurry",       desc: "lorem something something lorem something something" },
    { name: "Tele-Push",         desc: "lorem something something lorem something something" },
  ],
  traits: [ "Revenge" ],
  dFactors: [ {
    title: "Way of the Blade",
    type:  "Attack",
    desc:  "A 4 DMG attack is performed against the chosen opponent"
  }, {
    title: "Demon Summon",
    type:  "Support",
    desc:  "For Kenshi's next 3 moves, Kenshi can perform an additional base attack"
  } ],
  moveTypes: [],
  resistances: []
}



export class Colosseum extends Container {

  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div className="AppInnerWrap">
        <div className="BattleWrap">
          <div className="BattleBackgroundWrap">
            <div className="BattleBackground" style={{ backgroundImage: "url(images/kahns-colosseum-cropped.jpg)" }} />
            <div className="BattleGradient" />
          </div>

          <h1 className="heading" title="This might just have to be an image, because of the border">
            BATTLE
          </h1>

          <div className="Battle">

            <CardSet>
              <Card>
                <MainCardFace {...kenshi} />
                <NotesCardFace {...kenshi} />
              </Card>
              <Card>
                {kenshi.dFactors.map((dFactor, index) => 
                  <DFactorCardFace key={index} name={kenshi.name} dFactor={dFactor} />)}
              </Card>
              <Card>
                {/*
                  <TypesCardFace {...kenshi} />
                  <PlaceholderCardFace />
                */}
                <MainCardFace {...kenshi} />
                <NotesCardFace {...kenshi} />
              </Card>
            </CardSet>

          </div>

          <div className="HomeButtons">
            <div className="NavButtonWrap">
              <NavLink to="/discussion">
                Discussion
              </NavLink>
            </div>
            <div className="NavButtonWrap">
              <NavLink to="/sub2">
                Subpage #2
              </NavLink>
            </div>
            <div className="NavButtonWrap">
              <NavLink to="/sub3">
                Subpage #3
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



Colosseum.displayName = "Colosseum"



Colosseum.propTypes = {}



export default Colosseum
