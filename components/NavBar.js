import { Box, Image, Text, IconButton, Input, Button } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

function NavBar(){
    return (
        <Box>
            <IconButton aria-label="search" bgColor="white" color="#0194FF" height="39px" width="39px" top="30px" right="130px" position="fixed" icon={<SearchIcon />} />
            <Button _hover={{ bg: "#0f9aff"}} bgColor="#0194FF" color="white" size="md" width="94px" height="39px" position="fixed" top="30px" right="30px">
                <Text fontSize="14" fontWeight="400">Sign In</Text>
            </Button>

            {/* Logo */}
            <Image top="30px" left="30px" left="25" height="39px" position="fixed" src="https://i.imgur.com/4r0JdUo.png"/>
            {/* Home */}
            <Image top="160px" left="30px" height="15px" position="fixed" src="https://i.imgur.com/4T35GJ5.png"/>
            {/* Shuffle */}
            <Image top="210px" left="30px" height="15px" position="fixed" src="https://i.imgur.com/YpAcgzm.png"/>
            {/* Heart */}
            <Image top="260px" left="30px" height="15px" position="fixed" src="https://i.imgur.com/wTcnhew.png"/>
            {/* Message */}
            <Image top="310px" left="30px" height="15px" position="fixed" src="https://i.imgur.com/50JH9SG.png"/>
            {/* Bell */}
            <Image top="360px" left="30px" height="15px" position="fixed" src="https://i.imgur.com/Io9ymdK.png"/>
            {/* Star */}
            <Image top="410px" left="30px" height="15px" position="fixed" src="https://i.imgur.com/6rke9dV.png"/>

            <Input style={{ textTransform: "capitalize" }} placeholder="Search For An Anime..." fontSize="14px" _hover={{ bg:"#3b3f44" }} variant="filled" color="white" left="180px" bgColor="rgba(31, 34, 38)" height="39px" position="absolute" top="30px" width="295px"/>
            <IconButton aria-label="search" bgColor="#0194FF" color="white" height="39px" width="39px" top="30px" left="485px" position="absolute" icon={<SearchIcon />} />
        </Box>
    )
}

export default NavBar