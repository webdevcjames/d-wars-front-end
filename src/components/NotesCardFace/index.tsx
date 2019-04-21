import * as React from "react"

import CardFace from "../../components/CardFace"

import "./style.styl"



interface Note {
  name: string
  desc: string
}

interface Props {
  name:   string
  notes:  Note[]
  traits: string[]
}



export const NotesCardFace = ({ name, notes, traits }: Props): JSX.Element => (
  <CardFace type="Notes">
    <div className="CardFill" />
    
    <div className="CardDetails">
      <div className="CardName">{name}</div>

      <div className="CardNotesContainer">
        <div className="CardNotesSeparators">
          <div className="CardTraits" />
        </div>

        <div className="CardNotes">
          {notes.map(({ name, desc }, index): JSX.Element => (
            <div key={index} className="CardNote">
              <div className="CardNoteName">{name}</div>
              <div className="CardNoteDesc">{desc}</div>
            </div>
          ))}
        </div>
        
        <div className="CardTraits">{traits.join(" ")}</div>
      </div>
    </div>
  </CardFace>
)



NotesCardFace.displayName = "NotesCardFace"



export default NotesCardFace
