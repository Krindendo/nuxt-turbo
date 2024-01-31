import { defineNuxtModule, addComponentsDir } from "nuxt/kit";
import { join } from "path";

export interface UiVueOptions {
  prefix: string;
}

export default defineNuxtModule<UiVueOptions>({
  defaults: {
    prefix: "Ui",
  },
  meta: {
    name: "UiVue",
    configKey: "ui",
    version: "0.0.1",
    compatibility: {
      nuxt: "^3.9.0",
      bridge: false,
    },
  },
  async setup({ prefix }) {
    addComponentsDir(
      {
        path: join(__dirname, "components"),
        extensions: [".vue"],
        prefix,
        pathPrefix: false,
      },
      {
        prepend: true,
      }
    );
  },
});

declare module "@nuxt/schema" {
  interface NuxtConfig {
    shadcn?: UiVueOptions;
  }
  interface NuxtOptions {
    shadcn?: UiVueOptions;
  }
}
