import { Center, Text, Button, Tag, SimpleGrid, Box } from "@chakra-ui/react";
import NavBar from "/components/NavBar";
import DetailCard from "/components/DetailCard";
import DefaultPlayer from "/components/DefaultPlayer";
import TrailerInvalid from "/components/TrailerInvalid";
import Player from "/components/Player";
import Head from "next/head";

function MyApp(){
  return (
    <div>
        {/* <Head>
            <title></title>
            <meta charSet="UTF-8"/>
            <meta property="og:title" content="Flake Anime"/>
            <meta name="twitter:title" content="Flake Anime"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://flake-anime.netlify.app/"/>
            <meta name="description" content="Enjoy HD anime for completely free - Subbed & Dubbed! No ads or anything else to worry about! "/>
            <meta name="twitter:description" content="Enjoy HD anime for completely free - Subbed & Dubbed! No ads or anything else to worry about!"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image" content="https://i.imgur.com/MexfEp6.png"/>
            <meta name="twitter:site" content="@discord"/>
        </Head> */}

        <NavBar/>
        <DetailCard/>
        
        <Text color="dark.text" position="absolute" top="95px" left="400px" fontWeight="semibold" fontSize="50px">Attack On Titan</Text>
        
        <Button top="175px" left="400px" _focus={{ bg: "dark.pink" }} _hover={{ bg: "dark.navbarbuttonhover"}} style={{ transition: "0.2s" }} bgColor="dark.pink" color="white" size="md" width="94px" height="40px" position="absolute">
            <Text fontSize="14" fontWeight="semibold">Watch Now</Text>
        </Button>

        <Tag background="dark.navbarbuttonhover" left="400px" top="230px" position="absolute" height="40px" color="white" borderRadius="25px" paddingLeft="20px" paddingRight="20px" fontWeight="regular">Dubbed</Tag>
        <Tag background="dark.navbarbuttonhover" left="500px" top="230px" position="absolute" height="40px" color="white" borderRadius="25px" paddingLeft="20px" paddingRight="20px" fontWeight="regular">Action</Tag>
        <Tag background="dark.navbarbuttonhover" left="590px" top="230px" position="absolute" height="40px" color="white" borderRadius="25px" paddingLeft="20px" paddingRight="20px" fontWeight="regular">Adventure</Tag>
        <Tag background="dark.navbarbuttonhover" left="705px" top="230px" position="absolute" height="40px" color="white" borderRadius="25px" paddingLeft="20px" paddingRight="20px" fontWeight="regular">Romance</Tag>

        <Center position="relative" top="200px">
            <TrailerInvalid width="800px" height="450px"/>
        </Center>
    </div>
  )
}

export default MyApp
