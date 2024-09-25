
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import BackGround from "./patterns/BackGround/BackGround";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider" ;

export default function HomeScreen(){
  const theme = useTheme();
  return(
  <Box
  tag='main'
  styleSheet={{
    flex:1,
    backgroundColor:theme.colors.primary.x400,
    color:'white' }}
  >
   <BackGround/>
   <Menu/>
   <Feed>
     <Feed.Header/>
     <Text variant='display1'>
        Últimas Atualizações
     </Text>
     <Feed.Posts/>
   </Feed>
   <Footer/>
  </Box>
 )
}
