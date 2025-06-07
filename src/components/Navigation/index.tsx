"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Ícones de menu
import { usePathname } from "next/navigation";

import logo from "../../assets/logo.jpeg";

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const pathName = usePathname();

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setIsOpen(false);
	}, [pathName]);

	function toggleMenu() {
		setIsOpen((prev) => !prev);
	}

	return (
		<header className="absolute right-1/2 translate-x-1/2 pt-8 z-50">
			<nav className="relative bg-gray px-6 py-2 rounded-[15px] flex items-center gap-4">
				{/* Logo */}
				<button type="button" className="h-8">
					<Image
						src={logo}
						alt="logo"
						className="h-auto min-w-8 max-h-8 w-auto"
					/>
				</button>

				{/* Botão hamburguer (visível no mobile) */}
				<button
					type="button"
					className="md:hidden text-white text-2xl ml-auto"
					onClick={toggleMenu}
				>
					{isOpen ? <FiX /> : <FiMenu />}
				</button>

				{/* Menu - mobile e desktop */}
				<ul
					className={`${
						isOpen ? "flex" : "hidden"
					} absolute top-full left-0 mt-2 flex-col gap-2 bg-gray p-4 rounded-lg w-full md:static md:flex md:flex-row md:gap-4 md:mt-0 md:bg-transparent md:p-0 md:items-center md:w-auto font-text text-xl lowercase text-white`}
				>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/studio">Studio</Link>
					</li>
					<li>
						<Link href="/metodos">Métodos</Link>
					</li>
					<li>
						<Link href="/projetos">Projetos</Link>
					</li>
					<li>
						<Link href="/arquiteto">Arquiteto</Link>
					</li>
					<li>
						<Link href="/contato">Contato</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
