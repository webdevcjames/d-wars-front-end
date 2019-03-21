import React, { Component as Container } from "react"
import PropTypes from "prop-types"

import classNames from "classnames"
import moment from "moment-timezone"
import isEmpty from "lodash/isEmpty"
import range from "lodash/range"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import List from "../../components/List"

import "./style.styl"



const menuItems = [
	{ active: true, items: [{ link: "discussion", text: "Discussion" },
		{ link: "sub2", text: "Subpage #2" },
		{ link: "sub3", text: "Subpage #3" }],
		link: "/", 				  text: "Home" },
	{ link: "colosseum",  text: "Colosseum" },
	{ link: "journal",    text: "Journal" },
	{ link: "players",    text: "Players" },
	{ link: "draft",      text: "Draft" },
	{ link: "bazaar",     text: "Bazaar" },
	{ link: "the den",    text: "The Den" },
	{ link: "stats",      text: "Stats" },
	{ link: "compendium", text: "Compendium" },
	{ link: "archives",   text: "Archives" },
	{ link: "help",       text: "Help" },
]



export class App extends Container {

	constructor(props) {
		super(props)

		this.state = {
			open: null
		}
	}


	render() {
		const { open } = this.state

		return (
			<div className="AppContainer">
				<div className="AppBody">
					<div className="AppMenu">
						<div style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							height: "128px",
							backgroundColor: "#3f3f3f",
						}}>
							<h1
								style={{
									color: 		"#ef8f1f",
									fontSize: "60px",
								}}
								title="This might just have to be an image, because of the border"
							>
								D-<span style={{ letterSpacing: "-14px", margin: "0 0 0 6px" }}>W</span>ars
							</h1>
						</div>

						<div className="NavMenuContainer">
							<ul className="NavMenu">
								{menuItems.map(({ active, items, link, text }, index) => (
									<li key={index} className={classNames("NavMenuItem", { open: link === open })}>
										<a
											href={link}
											className={classNames("NavLink", { active })}
											onClick={e => {
												e.preventDefault()
												console.log(link)
												if (link === open || isEmpty(items)) {
													this.setState({ open: null })
												} else this.setState({ open: link })
											}}
										>
											{text}
										</a>

										{items && (
											<ul className="SubNavMenu">
												{items.map(({ link, text }, index) => (
													<li key={index} className="NavMenuItem">
														<a
															href={link}
															className="NavLink"
															onClick={e => {
																e.preventDefault()
																console.log(link)
																if (link === open || isEmpty(items)) {
																	this.setState({ open: null })
																} else this.setState({ open: link })
															}}
														>
															{text}
														</a>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>

							<a href="/" className="NavButton">
								Logout
							</a>
						</div>

					</div>



					<div className="AppContent">
						<Header>
							<div style={{ padding: "0 8px" }}>
								Korill Venn
							</div>
							<img src="images/avatar.png" style={{ padding: "0 8px" }}/>
						</Header>

						<div className="AppInnerWrap">
							<h1 className="heading">
								Dimension <span style={{ letterSpacing: "-14px", margin: "0 0 0 8px" }}>W</span>ars
							</h1>

							<div className="FeatureWrap">
								<img className="Feature" src="images/kahns-colosseum-cropped.jpg" />
								<div className="FeatureGradient" />
							</div>

							<div className="HomeButtons">
								<div className="NavButtonWrap">
									<a href="/" className="NavButton">
										Discussion
									</a>
								</div>
								<div className="NavButtonWrap">
									<a href="/" className="NavButton">
										Subpage #2
									</a>
								</div>
								<div className="NavButtonWrap">
									<a href="/" className="NavButton">
										Subpage #3
									</a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
}



App.displayName = "App"



App.propTypes = {}



export default App
