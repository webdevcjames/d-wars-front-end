import TCard from "types/TCard"



export const MockData: { cards: { [card: string]: TCard.Card } } = {
  cards: {
    kenshi: {
      name:  "Kenshi",
      art:   "/images/kenshi.png",
      stats: {
        class: "Melee",
        health: "25"
      },
      moves: [
        { names: [ "Tele-Flurry" ], values: [ "1*" ] },
        { names: [ "Tele-Push", "Tele-Beatdown" ], values: [ "2" ] },
        { names: [ "Soul Blade" ], values: [ "3" ] }
      ],
      notes: [
        { name: "Blade Absorb",      desc: "Mollit proident incididunt amet et Lorem nostrud proident mollit adipisicing sint amet adipisicing ut veniam." },
        { name: "Heightened Senses", desc: "Elit esse proident do ut pariatur dolor est consequat pariatur." },
        { name: "Tele-Flurry",       desc: "Sunt consectetur fugiat consequat exercitation excepteur velit cillum ipsum deserunt eiusmod exercitation in." },
        { name: "Tele-Push",         desc: "Sit laboris amet voluptate excepteur consectetur pariatur laborum excepteur pariatur dolore voluptate." },
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
  }
}



export default MockData
