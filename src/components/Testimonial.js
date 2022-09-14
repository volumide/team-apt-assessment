import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import logo from "../assets/imgs/logo/logo1.png";
import logo2 from "../assets/imgs/logo/logo2.png";
import skin_care from "../assets/imgs/skin.jpg";
import { motion } from "framer-motion";

const animateBody = {
	invisible: { scaleX: 0, originX: "right" },
	visible: {
		scaleX: 1,
		transition: { duration: 0.5 },
	},
};
const animateCaption = {
	invisible: { opacity: 0, x: 30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 1.2 },
	},
};

const animateImage = {
	invisible: { scale: 0 },
	visible: {
		scale: 1,
		transition: { duration: 1.2 },
	},
};

export default function Testimonial() {
	return (
		<Container>
			<motion.div
				transition={{ staggerChildren: 1 }}
				viewport={{ once: true, amount: 0.4 }}
				initial={"invisible"}
				whileInView={"visible"}
			>
				<Row classNmae="py-5">
					<Col md={10} className=" ">
						<motion.div className="px-5 py-5 bg-white" variants={animateBody}>
							<motion.div className="py-5 " style={{ width: "80%" }} variants={animateCaption}>
								<blockquote className="mt-5">
									<p className="">
										Whenever you see a successful business, someone once made a courageous decision.
									</p>
								</blockquote>
								<motion.div className="mt-5" variants={animateCaption}>
									<h5 className="text-color-blue">Jane Cooper</h5>
									<p className="text-color-gray">Lagos, Nigeria</p>
								</motion.div>
							</motion.div>
						</motion.div>
					</Col>
					<Col className=" position-relative">
						<motion.div className="faq-circle" variants={animateImage}>
							<div>
								<img src={skin_care} alt=""></img>
							</div>
						</motion.div>
					</Col>
				</Row>
			</motion.div>
			<Row className="py-5 my-5">
				<div className="d-flex pb-5 mb-5">
					{[1, 2, 3, 4, 5].map((e, i) => (
						<motion.div
							style={{ width: "25%", height: "100px", overflow: "hidden" }}
							initial={{ opacity: 0, x: 500 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: `1.${i}` }}
						>
							<Image
								src={e % 2 === 0 ? logo : logo2}
								style={{ width: "100%", height: "100%", objectFit: "contain" }}
							/>
						</motion.div>
					))}
				</div>
			</Row>
		</Container>
	);
}
