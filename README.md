<div align="center">

# @elgato/prettier-config

[Prettier](https://prettier.io/) configuration used by Elgato projects.

[![@elgato/prettier-config npm package](https://img.shields.io/npm/v/%40elgato/prettier-config?logo=npm&logoColor=white)](https://www.npmjs.com/package/@elgato/prettier-config)
[![Join the Marketplace Makers Discord](https://img.shields.io/badge/Marketplace%20Makers-5662f6?labelColor=grey&logo=discord&logoColor=white)](https://discord.gg/GehBUcu627)
[![Elgato homepage](https://img.shields.io/badge/Elgato-3431cf?labelColor=grey&logo=data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RWxnYXRvPC90aXRsZT48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJtMTMuODgxOCA4LjM5NjQuMDI2MS4wMTk2IDkuOTQ5NCA1LjcxNzJjLS40ODg0IDIuNzI5LTEuOTE5NiA1LjIyMjMtNC4wMzg0IDcuMDI1M0ExMS45MjYyIDExLjkyNjIgMCAwIDEgMTIuMDk3IDI0Yy0zLjE5MjUgMC02LjE5MzktMS4yNDc3LTguNDUyNy0zLjUxNDRDMS4zODY4IDE4LjIxODguMTQyNyAxNS4yMDQ0LjE0MjcgMTJjMC0zLjIwNDIgMS4yNDQtNi4yMTg3IDMuNTAxNS04LjQ4NTRDNS45MDE5IDEuMjQ4IDguOTAzMiAwIDEyLjA5NyAwYzIuNDM5NCAwIDQuNzg0Ny43MzMzIDYuNzgzIDIuMTE4NyAxLjk1MjYgMS4zNTQgMy40NDY2IDMuMjM1NyA0LjMyMjcgNS40NDIyLjExMTIuMjgyOS4yMTQ5LjU3MzYuMzA1MS44NjU3bC0yLjEyNTUgMS4yMzU5YTkuNDkyNCA5LjQ5MjQgMCAwIDAtLjI2MTktLjg2OTRjLTEuMzU0LTMuODMwMy00Ljk4MTMtNi40MDQ4LTkuMDIzNy02LjQwNDhDNi44MTcxIDIuMzg4MyAyLjUyMiA2LjcwMDUgMi41MjIgMTJjMCA1LjI5OTUgNC4yOTUgOS42MTE1IDkuNTc0OCA5LjYxMTUgMi4wNTIgMCA0LjAwODQtLjY0NDIgNS42NTk2LTEuODY0NyAxLjYxNzItMS4xOTU1IDIuODAzNi0yLjgzMzcgMy40MzA5LTQuNzM2NGwuMDA2NS0uMDQxOUw5LjU5MDYgOC4zMDQ4djcuMjI1Nmw0LjAwMDQtMi4zMTM4IDIuMDYgMS4xODExLTUuOTk2MiAzLjQ2ODgtMi4xMi0xLjIxMjZWNy4xOTQzbDIuMTE3NC0xLjIyNDUgNC4yMzA5IDIuNDI3OS0uMDAxMy0uMDAxMyIvPjwvc3ZnPg==)](https://elgato.com)

</div>

## Usage

1. Install `@elgato/prettier-config`.

```
npm install @elgato/prettier-config --save-dev
```

2. Edit your `package.json` to reference the configuration.

```json
"prettier": "@elgato/prettier-config"
```

## Configuration

### Prettier

| Option                                                                 | Value                                               |
| ---------------------------------------------------------------------- | --------------------------------------------------- |
| [`endOfLine`](https://prettier.io/docs/en/options#end-of-line)         | `lf`                                                |
| [`printWidth`](https://prettier.io/docs/en/options#print-width)        | 120                                                 |
| [`singleQuote`](https://prettier.io/docs/en/options#quotes)            | ❌ Prefer double                                    |
| [`semi`](https://prettier.io/docs/en/options#semicolons)               | ✅ Prefer semicolons                                |
| [`tabWidth`](https://prettier.io/docs/en/options#tab-width)            | 4 (2 for `.yaml`, `.yml`)                           |
| [`useTabs`](https://prettier.io/docs/en/options#tabs)                  | ✅ Except `.json`, `.jsonc`, `.md`, `.yaml`, `.yml` |
| [`trailingComma`](https://prettier.io/docs/en/options#trailing-commas) | All, except `.jsonc`                                |

### Multiline arrays

| Option                                                                                                                      | Value       |
| --------------------------------------------------------------------------------------------------------------------------- | ----------- |
| [`multilineArraysWrapThreshold`](https://github.com/electrovir/prettier-plugin-multiline-arrays?tab=readme-ov-file#options) | -1 (manual) |

### Sort imports

| Option                                                                                                                                | Value                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`importOrder`](https://github.com/trivago/prettier-plugin-sort-imports?tab=readme-ov-file#importorder)                               | Third-party modules first.                                                                                                                                                                     |
| [`importOrderSeparation`](https://github.com/trivago/prettier-plugin-sort-imports?tab=readme-ov-file#importorderseparation)           | ✅                                                                                                                                                                                             |
| [`importOrderSortSpecifiers`](https://github.com/trivago/prettier-plugin-sort-imports?tab=readme-ov-file#importordersortspecifiers)   | ✅                                                                                                                                                                                             |
| [`importOrderCaseInsensitive`](https://github.com/trivago/prettier-plugin-sort-imports?tab=readme-ov-file#importordercaseinsensitive) | ✅                                                                                                                                                                                             |
| [`importOrderParserPlugins`](https://github.com/trivago/prettier-plugin-sort-imports?tab=readme-ov-file#importorderparserplugins)     | TypeScript, [decoratorAutoAccessors](https://github.com/tc39/proposal-grouped-and-auto-accessors), [explicitResourceManagement](https://github.com/tc39/proposal-explicit-resource-management) |

### Overrides

Overriding configuration can be achieved by removing the `prettier` entry from `package.json`, in favour of a [`.prettierrc.js`](https://prettier.io/docs/en/configuration) file. For example, to prefer spaces over tabs:

```js
module.exports = {
    ...require("@elgato/prettier-config"),
    tabWidth: 2,
    useTabs: false,
};
```

## Recognitions

This project wishes to express thanks to those who work on Prettier, and Prettier plugins, with particular thanks to:

-   [prettier](https://github.com/prettier/prettier) and [prettier-vscode](https://github.com/prettier/prettier-vscode), from the prettier team.
-   [prettier-plugin-multiline-arrays](https://github.com/electrovir/prettier-plugin-multiline-arrays), from [electrovir](https://github.com/electrovir).
-   [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports) from the Trivago team.
