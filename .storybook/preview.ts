import type { Preview } from "@storybook/react-vite";
//@ts-ignore
import "../src/styles/globals.css";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],

  parameters: {
    layout: "centered",

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      config: {},
      option: {
        checks: { "color-contrast": { options: { noSuggest: true } } },
      },
    },
  },
};

export default preview;
