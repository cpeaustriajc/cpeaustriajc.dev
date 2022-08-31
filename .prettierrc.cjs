module.exports = {
	arrowParens: "always",
	tabWidth: 4,
	useTabs: true,
	printWidth: 100,
	proseWrap: "always",
	plugins: [require.resolve("prettier-plugin-astro"), require("prettier-plugin-tailwindcss")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
