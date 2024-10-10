import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {},
			fontFamily: {
				title: ["var(--font-aisling)"],
				text: ["var(--font-century-gothic)"],
				text_bold: ["var(--font-century-gothic-bold)"],
			},
			backgroundColor: {
				gray: "var(--color-gray)",
			},
		},
	},
	plugins: [],
};
export default config;
