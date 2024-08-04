/// <reference types="vitest" />
import { defineConfig, loadEnv } from "vite";
import { configDefaults } from "vitest/config";

export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    base: process.env.VITE_BASE_PATH,
    plugins: [],
    test: {
      globals: true,
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "tests/e2e/*"],
    },
  });
};
