import { Component } from "react"
import { NavBarAndFooterWrapper } from "../components/Common"
import { Col, Container, Row } from "react-bootstrap"
import "./AboutPage.css"
import parse from "html-react-parser"

const data = {
	"images": [
		"/assets/images/tentangkami/gambar penemu.jpg",
		"/assets/images/tentangkami/gambar toko erigo.jpg",
	],
	"introduction": `Erigo adalah brand <i>fashion</i> yang sedang berkembang Indonesia, yang menyediakan desain dengan kualitas tinggi untuk menunjang kebutuhan <i>traveling</i> dan sehari-hari Anda. Erigo menjual mulai dari kaos, celana, sampai jaket. Di Indonesia, Erigo telah menjadi salah satu <i>brand fashion</i> yang terbaik, berkualitas tinggi dan dapat diandalkan. Erigo hadir dalam pagelaran pakaian dunia dengan menggandeng beberapa model dari kalangan artis. Muhammad Sadad merupakan seorang pria yang berada di balik brand Erigo.`,
	"sections": [
		{
			"title": "Profil Founder",
			"body": `Muhammad Sadad merupakan seorang pengusaha yang berasal dari Aceh. Ia lahir pada 15 Juni 1990. Sadad menikah dengan Ocha Yusuf dan dikaruniai seorang anak bernama Yasmin. Pria yang juga berstatus <i>enterpreneur</i> itu mulai aktif berbisnis saat masih menjadi mahasiswa di Universitas Indonesia jurusan Fakultas Ekonomi. Dirinya mulai mendirikan Erigo di tahun 2010 bersama teman-temannya. Dengan bermodalkan Rp 50 juta, ia rela meninggalkan sekolahnya untuk membuka bisnis. Perjalanan Erigo dimulai dengan membuat sebuah brand bernama "Selected and Co".  Kemudian di tahun 2013, <i>brand</i> tersebut pun berganti nama menjadi "Erigo".  Konsep Erigo yang kekinian dengan pangka pasar anak-anak muda di Indonesia, Erigo berhasil mendapat omzet milyaran di tahun 2015.`,
			"image": "/assets/images/tentangkami/gambar penemu.jpg"
		},
		{
			"title": "Usaha didirikannya Erigo",
			"body": `Ternyata kesuksesan Erigo juga tak luput dari sifatnya yang pantang menyerah. Sadad disebut-sebut miliki utang yang tak sedikit, demi membuat <i>brand</i> bajunya itu sebesar sekarang. Saat mulai memperkenalkan Erigo, Muhammad Sadad rela melakukan pemotretan di luar negeri. Ia kemudian meminta bantuan Febrian dan Lala Karmela sebagai <i>brand ambassador</i> Erigo. Demi mendongkrak popularitas Erigo, Sadad rela ikut pameran demi pameran meskipun hasil penjualannya tak seberapa. Pencapaian terbesar Erigo pun terlihat saat mereka berhasil menjadi brand <i>fashion</i>lokal yang maju ke peragaan busana New York Fashion Week (NYFW) 2022 pada 9 September. Sampai saat ini, Sadad dan tim Erigo masih terus berusaha untuk mengembangkan produknya untuk dapat bersaing dalam perdagangan bebas internasional dan menjadi salah satu brand Indonesia di dunia industri mode.`,
			"image": "/assets/images/tentangkami/gambar toko erigo.jpg"
		}
	]
}

export default class AboutPage extends Component<any> {
	componentDidMount() {
		document.title = "Tentang Kami - Erigo"
	}

	render() {
		return <NavBarAndFooterWrapper title="Tentang Kami">
			<Container className="content articleBody">
				<Col lg={8} className="introduction mb-4">
					<p>{parse(data.introduction)}</p>
				</Col>
				{data.sections.map((section, index) =>
					<Row className="mb-4">
						<Col lg={5} key={index}>
							<img src={section.image} alt={section.title}/>
						</Col>
						<Col>
							<h2>{section.title}</h2>
							<p>{parse(section.body)}</p>
						</Col>
					</Row>
				)}
			</Container>
		</NavBarAndFooterWrapper>
	}
}