"use client";

import { Footer } from "@/components/Footer";
import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaPhone,
	FaWhatsapp,
	FaYoutube,
} from "react-icons/fa";

export default function Contato() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-[#d9d6d1] to-[#c0bdb8] text-foreground">
			<section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
				<div className="text-center">
					<p className="font-text text-xs sm:text-sm uppercase tracking-[0.35em] text-muted-foreground">
						Vamos conversar
					</p>
					<h1 className="mt-3 sm:mt-4 font-title text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-primary-foreground">
						Fale com o H
					</h1>
					<p className="mx-auto mt-4 sm:mt-6 max-w-3xl font-text text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-muted-foreground">
						Seu novo projeto está a um clique de distância. Fale comigo no
						WhatsApp e descubra como podemos realizá-lo.
					</p>
				</div>

				<div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 lg:grid-cols-2">
					<div className="rounded-[20px] sm:rounded-[28px] border border-border bg-card/80 p-6 sm:p-8 shadow-sm backdrop-blur-md">
						<div className="mb-6">
							<p className="font-text text-xs sm:text-sm uppercase tracking-[0.35em] text-muted-foreground">
								Dados de Contato
							</p>
							<h2 className="mt-3 sm:mt-4 font-title text-xl sm:text-2xl font-semibold text-foreground">
								Entre em contato
							</h2>
						</div>

						<div className="space-y-4 sm:space-y-6">
							<a
								href="tel:+5551991917097"
								className="flex items-center gap-3 sm:gap-4 rounded-lg border border-border bg-background/50 p-3 sm:p-4 transition-all hover:bg-background"
							>
								<FaPhone
									size={20}
									className="text-primary flex-shrink-0 sm:size-6"
								/>
								<div className="flex flex-col min-w-0">
									<span className="font-text text-xs uppercase tracking-wider text-muted-foreground">
										Telefone
									</span>
									<span className="font-text font-semibold text-foreground text-sm sm:text-base truncate">
										(51) 99191-7097
									</span>
								</div>
							</a>

							<a
								href="https://api.whatsapp.com/send/?phone=5551991917097"
								className="flex items-center gap-3 sm:gap-4 rounded-lg border border-border bg-background/50 p-3 sm:p-4 transition-all hover:bg-background"
							>
								<FaWhatsapp
									size={20}
									className="text-primary flex-shrink-0 sm:size-6"
								/>
								<div className="flex flex-col min-w-0">
									<span className="font-text text-xs uppercase tracking-wider text-muted-foreground">
										WhatsApp
									</span>
									<span className="font-text font-semibold text-foreground text-sm sm:text-base truncate">
										(51) 99191-7097
									</span>
								</div>
							</a>

							<a
								href="mailto:henrique@studioahga.arq.br"
								className="flex items-center gap-3 sm:gap-4 rounded-lg border border-border bg-background/50 p-3 sm:p-4 transition-all hover:bg-background"
							>
								<FaEnvelope
									size={20}
									className="text-primary flex-shrink-0 sm:size-6"
								/>
								<div className="flex flex-col min-w-0">
									<span className="font-text text-xs uppercase tracking-wider text-muted-foreground">
										Email
									</span>
									<span className="font-text font-semibold text-foreground text-sm sm:text-base truncate">
										henrique@studioahga.arq.br
									</span>
								</div>
							</a>
						</div>

						<div className="mt-6 sm:mt-8 border-t border-border pt-6 sm:pt-8">
							<p className="font-text text-xs sm:text-sm uppercase tracking-[0.35em] text-muted-foreground mb-4 sm:mb-6">
								Redes Sociais
							</p>
							<div className="flex gap-3 sm:gap-4">
								<a
									href="https://www.instagram.com/studioahga/"
									className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg border border-border bg-background/50 transition-all hover:bg-primary hover:text-primary-foreground flex-shrink-0"
									aria-label="Instagram"
								>
									<FaInstagram size={16} className="sm:size-5" />
								</a>
								<a
									href="https://www.youtube.com/@canaldoahga"
									className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg border border-border bg-background/50 transition-all hover:bg-primary hover:text-primary-foreground flex-shrink-0"
									aria-label="YouTube"
								>
									<FaYoutube size={16} className="sm:size-5" />
								</a>
								<a
									href="https://www.facebook.com/studioahga/"
									className="flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-lg border border-border bg-background/50 transition-all hover:bg-primary hover:text-primary-foreground flex-shrink-0"
									aria-label="Facebook"
								>
									<FaFacebook size={16} className="sm:size-5" />
								</a>
							</div>
						</div>
					</div>

					<div className="rounded-[20px] sm:rounded-[28px] border border-border bg-gradient-to-br from-primary/20 to-secondary/20 p-6 sm:p-8 shadow-sm backdrop-blur-md flex flex-col justify-center">
						<div className="mb-6 sm:mb-8">
							<p className="font-text text-xs sm:text-sm uppercase tracking-[0.35em] text-muted-foreground">
								Próximo Passo
							</p>
							<h2 className="mt-3 sm:mt-4 font-title text-xl sm:text-2xl font-semibold text-foreground">
								Pronto para transformar seu projeto?
							</h2>
						</div>

						<p className="font-text text-sm sm:text-base leading-7 sm:leading-8 text-muted-foreground mb-6 sm:mb-8">
							Aqui desenvolvemos um projeto único, feito sob medida para você.
							Vamos juntos criar ambientes que refletem sua identidade e
							valores.
						</p>

						<a
							href="https://api.whatsapp.com/send/?phone=5551991917097"
							className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-primary px-6 sm:px-8 py-3 sm:py-4 font-text font-semibold text-primary-foreground transition-all hover:bg-primary/90 text-sm sm:text-base"
						>
							<FaWhatsapp size={16} className="sm:size-5" />
							<span>Comece seu projeto agora</span>
						</a>

						<p className="mt-4 sm:mt-6 font-text text-xs text-muted-foreground">
							Clique no botão acima ou use qualquer um dos dados de contato para
							iniciar a conversa.
						</p>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
