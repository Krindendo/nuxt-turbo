import { defineNuxtModule, addComponentsDir, createResolver } from "nuxt/kit";

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
    const resolver = createResolver(import.meta.url);

    addComponentsDir(
      {
        path: resolver.resolve("components"),
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
