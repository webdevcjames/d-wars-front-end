import React from "react"
import PropTypes from "prop-types"

import CardFace from "../../components/CardFace"



export const NotesCardFace = ({ name, notes, traits }) => (
  <CardFace type="Notes">
    <div className="CardFill" />
    
    <div className="CardDetails">
      <div className="CardName">{name}</div>

      <div className="CardNotesContainer">
        <div className="CardNotesSeparators">
          <div className="CardTraits" />
        </div>

        <div className="CardNotes">
          {notes.map(({ name, desc }, index) => (
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



NotesCardFace.propTypes = {
  name:   PropTypes.string,
  notes:  PropTypes.array,
  traits: PropTypes.array,
}



export default NotesCardFace



