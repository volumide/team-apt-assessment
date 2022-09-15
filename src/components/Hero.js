import { motion } from "framer-motion";
import { Button, Row, Container, Col, Image } from "react-bootstrap";
import HeroImg from "../assets/imgs/hero.png";
import { ReactComponent as Arrow } from "../assets/imgs/socials/arrow.svg";
import { ReactComponent as Next } from "../assets/imgs/socials/next.svg";

export default function Hero() {
	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 1.5, duration: 1.6 }}
		>
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
								Shop now <Arrow fill="#fff" style={{ width: "20px" }} />
							</Button>
							<span className="ms-5 text-color-blue ">
								<Next style={{ width: "20px" }} className="mx-3" />
								How to use
							</span>
						</div>
					</Col>
					<Col className="">
						<Image fluid={true} src={HeroImg} width="100%" alt="" />
					</Col>
				</Row>
			</Container>
		</motion.div>
	);
}
