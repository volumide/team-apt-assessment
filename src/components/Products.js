import { Col, Container, Row, Image, Button } from "react-bootstrap";
// import HeroImg from "../assets/imgs/hero.png";
import HeroImg from "../assets/imgs/lotions/lotion.png";

export default function Products() {
	const products = [1, 2, 3, 4, 5];
	return (
		<Container className="py-5">
			<div className="py-5">
				<Row className="py-5">
					<Col md={4} className="my-3 py-3">
						<div className="py-5 pe-5">
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
									className="rounded-pill p-4 px-5 w-full"
									variant="md"
									style={{
										border: "2px solid rgb(244,105,59, 0.8)",
										width: "70%",
									}}
								>
									Shop now
								</Button>
							</div>
						</div>
					</Col>
					{products.map(() => (
						<Col md={4} className="my-3 text-center">
							<div className="shadow-sm p-5 bg-white">
								<Image fluid={true} src={HeroImg} width="100%" alt="" />
							</div>
							<div className="p-3">
								<p className="text-color-blue fs-4">Caption</p>
								<p className="text-color-gray">$190.45</p>
							</div>
						</Col>
					))}
				</Row>
			</div>
		</Container>
	);
}
