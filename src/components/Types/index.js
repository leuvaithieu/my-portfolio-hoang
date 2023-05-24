const ThemeColorSelected = require("~/components/Contants").ThemeColorSelected;
const ThemeMode = require("~/components/Contants").ThemeMode;

/**
 * @typedef {Object} ThemeColorItem
 * @property {string} color
 */

/**
 * @typedef {Object} ThemeConfigType
 * @property {ThemeMode} themeMode
 * @property {boolean} [isDarkMode]
 * @property {ThemeColorItem[]} [primaryColors]
 * @property {ThemeColorItem[]} [secondaryColors]
 * @property {ThemeColorItem[]} [successColors]
 * @property {string} [ThemeColorSelected.primarySelected]
 * @property {string} [ThemeColorSelected.secondarySelected]
 * @property {string} [ThemeColorSelected.successSelected]
 */

/**
 * @typedef {Object} ThemeContextType
 * @property {ThemeConfigType} [theme]
 * @property {() => void} [toggleTheme]
 * @property {(color: string, type: string) => void} [updateColor]
 */

/**
 * @type {ThemeConfigType}
 */
const ThemeColorItem = {
  color: ""
};

/**
 * @type {ThemeConfigType}
 */
const ThemeConfigType = {
  themeMode: ThemeMode,
  isDarkMode: undefined,
  primaryColors: undefined,
  secondaryColors: undefined,
  successColors: undefined,
  [ThemeColorSelected.primarySelected]: undefined,
  [ThemeColorSelected.secondarySelected]: undefined,
  [ThemeColorSelected.successSelected]: undefined
};

/**
 * @type {ThemeContextType}
 */
const ThemeContextType = {
  theme: undefined,
  toggleTheme: undefined,
  updateColor: undefined
};

module.exports = {
  ThemeConfigType,
  ThemeContextType,
  ThemeColorItem
};
