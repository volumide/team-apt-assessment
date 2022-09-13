import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Products from "./components/Products";
import ProductInfo from "./components/ProductInfo";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
import Testimonial from "./components/Testimonial";

function App() {
	return (
		<div className="body">
			<NavBar />
			<Hero />
			<Info />
			<Products />
			<ProductInfo />
			<Faqs />
			<Testimonial />
			<Footer />
		</div>
	);
}

export default App;
