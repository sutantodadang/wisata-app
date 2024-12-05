import { withShurikenUI } from "@shuriken-ui/tailwind";
import colors from "tailwindcss/colors";

export default withShurikenUI({
  content: [],
  theme: {
    extend: {
      colors: {
        // Define the primary color
        primary: colors.violet,
        // Define the support colors
        info: colors.sky,
        success: colors.teal,
        warning: colors.amber,
        danger: colors.rose,
      },
      nui: {},
    },
  },
});
