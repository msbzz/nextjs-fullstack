//import { StyleSheet } from "@src/theme/StyleSheet";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import React from "react";
import { ColorVariant, colorVariantBy, Variant } from "./colorVariantBy";
import { useTheme } from "@src/theme/ThemeProvider";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
}

export default function Button({
  styleSheet,
  children,
  fullWidth,
  colorVariant,
  variant,
}: ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: "flex-start",
        ...colorVariantBy(theme, colorVariant, variant),
        ...(fullWidth && { alignSelf: "initial" }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  variant: "contained",
  colorVariant: "primary",
};
Button.Base = ButtonBase;
