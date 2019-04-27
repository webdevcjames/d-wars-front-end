import TCard from "types/TCard"
import TStage from "types/TStage"
import TUser from "types/TUser"

import Avatar from "images/avatar.png"
import Kenshi from "images/kenshi.png"
import KahnsColosseum from "images/kahns-colosseum-cropped.jpg"



export const cards: { [card: string]: TCard.Card } = {
  kenshi: {
    name:  "Kenshi",
    art:   Kenshi,
    stats: {
      class: "Melee",
      health: "25"
    },
    moves: {
      base: [
        { name: "Tele-Flurry", value: "1*", type: "Blunt" }
      ],
      rage: [
        { name: "Tele-Push",     value: "2", type: "Force" },
        { name: "Tele-Beatdown", value: "2", type: "Blunt" }
      ],
      final: [
        { name: "Soul Blade", value: "3", type: "Blade" }
      ],
      dFactor: [ {
        title:       "Way of the Blade",
        dFactorType: "Attack",
        desc:        "A 4 DMG attack is performed against the chosen opponent",
        type:        "Blade"
      }, {
        title:       "Demon Summon",
        dFactorType: "Support",
        desc:        "For Kenshi's next 3 moves, Kenshi can perform an additional base attack",
        type:        "Special"
      } ],
    },
    notes: [ [
      { name: "Blade Absorb",      desc: "Mollit proident incididunt amet et Lorem nostrud proident mollit adipisicing sint amet adipisicing ut veniam." },
      { name: "Heightened Senses", desc: "Elit esse proident do ut pariatur dolor est consequat pariatur." },
      { name: "Tele-Flurry",       desc: "Sunt consectetur fugiat consequat exercitation excepteur velit cillum ipsum deserunt eiusmod exercitation in." },
      { name: "Tele-Push",         desc: "Sit laboris amet voluptate excepteur consectetur pariatur laborum excepteur pariatur dolore voluptate." },
    ] ],
    traits: [ "Revenge" ],
    resistances: [ "Illusion", "Darkness" ]
  }
}



export const stages: { [stage: string]: TStage.Stage } = {
  "kahns_colosseum": {
    name:   "Kahn's Colosseum",
    art:    KahnsColosseum,
    effect: {}
  }
}



export const users: { [user: string]: TUser.User } = {
  "korill_venn": {
    username:    "korill_venn",
    displayName: "Korill Venn",
    avatar:      Avatar
  }
}



export const MockData: { 
  cards:  { [card: string]: TCard.Card }
  users:  { [user: string]: TUser.User }
  stages: { [stage: string]: TStage.Stage }
} = {
  cards,
  users,
  stages
}



export default MockData
