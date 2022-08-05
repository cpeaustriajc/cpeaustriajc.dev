const defaultTheme = require("tailwindcss/defaultTheme");

const dark = {
	accentPrimary: "#6750A4",
	onAccentPrimary: "#FFFFFF",
	accentPrimaryContainer: "#EADDFF",
	onAccentPrimaryContainer: "#21005D",
	accentSecondary: "#625B71",
	onAccentSecondary: "#FFFFFF",
	accentSecondaryContainer: "#E8DEF8",
	onAccentSecondaryContainer: "#1D192B",
	accentTertiary: "#7D5260",
	onAccentTertiary: "#FFFFFF",
	accentTertiaryContainer: "#FFD8E4",
	onAccentTertiaryContainer: "#31111D",
	error: "#B3261E",
	onError: "#FFFFFF",
	errorContainer: "#F9DEDC",
	onErrorContainer: "#410E0B",
	background: "#FFFBFE",
	onBackground: "#1C1B1F",
	surface: "#FFFBFE",
	onSurface: "#1C1B1F",
	outline: "#79747E",
	surfaceVariant: "#E7E0EC",
	onSurfaceVariant: "#49454F",
};

const light = {
	accentPrimary: "#D0BCFF",
	onAccentPrimary: "#381E72",
	accentPrimaryContainer: " #4F378B",
	onAccentPrimaryContainer: "#EADDFF",
	accentSecondary: "#CCC2DC",
	onAccentSecondary: "#332D41",
	accentSecondaryContainer: "#4A4458",
	onAccentSecondaryContainer: "#E8DEF8",
	accentTertiary: "#EFB8C8",
	onAccentTertiary: "#492532",
	accentTertiaryContainer: "#633B48",
	onAccentTertiaryContainer: "#FFD8E4",
	error: "#F2B8B5",
	onError: "#601410",
	errorContainer: "#8C1D18",
	onErrorContainer: "#F2B8B5",
	background: "#1C1B1F",
	onBackground: "#E6E1E5",
	surface: "#1C1B1F",
	onSurface: "#E6E1E5",
	outline: "#938F99",
	surfaceVariant: "#49454F",
	onSurfaceVariant: "#CAC4D0",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	darkMode: "media",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
