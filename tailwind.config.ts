import { yellow, gray, white, black } from "./src/constants/colors.constants"
import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				yellow,
				gray,
				white,
				black,
			},
			backgroundImage: {
				line: "linear-gradient(223.06deg, #F9C704 15.57%, #FA2A0E 82.78%)",
				text: "linear-gradient(32deg, #F9C704 27.24%, #F90404 338.76%)",
				circle:
					"radial-gradient(271.01% 271.01% at 79.11% 17.6%, rgba(255, 52, 7, 0) 0%, rgba(250, 14, 14, 0.48) 100%)",
			},
		},
	},
	plugins: [],
}
export default config
