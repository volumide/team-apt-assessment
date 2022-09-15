import { Col, Container, Row, Image } from "react-bootstrap";
import lotion from "../assets/imgs/lotions/lotion1.png";
import { motion } from "framer-motion";
import { ReactComponent as Twitter } from "../assets/imgs/socials/twitter.svg";
import { ReactComponent as Facebook } from "../assets/imgs/socials/facebook.svg";
import { ReactComponent as Instagram } from "../assets/imgs/socials/instagram.svg";
import { ReactComponent as Arrow } from "../assets/imgs/socials/arrow.svg";
import { ReactComponent as Send } from "../assets/imgs/socials/send.svg";
const animateList = {
	invisible: { opacity: 0, y: 200, x: -10 },
	visible: {
		opacity: 1,
		y: 0,
		x: 0,
		transition: { duration: 1.4, ease: ["easeOut"] },
	},
};

const animateTiles = {
	invisible: { x: 200, opacity: 0 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1.4, ease: ["easeOut"] },
	},
};
export default function Footer() {
	const imgs = [lotion, lotion, lotion];
	return (
		<>
			<div className="divider"></div>
			<div style={{ background: "#19193b" }} className="mt-5 py-5 position-relative">
				<div className="py-5"></div>
				<Container className="text-white py-5 footer  position-relative">
					<motion.div
						transition={{ staggerChildren: 0.2 }}
						viewport={{ once: true }}
						initial={"invisible"}
						whileInView={"visible"}
					>
						<Row className="tp ">
							{imgs.map((e, i) => (
								<Col md={3} className="py-5">
									<motion.div
										className="img-container "
										style={{ background: i % 2 === 0 && " #c0b2de" }}
										variants={animateTiles}
										// initial={{ x: 100, opacity: 0 }}
										// whileInView={{ x: 0, opacity: 1 }}
										// transition={{ duration: `1.${i * 2}`, ease: ["easeOut"] }}
									>
										<Image src={e} />
									</motion.div>
								</Col>
							))}
							<Col md={3} className="py-5">
								<motion.div
									className="img-container d-flex flex-column align-items-center justify-content-center p-5"
									variants={animateTiles}
								>
									<Instagram fill="#fff" style={{ width: "20px" }} />
									<p className="text-center py-3">Join us and get all the serveice we provide</p>
									<Arrow
										fill="#fff"
										className="rounded-circle p-2"
										style={{ background: "rgb(244,119,79)", width: "30px" }}
									/>
								</motion.div>
							</Col>
						</Row>

						<Row className="py-5 ">
							<Col>
								<motion.div variants={animateList}>
									<h4 className="mb-3" style={{ fontFamily: "'Merriweather', sans-serif" }}>
										Glow .
									</h4>
									<li>Keep up with our new releases beatuy tip and what Emma's has been up to</li>
									<div className="mt-3">
										<Twitter fill="#fff" />
										<Instagram fill="#fff" style={{ width: "25px" }} className="mx-3" />
										<Facebook />
									</div>
								</motion.div>
								{/* <p>Keep up with our new release</p> */}
							</Col>
							<Col className="mb-3">
								<motion.div variants={animateList}>
									<p>Company</p>
									<li>About</li>
									<li>Jobs</li>
									<li>Branding</li>
									<li>Newsroom</li>
								</motion.div>
							</Col>
							<Col className="mb-3">
								<motion.div variants={animateList}>
									<p>Resources</p>
									<li>College</li>
									<li>Support</li>
									<li>Safety</li>
									<li>StreamKit</li>
								</motion.div>
							</Col>
							<Col className="mb-3">
								<motion.div variants={animateList}>
									<p>Terms & Condition</p>
									<li>Policy</li>
									<li>Faq</li>
									<li>Return & Delivery </li>
									<li>Tracking</li>
								</motion.div>
							</Col>
							<Col className="mb-3">
								<motion.div variants={animateList}>
									<p>Subscribe</p>
									<li>Get 10% off your first order</li>
									<div
										className="d-flex border border-0  overflow-hidden rounded-pill my-3 justify-content-between align-items-center"
										style={{ background: "#262752" }}
									>
										<input
											type="email"
											placeholder="Email"
											className="p-3 w-full text-white border border-0 bg-transparent"
										/>
										<Send
											fill="#fff"
											style={{
												width: "40px",
												height: "100%",
												padding: "8px",
												background: "#f4683b",
											}}
											className=" border rounded-circle"
										/>
									</div>
								</motion.div>
							</Col>
						</Row>
						<div className="py-5"></div>
						<motion.div variants={animateList}>
							<li className="border-top block mx-auto pt-4" style={{ width: "30%" }}>
								<p className="text-center mx-auto p-0">
									Copyright c 2022 Victor | Allrights reserved
								</p>
							</li>
						</motion.div>
					</motion.div>
				</Container>
			</div>
		</>
	);
}
