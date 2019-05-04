import * as React from "react"
import { RouteComponentProps } from "react-router"

import MainHeading from "components/MainHeading"

import "./style"



export const PageNotFound: React.SFC<RouteComponentProps> = (): JSX.Element => (
  <React.Fragment>
    <MainHeading>
      DIMENSION <span style={{ letterSpacing: "-2px", margin: "0 0 0 -16px" }}>W</span>ARS
    </MainHeading>
    <p style={{ marginTop: "96px", textAlign: "center" }}>Uh oh!</p>
    <p style={{ marginTop: "32px", textAlign: "center" }}>
      Mollit et sint duis tempor ea qui laborum ullamco. Commodo eiusmod enim ut cupidatat do eu. Est amet sint cupidatat do ea aliquip amet commodo in proident eu do proident ad. Ea nulla mollit velit fugiat ad eiusmod commodo qui ipsum. Elit aliqua veniam minim ullamco aliqua ullamco deserunt esse. Aute ipsum anim cupidatat quis aliqua consequat aliqua ullamco in eu tempor elit sunt. Pariatur deserunt ut quis deserunt irure est deserunt cillum anim duis est officia enim.
    </p>
  </React.Fragment>
)



PageNotFound.displayName = "PageNotFound"



export default PageNotFound
