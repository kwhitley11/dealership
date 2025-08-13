// eslint.config.js
import eslint from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  { ignores: ["node_modules", "dist", "build"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } } // enable JSX
    },
    plugins: { react },
    rules: {
      ...eslint.configs.recommended.rules,
      ...react.configs.recommended.rules
    },
    settings: { "react": { "version": "detect" } }
  }
];


