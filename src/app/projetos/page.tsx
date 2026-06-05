import { Footer } from "@/components/Footer";

const projects = [
	{
		title: "Casa Vibe",
		category: "Residencial",
	},
	{
		title: "Casa Sítio",
		category: "Residencial",
	},
	{
		title: "Café Virascer",
		category: "Comercial",
	},
	{
		title: "Casa Gaivota",
		category: "Residencial",
	},
	{
		title: "Studio Mentalizei",
		category: "Comercial",
	},
	{
		title: "Casa Cooperativa",
		category: "Residencial",
	},
	{
		title: "Casa Sol",
		category: "Residencial",
	},
	{
		title: "Casa Gonçalves",
		category: "Residencial",
	},
	{
		title: "Studio Ceramista",
		category: "Comercial",
	},
	{
		title: "Casa 99º",
		category: "Residencial",
	},
];

export default function Projetos() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-[#d9d6d1] to-[#c0bdb8] text-foreground">
			<section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
				<div className="text-center">
					<p className="font-text text-sm uppercase tracking-[0.35em] text-muted-foreground">
						Portfólio
					</p>
					<h1 className="mt-4 font-title text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
						Alguns Projetos
					</h1>
					<p className="mx-auto mt-6 max-w-3xl font-text text-base leading-8 text-muted-foreground sm:text-lg">
						Cada projeto é uma oportunidade única de transformar espaços e realizar
						sonhos. Conheça alguns dos trabalhos que refletem nossa dedicação à
						excelência e criatividade.
					</p>
				</div>

				<div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project) => (
						<article
							key={project.title}
							className="group overflow-hidden rounded-[20px] border border-border bg-card/80 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:bg-card"
						>
							<div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center overflow-hidden relative">
								<div className="absolute inset-0 bg-gradient-to-br from-[#C2860D]/20 to-[#4C4942]/20" />
								<span className="relative text-muted-foreground text-sm">
									[Imagem do projeto]
								</span>
							</div>
							<div className="p-6">
								<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
									{project.category}
								</p>
								<h3 className="mt-3 font-title text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
									{project.title}
								</h3>
								<button
									type="button"
									className="mt-4 text-sm font-text font-semibold text-primary hover:text-primary/80 transition-colors"
								>
									Ver projeto →
								</button>
							</div>
						</article>
					))}
				</div>

				<div className="mt-20 text-center">
					<p className="font-text text-base text-muted-foreground">
						Quer transformar seu espaço?
					</p>
					<p className="mt-2 font-title text-2xl font-semibold text-foreground">
						Entre em contato conosco
					</p>
					<button
						type="button"
						className="mt-6 rounded-full bg-primary px-8 py-3 font-text font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
					>
						Fale com o H
					</button>
				</div>
			</section>

			<Footer />
		</main>
	);
}
