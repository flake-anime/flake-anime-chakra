import { Center, Text, Button, Tag, SimpleGrid, Box } from "@chakra-ui/react"
import NavBar from "/components/NavBar"
import DetailCard from "/components/DetailCard"
import Player from "/components/Player"

function MyApp(){
  return (
    <div>
        <NavBar/>
        {/* <DetailCard/> */}
        
        <Text color="dark.text" position="absolute" top="95px" left="400px" fontWeight="semibold" fontSize="50px">Attack On Titan</Text>
        
        <Button top="175px" left="400px" _focus={{ bg: "dark.pink" }} _hover={{ bg: "dark.navbarbuttonhover"}} style={{ transition: "0.2s" }} bgColor="dark.pink" color="white" size="md" width="94px" height="40px" position="absolute">
            <Text fontSize="14" fontWeight="semibold">Watch Now</Text>
        </Button>

        <Tag background="dark.navbarbuttonhover" left="400px" top="230px" position="absolute" height="40px" color="white" borderRadius="25px" paddingLeft="20px" paddingRight="20px" fontWeight="regular">Dubbed</Tag>
        <Tag background="dark.navbarbuttonhover" left="500px" top="230px" position="absolute" height="40px" color="white" borderRadius="25px" paddingLeft="20px" paddingRight="20px" fontWeight="regular">Action</Tag>
        <Tag background="dark.navbarbuttonhover" left="590px" top="230px" position="absolute" height="40px" color="white" borderRadius="25px" paddingLeft="20px" paddingRight="20px" fontWeight="regular">Adventure</Tag>
        <Tag background="dark.navbarbuttonhover" left="705px" top="230px" position="absolute" height="40px" color="white" borderRadius="25px" paddingLeft="20px" paddingRight="20px" fontWeight="regular">Romance</Tag>

        <Center position="relative" top="200px">
            <Player width="800px" height="450px"/>
        </Center>
    </div>
  )
}

export default MyApp
