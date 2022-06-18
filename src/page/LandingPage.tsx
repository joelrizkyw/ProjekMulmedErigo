import { Component } from "react"
import { NavBarAndFooterWrapper } from "../components/Common"
import { Carousel, Col, Container, Row } from "react-bootstrap"
import "./LandingPage.css"
import Card from "../components/Card"

const data = {
	"carousel": [
		{
			"image": "/assets/images/beranda/slideshow_1.jpg"
		},
		{
			"image": "/assets/images/beranda/slideshow_2.jpg"
		},
		{
			"image": "/assets/images/beranda/slideshow_3.jpg"
		},
		{
			"image": "/assets/images/beranda/slideshow_4.jpg"
		}
	],
	"benefits": [
		{
			"title": "Harga yang terjangkau",
			"body": "Semua produk yang kami jual memiliki harga yang cocok terutama untuk kalangan muda",
			"image": "/assets/images/beranda/Logo Harga Yang Terjangkau.png"
		},
		{
			"title": "Bahan yang berkualitas",
			"body": "Semua produk yang ditawarkan Erigo menggunakan bahan yang nyaman digunakan dan tidak mudah rusak",
			"image": "/assets/images/beranda/Logo Bahan Yang Berkualitas.png"
		},
		{
			"title": "Variasi produk yang banyak",
			"body": "Erigo menawarkan berbagai macam produk mulai dari atasan, bawahan hingga aksesoris untuk setiap kalangan",
			"image": "/assets/images/beranda/Logo Variasi Produk Yang Banyak.png"
		},
	]
}

export default class LandingPage extends Component<any> {
	componentDidMount() {
		document.title = "Erigo"
	}

	render() {
		return <NavBarAndFooterWrapper>
			<Container fluid className="carousel-contain py-5">
				<Container>
					<Carousel>
						{data.carousel.map((it, i) =>
							<Carousel.Item><img className="illustration w-100" src={it.image} key={i}/></Carousel.Item>
						)}
					</Carousel>
				</Container>
			</Container>
			<Container className="content">
				<h2 className="sectionTitle">Kenapa membeli produk kami?</h2>
				<Row className="justify-content-center mb-4 g-0">
					{data.benefits.map((it, i) => <Card data={it} key={i}/>)}
				</Row>
			</Container>
		</NavBarAndFooterWrapper>
	}
}