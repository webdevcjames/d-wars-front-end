import * as React from "react"

import "./style"



interface FeatureProps {
  image: string
}



export const Feature: React.SFC<FeatureProps> = ({ image }): JSX.Element => (  
  <div className="Feature">
    <div className="Feature__Image" style={{ backgroundImage: `url(${image})` }} />
    <div className="Feature__Gradient" />
  </div>
)



Feature.displayName = "Feature"



export default Feature
