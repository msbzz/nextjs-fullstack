import React from "react";
import  { ThemeTypographyVariants } from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseCompoment } from "@src/theme/BaseCompoment";
import { useTheme } from "@src/theme/ThemeProvider";

interface TextProps {
  variant?:ThemeTypographyVariants
  tag?: "p" | "li" | "h1" | "h2" | string;
  children?: React.ReactNode;
  styleSheet?:StyleSheet
}
export default function Text({
  styleSheet,
  variant,
  ...props
}:TextProps) {
  const theme=useTheme();
  const textVariant =theme.typography.variants[variant];

  return (
    <BaseCompoment styleSheet={{
      fontFamily: theme.typography.fontFamily,
      ...textVariant,
      ...styleSheet
    }} {...props} />
  );
}

Text.defaultProps = { tag: 'p',variant:'body2' };
