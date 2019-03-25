import React, { Component as Container } from "react"
import PropTypes from "prop-types"
import { Route, Switch } from "react-router-dom"
import isEmpty from "lodash/isEmpty"
import moment from "moment-timezone"
import range from "lodash/range"

import Header from "../../components/Header"
import NavLink from "../../components/NavLink"
import NavMenu from "../../components/NavMenu"
import NavMenuItem from "../../components/NavMenuItem"

import Dashboard from "../Dashboard"
import Colosseum from "../Colosseum"

import "./style.styl"



const menuItems = [
	{ items: [{ link: "/discussion", text: "Discussion" },
		{ link: "/sub2", text: "Subpage #2" },
		{ link: "/sub3", text: "Subpage #3" }],
		link: "/", 				   text: "Home" },
	{ link: "/colosseum",  text: "Colosseum" },
	{ link: "/journal",    text: "Journal" },
	{ link: "/players",    text: "Players" },
	{ link: "/draft",      text: "Draft" },
	{ link: "/bazaar",     text: "Bazaar" },
	{ link: "/the den",    text: "The Den" },
	{ link: "/stats",      text: "Stats" },
	{ link: "/compendium", text: "Compendium" },
	{ link: "/archives",   text: "Archives" },
	{ link: "/help",       text: "Help" },
]



export class App extends Container {

	constructor(props) {
		super(props)

		this.state = {
			open: null
		}
	}



	openMenu(items, link, navigate) {
		const { open } = this.state

		if (link === open || isEmpty(items))
			navigate()
		if (link === open && !isEmpty(items)) {
			this.setState({ open: null })
		} else if (link !== open && !isEmpty(items)) {
			this.setState({ open: link })
		}
	}



	render() {
		const { open } = this.state

		return (
			<div className="AppContainer">
				<div className="AppBody">
					<div className="AppMenuContainer">
						<div className="AppMenuHeader">
							<h1>
								D-
								<span style={{ letterSpacing: "-20px", margin: "0 0 0 6px" }}>W</span>
								<span style={{ margin: "0 6px 0 0" }}>a</span>
								<span style={{ margin: "0 10px 0 0" }}>r</span>
								s</h1>
						</div>

						<div className="AppMenu">
							<NavMenu>
								{menuItems.map(({ items, link, text }, index) => (
									<NavMenuItem key={index} isOpen={link === open}>
										<NavLink onClick={navigate => this.openMenu(items, link, navigate)} to={link}>
											{text}
										</NavLink>

										{items && (
											<NavMenu sub>
												{items.map(({ items, link, text }, index) => (
													<NavMenuItem key={index}>
														<NavLink onClick={navigate => this.openMenu(items, link, navigate)} to={link}>
															{text}
														</NavLink>
													</NavMenuItem>
												))}
											</NavMenu>
										)}
									</NavMenuItem>
								))}
							</NavMenu>

							<NavLink onClick={() => console.log("Logging out...")}>
								Logout
							</NavLink>
						</div>
					</div>

					<div className="AppContent">
						<Header>
							<div className="Username">Korill Venn</div>
							<img src="images/avatar.png" className="Avatar"/>
						</Header>

						<Switch>
							<Route exact path="/" render={props => <Dashboard {...props} />} />
							<Route path="/colosseum" render={props => <Colosseum {...props} />} />

							<Route render={props => (
								<div className="AppInnerWrap">
									<h1 className="heading" title="This might just have to be an image, because of the border">
										DIMENSION <span style={{ letterSpacing: "-4px", margin: "0 0 0 4px" }}>W</span>ARS
									</h1>
									<p style={{ marginTop: "96px" }}>Uh oh!</p>
								</div>
							)} />
						</Switch>
					</div>
				</div>
			</div>
		)
	}
}



App.displayName = "App"



App.propTypes = {}



export default App
