import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { ReactComponent as Cart } from "../assets/imgs/cart.svg";
const animateLink = {
	invisible: { y: -50 },
	visible: {
		y: 0,
		transition: {
			duration: 0.7,
		},
	},
};

export default function NavBar() {
	const [show, setShow] = useState(false);
	const showMenu = () => {
		setTimeout(() => {
			setShow(true);
		}, 1300);
	};
	useEffect(() => {
		showMenu();
	}, []);
	return (
		<>
			<Navbar bg="transparent" className="text-black" style={{ background: "#fbf9f5" }}>
				<Container>
					<Navbar.Brand href="#" className="logo">
						<motion.p
							initial={{ x: "35vw", y: "45vh" }}
							viewport={{ once: true }}
							animate={{ x: 0, y: 0 }}
							transition={{ duration: 1.2 }}
						>
							Glow .
						</motion.p>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					{show && (
						<motion.div
							initial={"invisible"}
							viewport={{ once: true }}
							whileInView={"visible"}
							transition={{ staggerChildren: 0.2 }}
						>
							<Nav className="ms-auto bg-transparent font-bold">
								<Nav.Link href="#" className="mx-4 text-color-gray">
									<motion.p variants={animateLink}>Product</motion.p>
								</Nav.Link>
								<Nav.Link href="#" className="mx-4 text-color-gray">
									<motion.p variants={animateLink}>About</motion.p>
								</Nav.Link>
								<Nav.Link href="#" className="mx-4 text-color-gray">
									<motion.p variants={animateLink}>Blog</motion.p>
								</Nav.Link>
								<Nav.Link href="#" className="mx-4 text-color-gray">
									<motion.p variants={animateLink}>Reviews</motion.p>
								</Nav.Link>
								<motion.div
									className="rounded-circle ms-5  p-2 d-flex justify-content-center align-items-center relative"
									style={{ width: "30px", height: "30px", background: "#F4693B" }}
									variants={animateLink}
								>
									<Cart fill="#fff" width="100%" />
								</motion.div>
							</Nav>
						</motion.div>
					)}
				</Container>
			</Navbar>
		</>
		// </div>
	);
}
