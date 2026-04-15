const js = require("@eslint/js");
const pluginSecurity = require("eslint-plugin-security");
const pluginNode = require("eslint-plugin-node");
const pluginJest = require("eslint-plugin-jest");

module.exports = [
  js.configs.recommended,
  pluginSecurity.configs.recommended,
  pluginJest.configs["flat/recommended"],
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        process: "readonly",
        __dirname: "readonly",
        console: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        afterEach: "readonly",
        jest: "readonly"
      }
    },
    plugins: {
      security: pluginSecurity,
      node: pluginNode,
      jest: pluginJest
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }]
    }
  }
];
