import Image from "next/image";
import { Footer } from "@/components/Footer";
import backgroud_center from "../assets/backgroud-center.png";

export default function Home() {
	return (
		<main className="min-h-screen bg-backgroud-home bg-cover bg-no-repeat bg-center backgroud__home text-foreground">
			<section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24 h-screen flex items-center justify-center">
				<Image
					src={backgroud_center}
					alt="Studio Ahga"
					className="max-w-96 w-full h-auto object-cover"
				/>
			</section>
			<Footer />
		</main>
	);
}
