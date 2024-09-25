
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import BackGround from "./patterns/BackGround/BackGround";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider" ;
import Link from "../../components/Link/Link";

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
   <Link href='/sobre'>
   Indo para pagina sobre
   </Link>
   <Link href='http://google.com'>
   Indo para pagina do google
   </Link>
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
