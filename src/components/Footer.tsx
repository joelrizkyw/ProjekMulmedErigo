import "./Footer.css"
import { Col, Container, Row } from "react-bootstrap"

export default function Footer() {
	return <footer className="footer">
		<Container className="footerInner">
			<Row className="justify-content-between">
				<Col sm={2} className="footerSection">
					<img className="erigoLogo" src="/assets/images/logo_erigo.png" alt="Logo Erigo"/>
				</Col>
				<Col sm={4} className="footerSection">
					<h2>Media Sosial</h2>
					<div>
						<a href="#">
							<img src="/assets/images/footer/Facebook.png"/>
						</a>
						<a href="#">
							<img src="/assets/images/footer/Twitter.png"/>
						</a>
						<a href="#">
							<img src="/assets/images/footer/Youtube.png"/>
						</a>
						<a href="#">
							<img src="/assets/images/footer/Instagram.png"/>
						</a>
						<a href="#">
							<img src="/assets/images/footer/Shopee.jpg"/>
						</a>
					</div>
				</Col>
				<Col sm={6} className="footerSection">
					<h2>Kunjungi Kami</h2>
					<p>Erigo Store Head Office<br/>Jalan Legok Raya, Erigo Fulfilment Center, Legok, Banten 15820, ID</p>
				</Col>
			</Row>
			<div className="copyright">Copyright © 2022, Erigo</div>
		</Container>
	</footer>
}