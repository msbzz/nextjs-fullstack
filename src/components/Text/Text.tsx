import React from "react";
import theme from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseCompoment } from "@src/theme/BaseCompoment";

interface TextProps {
  variant?:'display1'
  tag?: "p" | "li" | "h1" | "h2" | string;
  children?: React.ReactNode;
  styleSheet?:StyleSheet
}
export default function Text({
  styleSheet,
  variant,
  ...props
}:TextProps) {

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
