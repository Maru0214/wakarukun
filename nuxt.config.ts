import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify/dist";
export default defineNuxtConfig({
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins?.push(vuetify());
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  css: ["@/assets/main.scss"],
  runtimeConfig: {
    public: {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
      measurementId: "",
    },
  },
  rootDir: "src/",
  typescript: {
    tsConfig: {
      extends: "@tsconfig/strictest/tsconfig.json",
    },
  },
});
