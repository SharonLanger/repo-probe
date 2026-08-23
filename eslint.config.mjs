import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts", "tests/**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "no-console": "warn",
    },
  },
  {
    files: ["src/index.ts"],
    rules: {
      "no-console": "off",
    },
  },
  {
    ignores: ["dist/", "coverage/", "node_modules/"],
  },
);
