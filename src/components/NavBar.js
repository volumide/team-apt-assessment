import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Image } from "react-bootstrap";
// import Cart from "../assets/imgs/cart.png";
import { ReactComponent as Cart } from "../assets/imgs/cart.svg";
export default function NavBar() {
	return (
		<Navbar bg="transparent" className="py-3 mb-3 text-black" style={{ background: "#fbf9f5;" }}>
			<Container>
				<Navbar.Brand href="#" className="logo">
					<p>Glow .</p>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav className="ms-auto bg-transparent font-bold">
					<Nav.Link href="#" className="mx-4 text-color-gray">
						Product
					</Nav.Link>
					<Nav.Link href="#" className="mx-4 text-color-gray">
						About
					</Nav.Link>
					<Nav.Link href="#" className="mx-4 text-color-gray">
						Blog
					</Nav.Link>
					<Nav.Link href="#" className="mx-4 text-color-gray">
						Reviews
					</Nav.Link>
					<div
						className="rounded-circle ms-5  p-2 d-flex justify-content-center align-items-center relative"
						style={{ width: "30px", height: "30px", background: "#F4693B" }}
					>
						<Cart fill="#fff" width="100%" />
						{/* <Image src={<Cart fill="#fff" />} alt="" style={{ width: "100%" }} /> */}
					</div>
				</Nav>
			</Container>
		</Navbar>
	);
}
