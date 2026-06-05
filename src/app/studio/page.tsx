import { Footer } from "@/components/Footer";

export default function Studio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-[#d9d6d1] to-[#c0bdb8] text-foreground">
			<section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
				<div className="text-center">
					<p className="font-text text-sm uppercase tracking-[0.35em] text-muted-foreground">
						O Studio
					</p>
					<h1 className="mt-4 font-title text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
						O que fazemos
					</h1>
					<p className="mx-auto mt-6 max-w-3xl font-text text-base leading-8 text-muted-foreground sm:text-lg">
						Criamos projetos únicos que transformam espaços em ambientes que refletem
						a identidade e os valores de nossos clientes.
					</p>
				</div>

				<div className="mt-20 rounded-[32px] border border-border bg-card/80 p-10 backdrop-blur-md">
					<div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
						<div>
							<p className="font-text text-sm uppercase tracking-[0.35em] text-muted-foreground">
								Nosso Escopo
							</p>
							<h2 className="mt-4 font-title text-3xl font-semibold text-foreground">
								Aqui no studio ahgá
							</h2>
							<p className="mt-6 font-text text-base leading-8 text-muted-foreground">
								Criamos o projeto do seu lar, do seu espaço profissional, do seu
								comércio, do seu condomínio.
							</p>
							<p className="mt-4 font-text text-base leading-8 text-muted-foreground">
								Seja para novas construções, reformas indispensáveis ou atualizações
								que renovam o ambiente.
							</p>
						</div>

						<div className="space-y-6">
							<div className="rounded-[24px] border border-border bg-background/80 p-6">
								<h3 className="font-title text-lg font-semibold text-foreground">
									🏠 Residencial
								</h3>
								<p className="mt-3 font-text text-sm leading-7 text-muted-foreground">
									Projetos de casas, apartamentos e condomínios com foco em conforto,
									funcionalidade e estética personalizada.
								</p>
							</div>

							<div className="rounded-[24px] border border-border bg-background/80 p-6">
								<h3 className="font-title text-lg font-semibold text-foreground">
									🏢 Comercial
								</h3>
								<p className="mt-3 font-text text-sm leading-7 text-muted-foreground">
									Espaços comerciais, cafés, estúdios e lojas que refletem a marca
									e atraem clientes.
								</p>
							</div>

							<div className="rounded-[24px] border border-border bg-background/80 p-6">
								<h3 className="font-title text-lg font-semibold text-foreground">
									🔨 Reformas
								</h3>
								<p className="mt-3 font-text text-sm leading-7 text-muted-foreground">
									Renovações que modernizam e revitalizam ambientes existentes com
									novo propósito.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-20 rounded-[32px] border border-border bg-secondary/80 p-10">
					<div className="max-w-3xl">
						<p className="font-text text-sm uppercase tracking-[0.3em] text-muted-foreground">
							Nossa Essência
						</p>
						<h2 className="mt-4 font-title text-3xl font-semibold text-foreground sm:text-4xl">
							Paixão pela arquitetura e compromisso com excelência
						</h2>
						<p className="mt-8 font-text text-base leading-8 text-muted-foreground">
							Cada detalhe é cuidadosamente considerado, desde a concepção inicial
							até a conclusão do projeto, garantindo que cada espaço seja funcional,
							estético e sustentável.
						</p>
						<p className="mt-6 font-text text-base leading-8 text-muted-foreground">
							Nosso objetivo é projetar ambientes que promovam bem-estar,
							produtividade e satisfação, refletindo a identidade e os valores de
							nossos clientes.
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
