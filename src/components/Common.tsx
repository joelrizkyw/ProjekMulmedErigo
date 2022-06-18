import { NavBarRouter } from "./NavBar"
import Footer from "./Footer"

function BigHeader(props: { title: string }) {
	return <div className="bigHeader">
		<h1 className="container">{props.title}</h1>
	</div>
}

export function NavBarAndFooterWrapper(props: any) {
	return <div className="Page">
		<NavBarRouter/>
		{props.title && <BigHeader title={props.title}/>}
		{props.children}
		<Footer/>
	</div>
}