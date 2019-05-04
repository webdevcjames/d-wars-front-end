import * as React from "react"

import CardFace from "components/CardFace"
import CardFill from "components/CardFill"

import CardContext from "contexts/CardContext"

import "./style"



interface NotesCardFaceProps {
  children?: JSX.Element[] | JSX.Element | string
  index:     number
}



export const NotesCardFace: React.SFC<NotesCardFaceProps> = ({ index, ...CardFaceProps }): JSX.Element => {
  const { name, notes, traits } = React.useContext(CardContext)
  const noteFace = notes[index]

  return (
    <CardFace {...CardFaceProps} type="Notes">
      <CardFill />
      
      <div className="CardDetails">
        <div className="CardName">{name}</div>
  
        <div className="CardNotesContainer">
          <div className="CardNotesSeparators">
            <div className="CardTraits" />
          </div>
  
          <div className="CardNotes">
            {noteFace.map(({ name, desc }, index): JSX.Element => (
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
}



NotesCardFace.displayName = "NotesCardFace"



export default NotesCardFace
