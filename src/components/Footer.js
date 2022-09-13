import { Col, Container, Row, Image } from "react-bootstrap";
import lotion from "../assets/imgs/lotions/lotion1.png";
export default function Footer() {
	const imgs = [lotion, lotion, lotion];
	return (
		<>
			<div className="divider"></div>
			<div style={{ background: "#19193b" }} className="mt-5 py-5 position-relative">
				<div className="py-5"></div>
				<Container className="text-white py-5 footer  position-relative">
					<Row className="tp ">
						{imgs.map((e, i) => (
							<Col md={3} className="py-5">
								<div className="img-container " style={{ background: i % 2 === 0 && " #c0b2de" }}>
									<Image src={e} />
								</div>
							</Col>
						))}
						<Col md={3} className="py-5">
							<div className="img-container ">{/* <Image src={lotion} /> */}</div>
						</Col>
					</Row>
					<Row className="py-5 ">
						<Col>
							<h4 className="mb-3">Glow .</h4>
							<li>Keep up with our new releases beatuy tip and what Emma's has been up to</li>
							{/* <p>Keep up with our new release</p> */}
						</Col>
						<Col className="mb-3">
							<p>Company</p>
							<li>About</li>
							<li>Jobs</li>
							<li>Branding</li>
							<li>Newsroom</li>
						</Col>
						<Col className="mb-3">
							<p>Resources</p>
							<li>College</li>
							<li>Support</li>
							<li>Safety</li>
							<li>StreamKit</li>
						</Col>
						<Col className="mb-3">
							<p>Terms & Condition</p>
							<li>Policy</li>
							<li>Faq</li>
							<li>Return & Delivery </li>
							<li>Tracking</li>
						</Col>
						<Col className="mb-3">
							<p>Subscribe</p>
						</Col>
					</Row>
					<div className="py-5"></div>
				</Container>
			</div>
		</>
	);
}
