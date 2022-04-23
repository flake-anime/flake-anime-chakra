import { Box, Image, Text, IconButton, Input, Button, SimpleGrid } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

function NavBar(){
    const router = useRouter()

    const search = async(event) => {
        event.preventDefault()

        router.push(`/search/${(event.target.textbox.value).replace(/ /g,"-")}`)
    }

    return (
        <Box>
            <Button _focus={{ bg: "rgba(44, 45, 54, 0.92)" }} _hover={{ bg: "dark.navbarbuttonhover"}} style={{ transition: "0.2s" }} bgColor="dark.pink" color="white" size="md" width="94px" height="45px" position="absolute" top="25px" right="30px">
                <Text fontSize="14" fontWeight="400">Sign In</Text>
            </Button>

            {/* Logo */}
            <Image _hover={{ cursor: "pointer"}} top="27px" left="70px" width="35px" position="absolute" src="https://i.imgur.com/GAGPSGW.png" onClick={() => document.location.href="/"}/>
            
            {/* Home */}
            {/* Shuffle */}
            {/* Heart */}
            {/* Message */}
            {/* Bell */}
            {/* Star */}

            <SimpleGrid mixBlendMode="lighten" columns={1} top="40px" spacingY="50px" left="25px" position="fixed">
                <Image cursor="pointer" height="15px" src="https://i.imgur.com/4T35GJ5.png"/>
                <Image cursor="pointer" height="15px" src="https://i.imgur.com/YpAcgzm.png"/>
                <Image cursor="pointer" height="15px" src="https://i.imgur.com/wTcnhew.png"/>
                <Image cursor="pointer" height="15px" src="https://i.imgur.com/50JH9SG.png"/>
                <Image cursor="pointer" height="15px" src="https://i.imgur.com/Io9ymdK.png"/>
                <Image cursor="pointer" height="15px" src="https://i.imgur.com/6rke9dV.png"/>
            </SimpleGrid>

            <form onSubmit={search}>
                <Input focusBorderColor="dark.pink" autoComplete="off" id="textbox" name="textbox" style={{ textTransform: "capitalize" }} placeholder="What would you like to watch today?" fontSize="14px" _hover={{ bg:"dark.buttonhoverbackground" }} variant="filled" color="white" left="120px" bgColor="dark.buttonbackground" height="45px" width="350px" position="absolute" top="25px" display="inline-block"/>
                <IconButton _focus={{ bg: "dark.buttonfocus" }} _hover={{ bg: "dark.navbarbuttonhover"}} style={{ transition: "0.2s" }} type="submit" aria-label="search" bgColor="dark.pink" color="white" height="45px" width="45px" top="25px" left="480px" position="absolute" icon={<SearchIcon />} />
            </form>
        </Box>
    )
}

export default NavBar