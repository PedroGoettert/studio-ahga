"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

import logo from "../../assets/logo.jpeg";

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const pathName = usePathname();

	useEffect(() => {
		setIsOpen(false);
	}, [pathName]);

	function toggleMenu() {
		setIsOpen((prev) => !prev);
	}

	return (
		<header className="absolute right-1/2 translate-x-1/2 pt-4 sm:pt-8 z-50 px-4 sm:px-0 w-full sm:w-auto">
			<nav className="relative bg-gray px-4 sm:px-6 py-2 rounded-[15px] flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
				{/* Logo */}
				<button type="button" className="h-6 sm:h-8 flex-shrink-0">
					<Image
						src={logo}
						alt="logo"
						className="h-auto min-w-6 sm:min-w-8 max-h-6 sm:max-h-8 w-auto"
					/>
				</button>

				{/* Botão hamburguer (visível no mobile) */}
				<button
					type="button"
					className="md:hidden text-white text-lg sm:text-2xl ml-auto flex-shrink-0"
					onClick={toggleMenu}
				>
					{isOpen ? <FiX /> : <FiMenu />}
				</button>

				{/* Menu - mobile e desktop */}
				<ul
					className={`${
						isOpen ? "flex" : "hidden"
					} absolute top-full left-0 right-0 sm:static mt-2 sm:mt-0 flex-col gap-2 sm:gap-4 bg-gray p-4 sm:p-0 rounded-lg sm:rounded-none w-full sm:w-auto md:flex md:flex-row md:gap-4 md:bg-transparent font-text text-base sm:text-xl lowercase text-white`}
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
