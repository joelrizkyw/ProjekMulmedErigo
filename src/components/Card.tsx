import "./Card.css"
import { Col } from "react-bootstrap"

export default function Card(props: any) {
	return <Col md={3} className="p-2 d-flex">
		<div className="ErigoCard">
			<img src={props.data.image} width={props.imageWidth || 96} height={props.imageHeight || 96} style={{ borderRadius: props.imageRounded ? "9999px" : "0" }}/>
			<h3>{props.data.title}</h3>
			<p>{props.data.body}</p>
		</div>
	</Col>
}