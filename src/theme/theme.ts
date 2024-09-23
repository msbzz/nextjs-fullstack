import { typography } from "../theme/defaults/typography";

const theme = {
  typography:{
    //fontFamily:"Roboto Condensed,Open Sans,sans-serif",
    ...typography,

    }
};

export type Theme = typeof theme;
export type ThemeTypographyVariants = keyof typeof typography.variants;
export default theme;
