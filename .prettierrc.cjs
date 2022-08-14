/** @type {import("@types/prettier").Config} */
module.exports = {
	arrowParens: "always",
	tabWidth: 4,
	useTabs: true,
	printWidth: 100,
	plugins: [require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
