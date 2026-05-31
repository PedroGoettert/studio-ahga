import { Footer } from "@/components/Footer";

const steps = [
	{
		title: "Conversa inicial",
		description:
			"Um bate-papo para entender suas necessidades, estilo de vida e o escopo do projeto antes de definir a proposta.",
	},
	{
		title: "Proposta",
		description:
			"Apresentamos uma proposta personalizada com escopo, prazos e investimentos claros para você avaliar com segurança.",
	},
	{
		title: "Encontro de alinhamento",
		description:
			"Coletamos todas as suas sugestões e transformamos o briefing em um plano de projeto consistente.",
	},
	{
		title: "Imersão",
		description:
			"Entramos no processo criativo para desenvolver soluções funcionais e com identidade para o seu ambiente.",
	},
	{
		title: "Apresentação do projeto",
		description:
			"Mostramos o conceito do projeto com todo o cuidado, para que você analise cada detalhe com clareza.",
	},
	{
		title: "Revisão",
		description:
			"Ajustamos o projeto de acordo com suas observações, garantindo que o resultado final esteja alinhado ao seu desejo.",
	},
	{
		title: "Detalhamento",
		description:
			"Elaboramos os projetos executivos com todas as informações técnicas necessárias para a obra seguir perfeitamente.",
	},
	{
		title: "Orçamento",
		description:
			"Oferecemos transparência sobre o investimento, com cotações detalhadas e alternativas eficientes para seu orçamento.",
	},
	{
		title: "Obra",
		description:
			"Acompanhamos a obra e as equipes para que a execução aconteça com qualidade, dentro do planejado.",
	},
	{
		title: "Entrega",
		description:
			"Celebramos a conclusão do projeto e entregamos seu ambiente pronto para viver e transformar o cotidiano.",
	},
];

export default function Metodos() {
	return (
		<main className="min-h-screen bg-backgroud-home bg-cover bg-no-repeat bg-center backgroud__home text-foreground bg-backgroud-home backgroud__home">
			<section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
				<div className="text-center">
					<p className="font-text text-sm uppercase tracking-[0.35em] text-muted-foreground">
						Nosso método
					</p>
					<h1 className="mt-4 font-title text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
						Como trabalhamos no Studio Ahga
					</h1>
					<p className="mx-auto mt-6 max-w-3xl font-text text-base leading-8 text-muted-foreground sm:text-lg">
						Do primeiro contato até a entrega, cada etapa é planejada para garantir transparência,
						funcionalidade e resultado com identidade.
					</p>
				</div>

				<div className="mt-16 grid gap-6 md:grid-cols-2">
					{steps.map((step, index) => (
						<article
							key={step.title}
							className="rounded-[28px] border border-border bg-card/80 p-8 shadow-sm backdrop-blur-md"
						>
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
								<span className="font-text text-lg font-bold">{index + 1}</span>
							</div>
							<h2 className="font-title text-xl font-semibold text-foreground">
								{step.title}
							</h2>
							<p className="mt-3 font-text text-sm leading-7 text-muted-foreground">
								{step.description}
							</p>
						</article>
					))}
				</div>

				<div className="mt-20 rounded-[32px] border border-border bg-secondary/80 p-10">
					<div className="max-w-3xl">
						<p className="font-text text-sm uppercase tracking-[0.3em] text-muted-foreground">
							Diferenciais
						</p>
						<h2 className="mt-4 font-title text-3xl font-semibold text-foreground sm:text-4xl">
							Transparência e cuidado em cada fase
						</h2>
						<ul className="mt-8 grid gap-4 sm:grid-cols-2">
							<li className="rounded-3xl border border-border bg-background/80 p-6">
								<h3 className="font-text font-semibold text-lg text-foreground">Comunicação clara</h3>
								<p className="mt-3 font-text text-sm leading-7 text-muted-foreground">
									Você acompanha cada avanço com informações objetivas e decisões alinhadas ao seu projeto.
								</p>
							</li>
							<li className="rounded-3xl border border-border bg-background/80 p-6">
								<h3 className="font-text font-semibold text-lg text-foreground">Projeto sob medida</h3>
								<p className="mt-3 font-text text-sm leading-7 text-muted-foreground">
									Cada solução é pensada para o uso real do ambiente e a personalidade do cliente.
								</p>
							</li>
							<li className="rounded-3xl border border-border bg-background/80 p-6">
								<h3 className="font-text font-semibold text-lg text-foreground">Detalhamento técnico</h3>
								<p className="mt-3 font-text text-sm leading-7 text-muted-foreground">
									Garantimos que a execução seja fiel ao projeto com documentação precisa e profissional.
								</p>
							</li>
							<li className="rounded-3xl border border-border bg-background/80 p-6">
								<h3 className="font-text font-semibold text-lg text-foreground">Entrega com alegria</h3>
								<p className="mt-3 font-text text-sm leading-7 text-muted-foreground">
									Valorizamos o momento da entrega como a conclusão de um processo colaborativo e confiável.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
