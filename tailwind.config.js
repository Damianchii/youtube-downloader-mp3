/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			fontWeight: {
				extralight: "200",
				medium: "500",
				bold: "700",
			},
		},
	},
	plugins: [],
}
