import { Component } from "react"
import { NavLink, withRouter } from "react-router-dom"
import { erigoNavData } from "../index"
import "./NavBar.css"
import { Container } from "react-bootstrap"

function ErigoNavItem(it: [string, any]) {
	const [key, value] = it
	return (
		<NavLink exact to={"/" + (key === "home" ? "" : key)} key={key} className="ErigoNavItem" activeClassName="active">
			<div className="ErigoNavItem-container">
				{/*<ReactSVG src={value.icon}/>*/}
				<div className="title">{value.name}</div>
			</div>
		</NavLink>
	)
}

class ErigoNavBar extends Component<any, any> {
	private unlisten: any

	constructor(props: any) {
		super(props)
		this.state = {
			location: props.location.pathname
		}
		this.onHistoryUpdated = this.onHistoryUpdated.bind(this)
	}

	componentDidMount() {
		this.unlisten = this.props.history.listen(this.onHistoryUpdated)
	}

	componentWillUnmount() {
		this.unlisten()
	}

	render() {
		const s = this.state.location
		return <header className="header">
			<Container className="headerInner">
				<img src="/assets/images/logo_erigo.png"/>
				<div className="spacing"/>
				<nav>{Object.entries(erigoNavData).map(ErigoNavItem)}</nav>
			</Container>
		</header>
	}

	onHistoryUpdated(location: any, action: any) {
		this.setState({ location: location.pathname })
	}
}

export const NavBarRouter = withRouter(ErigoNavBar)