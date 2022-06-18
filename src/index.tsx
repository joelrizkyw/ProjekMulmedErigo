import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import TestimonialPage from "./page/TestimonialPage"
import LandingPage from "./page/LandingPage"
import ProductsPage from "./page/ProductsPage"
import EventsPage from "./page/EventsPage"
import AboutPage from "./page/AboutPage"

export const erigoNavData = {
	"home": {
		name: "Beranda"
	},
	"products": {
		name: "Produk"
	},
	"events": {
		name: "Acara"
	},
	"testimonial": {
		name: "Testimoni"
	},
	"about-us": {
		name: "Tentang Kami"
	}
}

ReactDOM.render(
	<StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={LandingPage}/>
				<Route exact path="/products" component={ProductsPage}/>
				<Route exact path="/events" component={EventsPage}/>
				<Route exact path="/testimonial" component={TestimonialPage}/>
				<Route exact path="/about-us" component={AboutPage}/>
			</Switch>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()