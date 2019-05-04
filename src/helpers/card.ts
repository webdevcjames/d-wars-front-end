// import { State } from "components/Card"
import { ROTATE_THRESHOLD } from "constants/CardData"



// Card state that was used for getDraggedState
export interface CardState {
  clickOriginX: number | null
  flip: boolean
  rotation: number
}



// getDraggedState is shelved for now
const getDraggedState = (e: React.MouseEvent, state: CardState): CardState => {
  const {
    clickOriginX: stateClickOriginX,
    flip: stateFlip,
    rotation: stateRotation
  } = state
  let clickOriginX: number | null = stateClickOriginX
  let flip: boolean = stateFlip
  let rotation: number = stateRotation

  if (e.type === "mousedown") {
    clickOriginX = e.screenX
    return { ...state, clickOriginX }
  } if (e.type === "mousemove" && clickOriginX !== null) {
    console.warn(Math.log(Math.abs(e.screenX - clickOriginX)))

    const sign = (e.screenX - clickOriginX) >= 0 ? 1 : -1
    rotation = Math.min(Math.log(Math.abs(e.screenX - clickOriginX)), ROTATE_THRESHOLD) * sign // use some sort of inverse exponent or logarithm here
    return { clickOriginX, flip, rotation }
  } if (e.type === "mouseup") {
    if (clickOriginX && Math.abs(e.screenX - clickOriginX) > ROTATE_THRESHOLD) flip = !flip
    clickOriginX = null
    rotation = 0 // maybe accumulate rotation or flip (based on rotation) instead
    return { clickOriginX, flip, rotation }
  }

    return state;
}