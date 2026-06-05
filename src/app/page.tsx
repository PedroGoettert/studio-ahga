import Image from "next/image";
import { SimpleFooter } from "@/components/Footer/simple";
import backgroud_center from "../assets/backgroud-center.png";

export default function Home() {
	return (
		<main className="h-screen bg-backgroud-home bg-cover bg-no-repeat bg-center backgroud__home text-foreground flex flex-col">
			<section className="flex-1 flex items-center justify-center px-6 lg:px-8">
				<Image
					src={backgroud_center}
					alt="Studio Ahga"
					className="max-w-96 w-full h-auto object-cover"
				/>
			</section>
			<SimpleFooter />
		</main>
	);
}
