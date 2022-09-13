import { Col, Container, Row, Image } from "react-bootstrap";
import thumbnail from "../assets/imgs/thumbnail.jpg";
import lotion from "../assets/imgs/lotions/lotion-group.png";

export default function Info() {
	return (
		<Container className="text-color-gray position-relative">
			<Row className="">
				<Col md={3} className="position-relative">
					<div className="attachment">
						<Image src={lotion} width="100%" />
					</div>
				</Col>
				<Col
					className=" p-5 d-flex flex-column align-items-center justify-content-center info relative"
					style={{ background: "#f1e2ee" }}
				>
					<div className="correction-tail"> </div>
					<div className="side-img">
						<div className="overflow-hidden">
							<Image src={thumbnail} width="100%" />
						</div>
					</div>
					<div className="p-4 mt-5 px-5 brand-info" style={{ width: "50%" }}>
						<p className="family">
							The self care brand that's setting a new <span>standards clean</span> product
						</p>
						<div className="mt-5 mb-5">
							<Row>
								<Col>
									<p className="header">What are products made?</p>
									<p>Many brnad , especially in period csre carried product that take centuries</p>
								</Col>
								<Col>
									<p className="header">What are products made?</p>
									<p>Many brnad , especially in period csre carried product that take centuries</p>
								</Col>
							</Row>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
