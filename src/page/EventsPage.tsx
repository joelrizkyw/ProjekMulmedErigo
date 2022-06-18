import { Component } from "react"
import { NavBarAndFooterWrapper } from "../components/Common"
import { Col, Container, Row } from "react-bootstrap"
import parse from "html-react-parser"
import "./ProductsPage.css"

const data = {
	"bandung-tour": {
		"title": "Erigo Bandung Tour",
		"body": `Erigo Tour merupakan salah satu event offline terbesar di dunia <i>fashion</i> Indonesia yang akan digelar selama beberapa bulan setiap tahunnya. <i>Event</i> ini akan dilaksanakan di kota-kota besar di seluruh Indonesia salah satunya seperti di Bandung. Pada tahun 2019, Erigo pernah mengadakan tour ke Bandung yang dinamakan Erigo Bandung Tour.

Ada 2 #erigotour yang berjalan di Bandung. Yang pertama ada di ground floor Trans Studio Mall, dan yang ke-dua ada di Paris Van Java (PVJ) di resort level berlokasi di depan Caribou Coffee. Selain itu Erigo kini juga hadir di Sogo Indonesia Paris Van Java (PVJ). Lokasinya terletak di Ground Floor sebelah kasir mens wear. Semasa tour di Bandung, Erigo juga menawarkan promo-promo menarik seperti bayar 1 dapat 3, dan bayar 2 dapat 6 produk.`,
		"image": "/assets/images/acara/Erigo_event_1.jpg"
	},
	"pop-up-store": {
		"title": "Pop-up Store Trans Studio Mall Cibubur",
		"body": `Seiring dengan terus meredanya pandemi COVID-19, pada tahun 2022, Erigo sebagai brand <i>fashion</i> lokal dengan penjualan nomor 1 di Indonesia kembali menyelenggarakan Erigo Tour, yaitu program tahunan dimana Erigo membuka pop up store di berbagai kota dengan menawarkan pilihan produk dengan promo-promo menarik, salah satunya adalah Pop-up Store di Trans Studio Mall Cibubur, Depok. Penyelenggaraan Erigo Tour ini tetap mengedepankan protokol kesehatan seperti penyesuaian kapasitas pengunjung, wajib masker, pengecekan suhu, sterilisasi berkala dengan disinfektan di area pop up store, dan sebagainya. Pada Erigo Tour kali ini juga, Erigo meluncurkan koleksi terbarunya untuk kaum muda yang ingin tampil lebih <i>fresh</i> dan sporty. Koleksi ini merepresentasikan <i>Sporty Casual</i> dengan latar industrial, sehingga para kaum muda yang <i>dynamic, energic</i>, and <i>confident</i> akan tetap terlihat minimalis namun tetap eksklusif di setiap suasana.`,
		"image": "/assets/images/acara/Erigo_event_2.jpg"
	},
	"billboard": {
		"title": "Billboard Time Square New York",
		"body": `Erigo pernah muncul di <i>Billboard</i> Time Square, New York. Iklan pada <i>Billboard</i> tersebut menampilkan kampanye Erigo bersama perusahaan e-commerce disertai dengan sejumlah model berpose mengenakan koleksi pakaian Erigo. Di samping itu, Erigo juga menyelipkan pesan #StopAsianHate pada iklan mereka. Tagar tersebut sedang banyak digaungkan dalam beberapa hari terakhir untuk menyuarakan penolakan terhadap rasialisme yang diterima warga keturunan Asia yang tinggal di Amerika Serikat.`,
		"image": "/assets/images/acara/Erigo_event_3.jpg"
	},
	"fashion-week": {
		"title": "Erigo Tampil di New York Fashion Week",
		"body": `Erigo tampil di atas panggung New York Fashion Week Spring/Summer 2022, Rabu (08/09/2021) pagi, waktu New York. Pada kesempatan tersebut, brand yang hadir bersama platform e-commerce Shopee menampilkan koleksi perdana lini Erigo X. Sebanyak 60 <i>look</i> koleksi Erigo X mengusung tema <i>fashion meets function</i> dan menghadirkan palet warna neon, seperti <i>orange tiger, black beauty, lemon chrome, teal blue, raspberry</i>, hingga <i>lime green</i>. Peragaan busana Erigo X turut menggandeng sejumlah selebritas dan <i>influencer</i> Indonesia, seperti Gading Marten, Luna Maya, Enzy Storia, hingga Denny Soemargo.`,
		"image": "/assets/images/acara/Erigo_event_4.jpg"
	}
}

export default class EventsPage extends Component<any> {
	componentDidMount() {
		document.title = "Acara - Erigo"
	}

	render() {
		return <NavBarAndFooterWrapper title="Acara">
			<Container className="content">
				{Object.entries(data).map(([key, type], i) =>
					<div className="mt-4 section-produk" key={key}>
						{/*<h2>{type.title}</h2>*/}
						<Row className={"detail-produk " + (i % 2 ? "flex-row-reverse" : "")} key={key}>
							<Col lg={5} className="gambar-detail-produk">
								<img src={type.image} alt={"Gambar " + type.title}/>
							</Col>
							<Col className="penjelasan-produk">
								<h2>{type.title}</h2>
								<p style={{whiteSpace: "pre-wrap"}}>{parse(type.body)}</p>
							</Col>
						</Row>
					</div>
				)}
			</Container>
		</NavBarAndFooterWrapper>
	}
}