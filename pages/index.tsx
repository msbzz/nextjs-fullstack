import Box from "../scr/components/Box";
import theme from "../scr/theme/theme";
export default function HomeScreen() {
  return (
    <Box
      tag="main"
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
      }}
    >
      Ola !
    </Box>
  );
}
