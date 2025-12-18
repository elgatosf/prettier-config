import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	endOfLine: "lf",
	printWidth: 120,
	semi: true,
	singleQuote: false,
	trailingComma: "all",
	useTabs: true,
	importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
	plugins: [
		require.resolve("@trivago/prettier-plugin-sort-imports"),
		require.resolve("prettier-plugin-multiline-arrays"),
	],
	importOrderParserPlugins: [
		"typescript",
		"decoratorAutoAccessors",
		"explicitResourceManagement",
		'["decorators", { "decoratorsBeforeExport": true }]',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
	multilineArraysWrapThreshold: -1,
	overrides: [
		{
			files: "*.jsonc",
			options: {
				trailingComma: "none",
			},
		},
		{
			files: ["*.json", "*.jsonc", "*.md"],
			options: {
				tabWidth: 4,
				useTabs: false,
			},
		},
		{
			files: "*.tsx",
			options: {
				parser: "babel-ts",
			},
		},
		{
			files: ["*.yaml", "*.yml"],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};

export default config;
