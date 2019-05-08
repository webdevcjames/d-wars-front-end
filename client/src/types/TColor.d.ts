declare namespace TColor {
  interface GradientStop {
    position: string
    color:    string
  }

  interface Gradient {
    angle: number
    stops: GradientStop[]
  }
}



export default TColor
