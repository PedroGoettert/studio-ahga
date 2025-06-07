"use client";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";

export function Footer() {
	return (
		<footer className="flex items-center justify-center gap-4 bg-gray-800 bg-gray text-white p-3">
			<div>
				<p>Todos direitos reservados</p>
			</div>

			<div className="">
				<Link href={"#"}>
					<BsFacebook className="text-2xl" color="#000" />
				</Link>
			</div>
		</footer>
	);
}
