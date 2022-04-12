import { Box, Image, Text, IconButton, Portal, Input, Button, useControllableProp, useControllableState, SimpleGrid, Stack } from "@chakra-ui/react"

function HomeTypeButtons(){
    return (
        <Box _hover={{ cursor: "pointer"}}>
            <Stack position="absolute" direction="row" spacing={4} align="center" top="300px" left="70px">
                <Button isActive _active={{ bg: "#ED64A6", color: "white" }} height="40px" _hover={{ background: "#f4a0c8", color: "white" }} style={{ transition: "0.2s" }} width="80px" background="rgba(68, 72, 87, 0.55)" color="#96A7AF" fontSize="14px" fontWeight="400">New Eps</Button>
                <Button height="40px" _active={{ bg: "#ED64A6", color: "white" }} _hover={{ background: "#f4a0c8", color: "white" }} style={{ transition: "0.2s" }} width="80px" background="rgba(68, 72, 87, 0.55)" color="#96A7AF" fontSize="14px" fontWeight="400">Followed</Button>
                <Button height="40px" _active={{ bg: "#ED64A6", color: "white" }} _hover={{ background: "#f4a0c8", color: "white" }} style={{ transition: "0.2s" }} width="80px" background="rgba(68, 72, 87, 0.55)" color="#96A7AF" fontSize="14px" fontWeight="400">Recent</Button>
                <Button height="40px" _active={{ bg: "#ED64A6", color: "white" }} _hover={{ background: "#f4a0c8", color: "white" }} style={{ transition: "0.2s" }} width="80px" background="rgba(68, 72, 87, 0.55)" color="#96A7AF" fontSize="14px" fontWeight="400">Popular</Button>
                <Button height="40px" _active={{ bg: "#ED64A6", color: "white" }} _hover={{ background: "#f4a0c8", color: "white" }} style={{ transition: "0.2s" }} width="80px" background="rgba(68, 72, 87, 0.55)" color="#96A7AF" fontSize="14px" fontWeight="400">Movie</Button>
            </Stack>
        </Box>
    )
}

export default HomeTypeButtons