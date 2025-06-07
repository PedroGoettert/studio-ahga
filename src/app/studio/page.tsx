import Image from "next/image";
import teste from "../../assets/backgroud-center.png";
import { Footer } from "@/components/Footer";

export default function Studio() {
	return (
		<section className="flex h-screen flex-col justify-center">
			<div className="flex flex-1 justify-center">
				{/* <div className="max-w-[500px] max-h-[400px] bg-black">
					<Image src={teste} alt="imagem" className="w-full h-full" />
				</div> */}
				<div className="flex flex-col gap-20 items-center justify-center w-full max-w-[400px] mx-auto text-center">
					<p className="font-text text-xl break-before-column">
						Aqui no studio ahgá Criamos o projeto do seu lar, do seu espaço
						profissional, do seu comércio, do seu condomínio.
					</p>

					<p className="font-text text-xl">
						Seja para novas construções, reformas indispensáveis ou atualizações
						que renovam o ambiente.
					</p>
				</div>
			</div>

			<Footer />
		</section>
	);
}
