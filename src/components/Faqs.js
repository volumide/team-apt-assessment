import { Col, Container, Row } from "react-bootstrap";
import lotion from "../assets/imgs/lotions/lotion.png";
import { motion } from "framer-motion";

export default function Faqs() {
	return (
		<Container className="py-5">
			<Row className="py-5">
				<Col className="py-5">
					<motion.div
						className="faq-vas"
						initial={{ opacity: 0, scale: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.2 }}
					>
						<img src={lotion} alt="" />
					</motion.div>
				</Col>
				<Col className="py-5">
					<motion.div
						initial={{ opacity: 0, y: 200 }}
						viewport={{ once: true, amount: 0.4 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2 }}
					>
						<div className="info mb-5">
							<p className="family products">
								You have <span>question</span> , we have answers
							</p>
						</div>
						<div className="accordion">
							{[1, 2].map((e, i) => (
								<div class="accordion-item rounded-0 mb-2 border-0 bg-transparent">
									<h2
										class="accordion-header bg-transparent border-bottom border-top"
										id="headingOne"
									>
										<button
											class="accordion-button bg-transparent"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target={`#collapseOne${i}`}
											aria-expanded="true"
											aria-controls={`collapseOne${i}`}
										>
											Accordion Item # {e}
										</button>
									</h2>
									<div
										id={`collapseOne${i}`}
										class="accordion-collapse collapse show"
										aria-labelledby="headingOne"
										data-bs-parent="#accordionExample"
									>
										<div class="accordion-body">
											<strong>This is the first item's accordion body.</strong> It is shown by
											default, until the collapse plugin adds the appropriate classes that we use to
											style each element. These classes control the overall appearance, as well as
											the showing and hiding via CSS transitions. You can modify any of this with
											custom CSS or overriding our default variables. It's also worth noting that
											just about any HTML can go within the <code>.accordion-body</code>, though the
											transition does limit overflow.
										</div>
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</Col>
			</Row>
		</Container>
	);
}
