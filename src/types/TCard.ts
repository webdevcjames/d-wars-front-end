export namespace TCard {
  export type Type = undefined
                   | "Notes"
                   | "DFactor"
                   | "Types"
                   | "Placeholder"

  export type Class = "Melee"
                    | "Projectionist"
                    | "SupportMelee"
                    | "SupportProjectionist"
                    | "Powerhouse"

  export type MoveType = "Challenge"
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

  export type DFactorType = "Attack"
                          | "Support"

  export type Resistance  = MoveType

  

  export type Name = string
  
  export type Art = string

  export interface Stats {
    class: Class
    health: string
  }
  
  export interface Move {
    names:  string[]
    values: string[]
  }
  // NOTE: Might make Move(s) an object, with base, rage, final and dFactor keys, and make each of them an array
  // See below namespace
  
  export interface Note {
    name: string
    desc: string
  }
  
  export type Trait = string

  export interface DFactor {
    title: string
    type:  DFactorType
    desc:  string
  }
  
  export interface Card {
    name:        Name
    art:         Art
    stats:       Stats
    moves:       Move[]
    notes:       Note[]
    traits:      Trait[]
    dFactors:    DFactor[]
    moveTypes:   MoveType[][]
    resistances: Resistance[]
  }
}



export default TCard



/**
 *  Thoughts for Move type
 *  
 *  export interface StandardMove {
 *    name:  string
 *    value: string
 *    type?: MoveType | MoveType[]
 *  }
 *
 *  export interface DFactor {
 *    title:        string
 *    dFactorType:  DFactorType
 *    desc:         string
 *    type?:        MoveType | MoveType[]
 *  }
 *  
 *  export interface Moves {
 *    base:    StandardMove | StandardMove[]
 *    rage:    StandardMove | StandardMove[]
 *    final:   StandardMove | StandardMove[]
 *    dFactor: DFactor | DFactor[]
 *  }
 **/

