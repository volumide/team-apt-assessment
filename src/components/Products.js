import { Col, Container, Row, Image, Button } from "react-bootstrap";
import HeroImg from "../assets/imgs/lotions/lotion.png";
import { motion } from "framer-motion";
import { ReactComponent as Arrow } from "../assets/imgs/socials/arrow.svg";

export default function Products() {
	const products = [1, 2, 3, 4, 5];
	return (
		<Container className="py-5">
			<div className="py-5">
				<Row className="py-5">
					<Col md={4} className="my-3 py-3">
						<motion.div
							className="py-5 pe-5"
							initial={{ opacity: 0, y: 200 }}
							viewport={{ once: true, amount: 0.4 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
						>
							<div className=" info">
								<p className="family products">
									Trending on <span> Essentials</span>
								</p>
							</div>
							<p className="text-color-gray my-5">
								Made with nature's best ingredient-our products transparent ingredient. Fear of God
								Essentials.
							</p>
							<div>
								<Button
									className="rounded-pill p-3 px-5 w-full"
									variant="md"
									style={{
										border: "2px solid rgb(244,105,59, 0.8)",
										width: "70%",
										color: "rgb(244,105,59, 0.8)",
										fontWeight: "bold",
									}}
								>
									Browse All Products <Arrow fill="rgb(244,105,59, 0.8)" width="30px" />
								</Button>
							</div>
						</motion.div>
					</Col>
					{products.map((e, i) => (
						<Col md={4} className="my-3 text-center">
							<motion.div
								initial={{ opacity: 0, x: 100 }}
								viewport={{ once: true, amount: 0.4 }}
								whileInView={{ opacity: 1, x: -1 }}
								transition={{ duration: `1.${i}` }}
							>
								<div className="shadow-sm p-5 bg-white">
									<Image fluid={true} src={HeroImg} width="100%" alt="" />
								</div>
								<div className="p-3">
									<p className="text-color-blue fs-4">Caption</p>
									<p className="text-color-gray">$190.45</p>
								</div>
							</motion.div>
						</Col>
					))}
				</Row>
			</div>
		</Container>
	);
}
