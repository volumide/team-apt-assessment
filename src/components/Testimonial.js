import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import logo from "../assets/imgs/logo/logo1.png";
import logo2 from "../assets/imgs/logo/logo2.png";
import skin_care from "../assets/imgs/skin.jpg";
export default function Testimonial() {
	return (
		<Container>
			<Row classNmae="py-5">
				<Col md={10} className=" px-5  py-5 bg-white">
					<div className="py-5 " style={{ width: "80%" }}>
						<blockquote className="mt-5">
							<p className="">
								Whenever you see a successful business, someone once made a courageous decision.
							</p>
						</blockquote>
						<div className="mt-5">
							<h5 className="text-color-blue">Jane Cooper</h5>
							<p className="text-color-gray">Lagos, Nigeria</p>
						</div>
					</div>
				</Col>
				<Col className=" position-relative">
					<div className="faq-circle">
						<div>
							<img src={skin_care} alt=""></img>
						</div>
					</div>
				</Col>
			</Row>
			<Row className="py-5 my-5">
				<div className="d-flex py-5 my-5">
					<div style={{ width: "25%", height: "100px", overflow: "hidden" }}>
						<Image src={logo2} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
					</div>
					<div style={{ width: "25%", height: "100px", overflow: "hidden" }}>
						<Image src={logo} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
					</div>
					<div style={{ width: "25%", height: "100px", overflow: "hidden" }}>
						<Image src={logo2} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
					</div>
					<div style={{ width: "25%", height: "100px", overflow: "hidden" }}>
						<Image src={logo} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
					</div>
				</div>
			</Row>
		</Container>
	);
}
