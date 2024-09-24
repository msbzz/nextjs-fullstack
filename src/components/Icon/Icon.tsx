import { BaseCompoment } from "@src/theme/BaseCompoment";
import * as icons from "./svgs/_index";

const iconSizes = {
  xs: "12px",
  sm: "16px",
  md: "24px",
  lg: "32px",
  xl: "36px",
};

interface IconProps {
  name: keyof typeof icons;
  styleSheet?: StyleSheet;
  size?: keyof typeof iconSizes;
}

export default function Icon({ size, name }: IconProps) {
  const CurrentIcon = icons[name];
  if (!CurrentIcon) return `"${name}" is not valid <Icon/>`;
  return (
    // <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <BaseCompoment
      as="svg"
      styleSheet={{
        width: iconSizes[size],
        height: iconSizes[size],
      }}
      color="inherit"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <CurrentIcon />
    </BaseCompoment>
  );
}

Icon.defaultProps = {
  name: "default_icon",
  size: "md",
};
