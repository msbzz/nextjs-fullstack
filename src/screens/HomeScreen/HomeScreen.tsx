import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import BackGround from "./patterns/BackGround/BackGround";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";

export default function HomeScreen(){
 return(
  <Box tag='main' >
   <BackGround/>
   <Menu/>
   <Feed>
     <Feed.Header/>
     <Text>
        Últimas Atualizações
     </Text>
     <Feed.Posts/>
   </Feed>
  </Box>
 )
}
