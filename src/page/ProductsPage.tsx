import { Component } from "react"
import { NavBarAndFooterWrapper } from "../components/Common"
import { Col, Container, Row } from "react-bootstrap"
import "./ProductsPage.css"
import parse from "html-react-parser"

const products = {
	"atasan": {
		"title": "Atasan",
		"featured": {
			"title": "Erigo Sweatshirt Malvi Navy",
			"body": `Sweatshirt Erigo saat ini merupakan salah satu lini pakaian terbaik dan berkualitas tinggi di antara Local Brand Indonesia. Dengan model <i>loose-fit</i> berlengan panjang tanpa tudung. Label cetak yang keren dan dengan warnanya yang bagus, <i>sweatshirt</i> ini akan membuat tampilanmu lebih menarik.

Untuk Model Pria: Tinggi 185-186 cm, Berat 75 kg, Menggunakan Ukuran XL
Untuk Model Wanita: Tinggi 168-170 cm, Berat 55 kg, Menggunakan Ukuran M

Bahan: Fleece`,
			"thumbnail": "/assets/images/produk/produk atasan (sweater).jpg",
			"link": "https://www.tokopedia.com/erigo/outerwear-unisex-erigo-sweatshirt-malvi-navy-s"
		},
		"types": {
			"kaos": {
				"title": "Kaos",
				"image": "/assets/images/produk/jenis atasan_1.png",
			},
			"kemeja": {
				"title": "Kemeja",
				"image": "/assets/images/produk/jenis atasan_2.png",
			},
			"polo": {
				"title": "Polo",
				"image": "/assets/images/produk/jenis atasan_3.png",
			},
			"sweatshirt": {
				"title": "Sweatshirt",
				"image": "/assets/images/produk/jenis atasan_4.png",
			}
		}
	},
	"bawahan": {
		"title": "Bawahan",
		"featured": {
			"title": "Erigo Chino Pants Caprio Brown",
			"body": `Chino Pants Erigo saat ini merupakan salah satu lini pakaian terbaik dan berkualitas tinggi di antara <i>Local Brand</i> Indonesia. Selain serba guna karena modis, celana ini juga merupakan <i>must-have item</i> bagi para pria. Erigo Chino Pants di design dengan warna indah dengan kain pilihan yang membuatmu nyaman sepanjang hari. Memiliki <i>live-button</i>, resleting, belt loop, dan 4 saku simpel pada bagian pinggul.

Untuk Model Pria: Tinggi 185-186 cm, Berat 75 kg, Menggunakan Ukuran XL
Untuk Model Wanita: Tinggi 168-170 cm, Berat 55 kg, Menggunakan Ukuran M

Bahan: Katun
Model Produk: Stretch Skinny Fit`,
			"thumbnail": "/assets/images/produk/produk bawahan.jpg",
			"link": "https://www.tokopedia.com/erigo/celana-unisex-erigo-chino-pants-caprio-katun-brown-38"
		},
		"types": {
			"jeans": {
				"title": "Jeans",
				"image": "/assets/images/produk/jenis bawahan_1.jpg",
			},
			"chino": {
				"title": "Chino",
				"image": "/assets/images/produk/jenis bawahan_2.jpg",
			},
			"jogger": {
				"title": "Jogger",
				"image": "/assets/images/produk/jenis bawahan_3.jpg",
			},
			"celana-pendek": {
				"title": "Celana Pendek",
				"image": "/assets/images/produk/jenis bawahan_4.jpg",
			}
		}
	},
	"jaket": {
		"title": "Jaket",
		"featured": {
			"title": "Erigo Coach Jacket Fujinkai Black",
			"body": `Coach Jacket Erigo saat ini merupakan salah satu lini pakaian terbaik dan berkualitas tinggi di antara <i>Local Brand</i> Indonesia. Jaket berkerah dengan kancing jepret, saku fungsional, dan karet pada ujung lengan. Coach Jacket Erigo memiliki <i>printed design</i> yang unik pada bagian lengan dan punggung, dengan warna memukau siap menjadikanmu penuh semangat!

Untuk Model Pria: Tinggi 185-186 cm, Berat 75 kg, Menggunakan Ukuran XL
Untuk Model Wanita: Tinggi 168-170 cm, Berat 55 kg, Menggunakan Ukuran M

Bahan: Soft Parasut
`,
			"thumbnail": "/assets/images/produk/produk atasan (jaket).jpg",
			"link": "https://shopee.co.id/Erigo-Coach-Jacket-Fujinkai-Black-i.30203584.7161471636"
		},
		"types": {
			"hoodie": {
				"title": "Hoodie",
				"image": "/assets/images/produk/jenis jaket_1.jpg",
			},
			"bomber": {
				"title": "Bomber",
				"image": "/assets/images/produk/jenis jaket_2.jpg",
			},
			"varsity": {
				"title": "Varsity",
				"image": "/assets/images/produk/jenis jaket_3.jpg",
			},
			"sukajan": {
				"title": "Sukajan",
				"image": "/assets/images/produk/jenis jaket_4.jpg",
			}
		}
	},
	"aksesoris": {
		"title": "Aksesoris",
		"featured": {
			"title": "Erigo Waist Bag Ren Camo",
			"body": `Sling Bag Erigo saat ini merupakan salah satu lini pakaian terbaik dan berkualitas tinggi di antara <i>Local Brand</i> Indonesia. Kantung utamanya dilengkapi dengan resleting. Dilengkapi dengan <i>extra pocket</i> yang juga memiliki resleting. Sling Bag Nion Erigo memiliki warna cerah dan strap yang bisa diatur sehingga kamu dapat tetap nyaman menggunakannya saat hangout bersama teman.

Dimensi (PxLxT): 30x15x4 cm`,
			"thumbnail": "/assets/images/produk/produk aksesoris (tas).jpg",
			"link": "https://shopee.co.id/Erigo-Waist-Bag-Ren-Camo-i.30203584.7361028567"
		},
		"types": {
			"waist-bag": {
				"title": "Waist Bag",
				"image": "/assets/images/produk/jenis aksesoris_4.jpg",
			},
			"sling-bag": {
				"title": "Sling Bag",
				"image": "/assets/images/produk/jenis aksesoris_3.jpg",
			},
			"tote-bag": {
				"title": "Tote Bag",
				"image": "/assets/images/produk/jenis aksesoris_1.jpg",
			},
			"kaos-kaki": {
				"title": "Kaos Kaki",
				"image": "/assets/images/produk/jenis aksesoris_2.jpg",
			}
		}
	}
}

function MarketplaceButton({ link }: any) {
	let marketplaceClassName = ""
	let marketplaceName = null
	if (link.includes("tokopedia.com")) {
		marketplaceClassName = "tokopedia"
		marketplaceName = "Tokopedia"
	} else if (link.includes("shopee.co.id")) {
		marketplaceClassName = "shopee"
		marketplaceName = "Shopee"
	}
	return <a href={link} target="_blank" rel="noreferrer" className={"MarketplaceButton " + marketplaceClassName}>
		{marketplaceName ? "Cek di " + marketplaceName : "Cek"}
	</a>
}

export default class ProductsPage extends Component<any> {
	componentDidMount() {
		document.title = "Produk - Erigo"
	}

	render() {
		return <NavBarAndFooterWrapper title="Produk">
			<Container className="content">
				{Object.entries(products).map(([key, type], i) =>
					<div className="mt-4 section-produk" key={key}>
						<h2>{type.title}</h2>
						<Row className={"detail-produk " + (i % 2 ? "flex-row-reverse" : "")} key={key}>
							<Col lg={5} className="gambar-detail-produk">
								<img src={type.featured.thumbnail} alt={"Thumbnail " + type.featured.title}/>
							</Col>
							<Col className="penjelasan-produk">
								<h3>{type.featured.title}</h3>
								<p style={{ whiteSpace: "pre-wrap" }}>{parse(type.featured.body)}</p>
								<MarketplaceButton link={type.featured.link}/>
							</Col>
						</Row>
						<Row className="mt-3 jenis-produk">
							<h3 className="mb-3">Jenis-jenis {type.title}</h3>
							{Object.entries(type.types).map(([key, subtype]) =>
								<div className="col-6 col-sm-3 gambar-produk" key={key}>
									<img className="img-fluid" src={subtype.image} alt={subtype.title}/>
									<p className="nama-produk">{subtype.title}</p>
								</div>
							)}
						</Row>
					</div>
				)}
			</Container>
		</NavBarAndFooterWrapper>
	}
}