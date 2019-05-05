import TColor from "types/TColor"

declare namespace TCard {
  type Side = "Left" | "Right"

  type Type =
  undefined
  | "Notes"
  | "DFactor"
  | "Types"
  | "Placeholder"

  type Class =
  "Melee"
  | "Projectionist"
  | "SupportMelee"
  | "SupportProjectionist"
  | "Powerhouse"

  type Trait = 
  "Challenge"
  | "Ego"
  | "Focus"
  | "Hide"
  | "Humor"
  | "Intellect"
  | "Intimidate"
  | "Leader"
  | "Protect"
  | "Revenge"
  | "Sacrifice"
  | "Deadpool"
  
  type MoveType = 
  undefined
  | "Blunt"
  | "Projectile"
  | "Fire"
  | "Blade"
  | "Force"
  | "Energy"
  | "Electric"
  | "Ice"
  | "Water"
  | "Ground"
  | "Illusion"
  | "Poison"
  | "Darkness"
  | "Mind"
  | "Sound"
  | "Holy"
  | "Magic"
  | "Special"

  type DFactorType = "Attack" | "Support"

  type Resistance = MoveType



  type Name = string

  type Art = string

  interface Color {
    text?: string
    bg?:   string
    borderSolid?:    string
    borderGradient?: TColor.Gradient
  }

  interface Stats {
    class:  Class
    health: string
  }

  interface StandardMove {
    name:  string
    value: string
    type?: MoveType | MoveType[]
  }

  interface DFactor {
    title:        string
    dFactorType:  DFactorType
    desc:         string
    type?:        MoveType | MoveType[]
  }

  interface Moves {
    base:    StandardMove[]
    rage:    StandardMove[]
    final:   StandardMove[]
    dFactor: DFactor[]
  }

  interface Note {
    name: string
    desc: string
  }

  type NoteFace = Note[]

  interface Card {
    name:        Name
    art:         Art
    color:       Color
    stats:       Stats
    moves:       Moves
    notes:       NoteFace[]
    traits:      Trait[]
    resistances: Resistance[]
  }
}



export default TCard
