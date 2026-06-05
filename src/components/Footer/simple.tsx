"use client";

export function SimpleFooter() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray text-white py-4">
			<div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
				<p className="font-text text-sm text-gray-300">
					© {currentYear} Studio Ahga. Todos direitos reservados.
				</p>
			</div>
		</footer>
	);
}
