"use client";

import Link from "next/link";
import {
	FaFacebook,
	FaYoutube,
	FaWhatsapp,
	FaInstagram,
	FaPhone,
	FaEnvelope,
} from "react-icons/fa";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray text-white py-12 lg:py-16">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<div className="grid gap-12 md:grid-cols-3">
					{/* Brand & Description */}
					<div>
						<h3 className="font-title text-lg font-semibold mb-4">Studio Ahga</h3>
						<p className="font-text text-sm leading-7 text-gray-300">
							Transformamos espaços em ambientes únicos que refletem identidade e
							valores. Arquitetura com alma.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-title text-sm font-semibold uppercase tracking-wider mb-4">
							Navegação
						</h4>
						<ul className="space-y-3 font-text text-sm">
							<li>
								<Link
									href="/studio"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Studio
								</Link>
							</li>
							<li>
								<Link
									href="/metodos"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Métodos
								</Link>
							</li>
							<li>
								<Link
									href="/projetos"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Projetos
								</Link>
							</li>
							<li>
								<Link
									href="/arquiteto"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Arquiteto
								</Link>
							</li>
							<li>
								<Link
									href="/contato"
									className="text-gray-300 hover:text-white transition-colors"
								>
									Contato
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="font-title text-sm font-semibold uppercase tracking-wider mb-4">
							Contato
						</h4>
						<div className="space-y-3 font-text text-sm">
							<a
								href="tel:+5551991917097"
								className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
							>
								<FaPhone size={16} className="flex-shrink-0" />
								<span>(51) 99191-7097</span>
							</a>
							<a
								href="https://api.whatsapp.com/send/?phone=5551991917097"
								className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
							>
								<FaWhatsapp size={16} className="flex-shrink-0" />
								<span>WhatsApp</span>
							</a>
							<a
								href="mailto:henrique@studioahga.arq.br"
								className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
							>
								<FaEnvelope size={16} className="flex-shrink-0" />
								<span>henrique@studioahga.arq.br</span>
							</a>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-gray-700 my-8" />

				{/* Bottom Section */}
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
					{/* Copyright */}
					<p className="font-text text-sm text-gray-400">
						© {currentYear} Studio Ahga. Todos direitos reservados.
					</p>

					{/* Social Links */}
					<div className="flex gap-4">
						<a
							href="https://www.instagram.com/studioahga/"
							aria-label="Instagram"
							className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-300 transition-all hover:border-white hover:text-white hover:bg-gray-700"
						>
							<FaInstagram size={18} />
						</a>
						<a
							href="https://www.youtube.com/@canaldoahga"
							aria-label="YouTube"
							className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-300 transition-all hover:border-white hover:text-white hover:bg-gray-700"
						>
							<FaYoutube size={18} />
						</a>
						<a
							href="https://www.facebook.com/studioahga/"
							aria-label="Facebook"
							className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-600 text-gray-300 transition-all hover:border-white hover:text-white hover:bg-gray-700"
						>
							<FaFacebook size={18} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
