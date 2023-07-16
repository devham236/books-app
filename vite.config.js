/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import server from "./mocks/mocks"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    before: () => {
      server.listen()
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setupTests.js"],
  },
})
