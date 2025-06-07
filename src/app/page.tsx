import { Navigation } from "@/components/Navigation";
import Image from "next/image";
import backgroud_center from "../assets/backgroud-center.png";
export default function Home() {
	return (
		<main className="min-h-screen bg-backgroud-home bg-cover bg-no-repeat bg-center backgroud__home">
			<Image
				src={backgroud_center}
				alt="Studio Ahga"
				className="max-w-96 absolute bottom-[50%] translate-y-[50%] right-[50%] translate-x-[50%] object-cover"
			/>
		</main>
	);
}
