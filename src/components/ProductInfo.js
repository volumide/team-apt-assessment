import { Col, Container, Row, Image } from "react-bootstrap";
import Glow from "../assets/imgs/glow.png";
import { motion } from "framer-motion";

export default function ProductInfo() {
	return (
		// <motion.div
		// 	initial={{ opacity: 0, y: 100 }}
		// 	viewport={{ once: true, amount: 0.4 }}
		// 	whileInView={{ opacity: 1, y: 0 }}
		// 	transition={{ duration: 1 }}
		// >
		<Container className="position-relative py-5" style={{ zIndex: "1" }}>
			<Row>
				<Col md={4}>
					<div className=" info">
						<p className="family products">
							We make going all natural <span>Beauty</span>.
						</p>
					</div>
					<p className="text-color-gray my-5">
						Made with nature biggest ingredient - our products transparent ingredient list allow you
						to know
					</p>
					<div>
						<Row>
							{["7+", "99+", "5M"].map((e, i) => (
								<Col className=" py-5 px-4 price ">
									<motion.div
										initial={{ rotate: 30, scale: 0.2, opacity: 0, y: 100, x: -50 }}
										// viewport={{ once: false, amount: 0.4 }}
										whileInView={{ scale: 1, opacity: 1, y: 0, x: 0 }}
										transition={{ duration: `1.${i}` }}
										className={`figures-d  rounded-pill ${i === 1 ? "second" : ""}`}
									>
										<div className="child text-center ">
											<p className="text-color-gray font-semibold">Product Users</p>
											<div className=" info">
												<p className="family products">
													<span>{e}</span>
												</p>
											</div>
										</div>
									</motion.div>
								</Col>
							))}
						</Row>
					</div>
				</Col>
				<Col md={4}></Col>
				<Col md={4} className="info-img">
					<motion.div
						initial={{ scale: 0.2, opacity: 0 }}
						// viewport={{ once: false, amount: 0.4 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1.3 }}
					>
						<Image src={Glow} alt="" />
					</motion.div>
				</Col>
				{/* <div className="p-background" style={{ background: "" }}></div> */}
			</Row>
			<div className="p-background position-absolute"></div>
		</Container>
		// </motion.div>
	);
}
