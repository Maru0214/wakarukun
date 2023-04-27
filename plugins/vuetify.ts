import { createVuetify } from "vuetify";
import * as appAll from "vuetify/components";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import { defaults } from "@/helpers/defaults";
import { MAIN_THEME, mainDarkTheme, mainTheme } from "@/helpers/themes";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults,
    components: {
      ...appAll,
    },
    display: {
      mobileBreakpoint: "sm",
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: MAIN_THEME,
      themes: {
        mainTheme,
        mainDarkTheme,
      },
      variations: {
        colors: ["primary", "secondary", "accent"],
        lighten: 9,
        darken: 9,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
