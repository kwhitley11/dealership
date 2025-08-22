import js from "@eslint/js";
import react from "eslint-plugin-react";
import globals from "globals";

export default [
  // Ignore folders we don't want ESLint to scan
  {
    ignores: [
      "node_modules/**",
      "server/frontend/build/**",
      "server/frontend/dist/**"
    ],
  },

  js.configs.recommended,

  {
    files: ["server/frontend/src/**/*.{js,jsx}"], // Only lint your source files
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: { react },
    rules: {
      "react/react-in-jsx-scope": "off",          // React 17+ JSX transform
      "react/jsx-uses-react": "warn",             // Recognize JSX as used
      "react/jsx-uses-vars": "warn",              // Recognize JSX components as used
      "no-unused-vars": [
        "warn",
        { varsIgnorePattern: "React|App|BrowserRouter" }
      ],
    },
    settings: {
      react: { version: "detect" },
    },
  },
];
