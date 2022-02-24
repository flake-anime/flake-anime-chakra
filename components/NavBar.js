import { Box, Image, Text, IconButton, Input, Button } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

function NavBar(){
    return (
        <Box>
            <IconButton aria-label="search" bgColor="white" color="#0194FF" height="44px" width="44px" top="35px" right="165px" position="fixed" icon={<SearchIcon />} />
            <Button _hover={{ bg: "#0f9aff"}} bgColor="#0194FF" color="white" size="md" width="103px" height="44px" position="fixed" top="35px" right="50px">
                <Text fontSize="14" fontWeight="400">Sign In</Text>
            </Button>

            {/* Logo */}
            <Image top="35px" left="25" height="44px" position="fixed" src="https://i.imgur.com/4r0JdUo.png"/>
            {/* Home */}
            <Image top="170px" left="33" position="fixed" src="https://i.imgur.com/4T35GJ5.png"/>
            {/* Shuffle */}
            <Image top="220px" left="33" position="fixed" src="https://i.imgur.com/YpAcgzm.png"/>
            {/* Heart */}
            <Image top="270px" left="33" position="fixed" src="https://i.imgur.com/wTcnhew.png"/>
            {/* Message */}
            <Image top="320px" left="33" position="fixed" src="https://i.imgur.com/50JH9SG.png"/>
            {/* Bell */}
            <Image top="370px" left="33" position="fixed" src="https://i.imgur.com/Io9ymdK.png"/>
            {/* Star */}
            <Image top="420px" left="33" position="fixed" src="https://i.imgur.com/6rke9dV.png"/>

            <Input style={{ textTransform: "capitalize" }} placeholder="Search For An Anime..." _hover={{ bg:"#3b3f44" }} variant="filled" color="white" left="200px" bgColor="rgba(31, 34, 38)" height="44px" position="absolute" top="35px" width="350px"/>
            <IconButton aria-label="search" bgColor="#0194FF" color="white" height="44px" width="44px" top="35px" left="565px" position="absolute" icon={<SearchIcon />} />
        </Box>
    )
}

export default NavBar