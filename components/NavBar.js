import { Box, Image, Text, IconButton, Portal, Input, Button, useControllableProp, useControllableState, SimpleGrid } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"

function NavBar(){
    const router = useRouter()

    const search = async(event) => {
        event.preventDefault()

        router.push(`/search/${(event.target.textbox.value).replace(/ /g,"-")}`)
    }

    return (
        <Box _hover={{ cursor: "pointer"}}>
            <Button _hover={{ bg: "#f07eb5"}} style={{ transition: "0.2s" }} bgColor="#ED64A6" color="white" size="md" width="94px" height="45px" position="fixed" top="25px" right="30px">
                <Text fontSize="14" fontWeight="400">Sign In</Text>
            </Button>

            {/* Logo */}
            <Image top="27px" left="70px" width="35px" position="fixed" src="https://i.imgur.com/GAGPSGW.png" onClick={() => document.location.href="/"}/>
            
            {/* Home */}
            {/* Shuffle */}
            {/* Heart */}
            {/* Message */}
            {/* Bell */}
            {/* Star */}

            <SimpleGrid columns={1} top="40px" spacingY="50px" left="25px" position="fixed">
                <Image height="15px" src="https://i.imgur.com/4T35GJ5.png"/>

                <Image height="15px" src="https://i.imgur.com/YpAcgzm.png"/>

                <Image height="15px" src="https://i.imgur.com/wTcnhew.png"/>
                
                <Image  height="15px" src="https://i.imgur.com/50JH9SG.png"/>
                
                <Image height="15px" src="https://i.imgur.com/Io9ymdK.png"/>
                
                <Image height="15px" src="https://i.imgur.com/6rke9dV.png"/>
            </SimpleGrid>

            <form onSubmit={search}>
                <Input focusBorderColor="#ED64A6" autocomplete="off" id="textbox" name="textbox" style={{ textTransform: "capitalize" }} placeholder="What would you like to watch today?" fontSize="14px" _hover={{ bg:"#3b3f44" }} variant="filled" color="white" left="125px" bgColor="rgba(68, 72, 87, 0.55)" height="45px" width="350px" position="absolute" top="25px" display="inline-block"/>
                <IconButton _hover={{ bg: "#f07eb5"}} style={{ transition: "0.2s" }} type="submit" aria-label="search" bgColor="#ED64A6" color="white" height="45px" width="45px" top="25px" left="485px" position="absolute" icon={<SearchIcon />} />
            </form>
        </Box>
    )
}

export default NavBar