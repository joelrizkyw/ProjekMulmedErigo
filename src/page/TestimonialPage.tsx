import { Component } from "react"
import { NavBarAndFooterWrapper } from "../components/Common"
import { Container, Row } from "react-bootstrap"
import Card from "../components/Card"

const data = [
	{
		"image": "/assets/images/testimoni/orang_1.jpg",
		"title": "Zakaria Putra",
		"body": "Kemarin dikasih oleh-oleh sama sepupu, isinya chino pantsnya Erigo. Katanya disuruh pakai pas perkumpulan keluarga. Ternyata celananya nyaman banget, modelnya juga bagus dan tipe aku banget. Wah kayaknya bakal minta beliin lagi nih. Erigo store adain tour ke Semarang lagi dong!"
	},
	{
		"image": "/assets/images/testimoni/orang_2.jpg",
		"title": "Widya Mawar",
		"body": "Aku selalu fav sama produknya erigo, apalagi produk shirtnya yang keren-keren banget. Shirtnya banyak banget jenisnya, dan desainnya itu simple and casual. Semoga Erigo store ngadain tour ke daerah ku lagi!"
	},
	{
		"image": "/assets/images/testimoni/orang_3.jpg",
		"title": "Lutfian Harunjaya",
		"body": "Waktu itu lagi jalan-jalan ke Bandung, kebetulan saat itu Erigo lagi ngadain tour disana. Langsung cus beli Hoodienya, dan langsung saat itu juga aku pakai buat ketemu teman-teman disana. Hoodienya kece abiss, bahanya lembut dan gampang menyerap keringat. Desainnya gausah ditanya. Buat hoodie aku selalu pilih warna kesukaanku, Sava Navy"
	},
	{
		"image": "/assets/images/testimoni/orang_4.jpg",
		"title": "Michelle Lee",
		"body": "Kualitas produk Erigo memang paling top! Selain kualitasnya yang bagus, dari segi harga juga terjangkau banget, dan banyak pilihan barangnya juga. Udah lumayan sering aku beli barang dari brand Erigo sampai brand ini aku rekomendasiin ke teman dan keluarga. Kayaknya cocok juga nih buat hadiah natalan"
	}
]

export default class TestimonialPage extends Component<any> {
	componentDidMount() {
		document.title = "Testimoni - Erigo"
	}

	render() {
		return <NavBarAndFooterWrapper title="Testimoni">
			<Container className="content">
				<h2 className="sectionTitle">Apa yang pengguna produk kami katakan?</h2>
				<Row className="justify-content-center mb-4 g-0">
					{data.map((it, i) => <Card data={it} key={i} imageWidth={128} imageHeight={128} imageRounded/>)}
				</Row>
			</Container>
		</NavBarAndFooterWrapper>
	}
}