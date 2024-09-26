import React from "react";
import  { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseCompoment } from "@src/theme/BaseCompoment";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
  variant?:ThemeTypographyVariants
  tag?: "a" | "p" | "li" | "h1" | "h2" | string;
  children?: React.ReactNode;
  styleSheet?:StyleSheet;
  ref:any;
}
const Text = React.forwardRef(({
  tag,
  styleSheet,
  variant,
  ...props
}:TextProps,ref)=> {
  const theme=useTheme();
  const textVariant =theme.typography.variants[variant];

  return (
    <BaseCompoment as ={tag} styleSheet={{
      fontFamily: theme.typography.fontFamily,
      ...textVariant,
      ...styleSheet
    }}
    ref={ref}
    {...props} />
  );
})

Text.defaultProps = { tag: 'p',variant:'body2' };

export default Text;
