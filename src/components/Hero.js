import { Button, Row, Container, Col, Image } from "react-bootstrap";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
import HeroImg from "../assets/imgs/hero.png";
export default function Hero() {
	return (
		<Container className="text-color-gray">
			<Row>
				<Col className=" py-5  d-flex  flex-column justify-content-center hero">
					<h1 className="">Let your skin Going Out.</h1>
					<p className="py-4">
						We want to bring to the world troug our products that very special feeling joy, healty
						and positive energy
					</p>
					<div>
						<Button
							className="rounded-pill p-3 px-5"
							variant="md"
							style={{ background: "rgb(244,105,59)", color: "white", border: "transparent" }}
						>
							Shop now
						</Button>
						<span className="ms-5 text-color-blue">How to use</span>
					</div>
				</Col>
				<Col className="">
					<Image fluid={true} src={HeroImg} width="100%" alt="" />
				</Col>
			</Row>
		</Container>
	);
}
