import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import BackGround from "./patterns/BackGround/BackGround";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";

export default function HomeScreen(){
 return(
  <Box
  tag='main'
  styleSheet={{backgroundColor:'blue',color:'white' }}
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
