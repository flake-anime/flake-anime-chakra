import { Box, Image, Text, IconButton, Input, Button, SimpleGrid, Center } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function NavBar(){
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const search = async(event) => {
        event.preventDefault();
        setLoading(true);

        router.push(`/search/${(event.target.textbox.value).replace(/ /g,"-")}`);
    }

    return (
        <Box key="navbar">
            <Center>
                <div class={loading ? "lds-dual-ring" : "loading"}></div>
            </Center>

            <Box class="navbarClass">
                <Button _focus={{ bg: "rgba(44, 45, 54, 0.92)" }} _hover={{ bg: "dark.navbarbuttonhover"}} style={{ transition: "0.2s" }} bgColor="dark.pink" color="white" size="md" width="94px" height="45px" position="absolute" top="25px" right="30px">
                    <Text fontSize="14" fontWeight="400">Sign In</Text>
                </Button>

                {/* lds-dual-ring */}

                {/* Logo */}
                <Image alt="logo" _hover={{ cursor: "pointer"}} top="27px" left="70px" width="35px" position="absolute" src="https://i.imgur.com/GAGPSGW.png" onClick={() => document.location.href="/"}/>
                
                {/* Home */}
                {/* Shuffle */}
                {/* Heart */}
                {/* Message */}
                {/* Bell */}
                {/* Star */}

                <SimpleGrid mixBlendMode="lighten" columns={1} top="40px" spacingY="50px" left="25px" position="fixed">
                    <Image alt="home" cursor="pointer" height="15px" src="https://i.imgur.com/4T35GJ5.png"/>
                    <Image alt="shuffle" cursor="pointer" height="15px" src="https://i.imgur.com/YpAcgzm.png"/>
                    <Image alt="heart" cursor="pointer" height="15px" src="https://i.imgur.com/wTcnhew.png"/>
                    <Image alt="message" cursor="pointer" height="15px" src="https://i.imgur.com/50JH9SG.png"/>
                    <Image alt="bell" cursor="pointer" height="15px" src="https://i.imgur.com/Io9ymdK.png"/>
                    <Image alt="star" cursor="pointer" height="15px" src="https://i.imgur.com/6rke9dV.png"/>
                </SimpleGrid>

                <form onSubmit={search}>
                    <Input focusBorderColor="dark.pink" autoComplete="off" id="textbox" name="textbox" style={{ textTransform: "capitalize" }} placeholder="What would you like to watch today?" fontSize="14px" _hover={{ bg:"dark.buttonhoverbackground" }} variant="filled" color="white" left="120px" bgColor="dark.buttonbackground" height="45px" width="350px" position="absolute" top="25px" display="inline-block"/>
                    <IconButton _focus={{ bg: "dark.buttonfocus" }} _hover={{ bg: "dark.navbarbuttonhover"}} style={{ transition: "0.2s" }} type="submit" aria-label="search" bgColor="dark.pink" color="white" height="45px" width="45px" top="25px" left="480px" position="absolute" icon={<SearchIcon />} />
                </form>
            </Box>
        </Box>
    )
}

export default NavBar