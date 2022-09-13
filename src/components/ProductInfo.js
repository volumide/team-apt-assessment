import { Col, Container, Row, Image } from "react-bootstrap";
import Glow from "../assets/imgs/glow.png";
export default function ProductInfo() {
	return (
		<Container className="position-relative py-5" style={{ zIndex: "1" }}>
			<Row>
				<Col md={4}>
					<div className=" info">
						<p className="family products">
							We make going all naural <span>Beauty</span>.
						</p>
					</div>
					<p className="text-color-gray my-5">
						Made with nature biggest ingredient - our products transparent ingredient list // allow
						you to know
					</p>
					<div>
						<Row>
							{["7+", "99+", "5M"].map((e, i) => (
								<Col className=" py-5 px-4 price ">
									<div className={`figures-d  rounded-pill ${i === 1 ? "second" : ""}`}>
										<div className="child text-center ">
											<p className="text-color-gray font-semibold">Product Users</p>
											<div className=" info">
												<p className="family products">
													<span>{e}</span>
												</p>
											</div>
										</div>
									</div>
								</Col>
							))}
						</Row>
					</div>
				</Col>
				<Col md={4}></Col>
				<Col md={4} className="info-img">
					<div>
						<Image src={Glow} alt="" />
					</div>
				</Col>
				{/* <div className="p-background" style={{ background: "" }}></div> */}
			</Row>
			<div className="p-background position-absolute"></div>
		</Container>
	);
}
