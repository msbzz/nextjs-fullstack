import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Menu() {
  const theme = useTheme();
  const baseSize = "40px";
  return (
    <Box
      styleSheet={{
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        flexDirection: "row",
        justifyContent: "space-between",
        color: theme.colors.neutral.x000,
        paddingVertical: "16px",
        paddingHorizontal: "20px",
      }}
    >
      <Button.Base
        styleSheet={{
          borderRadius: "100%",
          color: theme.colors.primary.x500,
          widht: baseSize,
          height: baseSize,
          alignItems: "center",
          justifyContent: "center",
          hover:{
            backgroundColor:theme.colors.primary.x400,
          },
          focus:{
            backgroundColor:theme.colors.primary.x600,
          },
        }}
      >
        <Text>MS</Text>
      </Button.Base>

      <Button.Base
        styleSheet={{
          borderRadius: "100%",
          color: theme.colors.neutral.x500,
          widht: baseSize,
          height: baseSize,
          alignItems: "center",
          justifyContent: "center",
          hover:{
            backgroundColor:theme.colors.neutral.x400,
          },
          focus:{
            backgroundColor:theme.colors.neutral.x600,
          },
        }}
      >
        <Icon name="menu" />
      </Button.Base>
    </Box>
  );
}
