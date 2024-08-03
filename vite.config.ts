import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    base: process.env.VITE_BASE_PATH,
    plugins: [],
  });
};
