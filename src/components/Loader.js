import { motion } from "framer-motion";

export default function Loader() {
	return (
		<motion.div
			animate={{
				x: [-20, 20],
				y: [0, 30],
			}}
			transition={{
				x: { repeat: Infinity, duration: 0.5 },
				y: { repeat: Infinity, duration: 0.5 },
			}}
		></motion.div>
	);
}
