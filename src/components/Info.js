import { motion } from "framer-motion";
import { Col, Container, Row, Image } from "react-bootstrap";
import thumbnail from "../assets/imgs/thumbnail.jpg";
import lotion from "../assets/imgs/lotions/lotion-group.png";

const animate = {
	invisible: { opacity: 0, scaleY: 2, scaleX: 1.5, originX: "right", originY: "bottom" },
	visible: {
		opacity: 1,
		scaleY: 1,
		scaleX: 1,
		transition: { duration: 1.2 },
	},
};

const imageAnimate = {
	invisible: { opacity: 0, y: 100 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 1.2 },
	},
};
const wordAnimate = {
	invisible: { opacity: 0, y: 100 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 1.2 },
	},
};

const animateContainer = {
	invisible: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 1.2, ease: "easeInOut" },
	},
};
export default function Info() {
	return (
		<Container className="text-color-gray position-relative">
			<motion.div
				transition={{ staggerChildren: 0.6 }}
				viewport={{ once: true, amount: 0.4 }}
				initial={"invisible"}
				whileInView={"visible"}
			>
				<Row className="">
					<Col md={3} className="position-relative">
						<motion.div className="attachment" variants={animateContainer}>
							<Image src={lotion} width="100%" />
						</motion.div>
					</Col>
					<Col className=" p-5 d-flex flex-column align-items-center justify-content-center info relative">
						<motion.div className="correction-tail " variants={animate}></motion.div>
						<div className="side-img">
							<motion.div className="overflow-hidden" variants={imageAnimate}>
								<Image src={thumbnail} width="100%" />
							</motion.div>
						</div>
						<motion.div
							className="p-4 mt-5 px-5 brand-info"
							style={{ width: "50%" }}
							variants={wordAnimate}
						>
							<p className="family">
								The self care brand that's setting a new <span>standards clean</span> product
							</p>
							<div className="mt-5 mb-5">
								<Row>
									{[1, 2].map((e, i) => (
										<Col>
											<p className="header">What are products made?</p>
											<p>
												Many brnad , especially in period csre carried product that take centuries
											</p>
										</Col>
									))}
								</Row>
							</div>
						</motion.div>
					</Col>
				</Row>
			</motion.div>
		</Container>
	);
}
