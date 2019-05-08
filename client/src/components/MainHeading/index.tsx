import * as React from "react"

import "./style"



interface Props {
  children?: (JSX.Element | string)[] | JSX.Element[] | JSX.Element | string
  className?: string
}



export const MainHeading: React.SFC<Props> = ({ children, className }): JSX.Element => (
  <h1
    className={`MainHeading${className ? ` ${className}` : ""}`}
    title="This might just have to be an image, because of the border"
  >
    {children}
  </h1>
)



MainHeading.displayName = "MainHeading"



export default MainHeading
