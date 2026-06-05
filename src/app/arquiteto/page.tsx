import { Footer } from "@/components/Footer";

const interests = [
	"Arquitetura e Design",
	"Pet lover",
	"Fitness enthusiast",
	"Hambúrgueres e pizza",
	"Séries de suspense",
	"Filmes de terror",
	"Música como inspiração",
];

export default function Arquiteto() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-[#d9d6d1] to-[#c0bdb8] text-foreground">
			<section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
				<div className="text-center">
					<p className="font-text text-sm uppercase tracking-[0.35em] text-muted-foreground">
						Conheça
					</p>
					<h1 className="mt-4 font-title text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
						Prazer, H
					</h1>
					<p className="mx-auto mt-6 max-w-3xl font-text text-base leading-8 text-muted-foreground sm:text-lg">
						Henrique é o arquiteto e fundador do studio ahga. Sua paixão por
						combinar estética e funcionalidade norteia cada projeto.
					</p>
				</div>

				<div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
					<div className="rounded-[32px] border border-border bg-card/80 p-8 shadow-sm backdrop-blur-md order-2 lg:order-1">
						<div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-[24px] flex items-center justify-center overflow-hidden">
							<span className="text-muted-foreground">
								[Foto do Henrique]
							</span>
						</div>
					</div>

					<div className="order-1 lg:order-2">
						<div className="rounded-[28px] border border-border bg-card/80 p-8 shadow-sm backdrop-blur-md mb-6">
							<p className="font-text text-sm uppercase tracking-[0.35em] text-muted-foreground">
								Sobre
							</p>
							<h2 className="mt-4 font-title text-2xl font-semibold text-foreground">
								Olá! Eu sou o Henrique
							</h2>
							<p className="mt-6 font-text text-base leading-8 text-muted-foreground">
								Sou arquiteto e fundador do studio ahga. Adoro combinar estética e
								funcionalidade nos meus projetos, criando ambientes que não apenas
								parecem bonitos, mas que funcionam perfeitamente para quem vive neles.
							</p>

							<div className="mt-8 pt-8 border-t border-border">
								<p className="font-text text-sm uppercase tracking-[0.35em] text-muted-foreground mb-4">
									Curiosidades
								</p>
								<ul className="space-y-3 font-text text-base text-muted-foreground">
									<li className="flex items-start gap-3">
										<span className="text-primary mt-1">•</span>
										<span>Sou pai de um adorável pet</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-primary mt-1">•</span>
										<span>
											Sonho em conhecer a Disney em breve
										</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-primary mt-1">•</span>
										<span>Levo uma vida fitness mesmo amando hambúrgueres</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-primary mt-1">•</span>
										<span>Adoro séries de suspense e filmes de terror</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="text-primary mt-1">•</span>
										<span>
											Todos os dias escuto música — me inspiram a ter ótimas
											ideias!
										</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-20 rounded-[32px] border border-border bg-secondary/80 p-10">
					<div className="max-w-3xl">
						<p className="font-text text-sm uppercase tracking-[0.3em] text-muted-foreground">
							Filosofia
						</p>
						<h2 className="mt-4 font-title text-3xl font-semibold text-foreground sm:text-4xl">
							Cada projeto é uma oportunidade única
						</h2>
						<p className="mt-8 font-text text-base leading-8 text-muted-foreground">
							Acredito que cada projeto é uma oportunidade única de transformar
							espaços e realizar sonhos. Com uma abordagem criativa e personalizada,
							dedico-me a entender as necessidades e desejos de meus clientes para
							criar ambientes verdadeiramente únicos e inspiradores.
						</p>
						<p className="mt-6 font-text text-base leading-8 text-muted-foreground">
							Minha essência reside na paixão pela arquitetura e no compromisso com
							a excelência. Cada detalhe é cuidadosamente considerado, desde a
							concepção inicial até a conclusão do projeto, garantindo que cada
							espaço seja funcional, estético e sustentável.
						</p>
					</div>
				</div>

				<div className="mt-20 grid gap-6 md:grid-cols-2">
					<div className="rounded-[28px] border border-border bg-card/80 p-8 shadow-sm backdrop-blur-md">
						<p className="font-text text-sm uppercase tracking-[0.35em] text-muted-foreground">
							Objetivo
						</p>
						<h3 className="mt-4 font-title text-xl font-semibold text-foreground">
							Bem-estar e satisfação
						</h3>
						<p className="mt-4 font-text text-base leading-7 text-muted-foreground">
							Meu objetivo é projetar ambientes que promovam bem-estar,
							produtividade e satisfação, refletindo a identidade e os valores de
							cada cliente.
						</p>
					</div>

					<div className="rounded-[28px] border border-border bg-card/80 p-8 shadow-sm backdrop-blur-md">
						<p className="font-text text-sm uppercase tracking-[0.35em] text-muted-foreground">
							Propósito
						</p>
						<h3 className="mt-4 font-title text-xl font-semibold text-foreground">
							Espaços com identidade
						</h3>
						<p className="mt-4 font-text text-base leading-7 text-muted-foreground">
							Meu propósito é criar espaços que reflitam a identidade e os valores
							de nossos clientes, garantindo que cada ambiente seja uma extensão de
							quem o habita.
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
