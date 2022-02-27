import { Box, Image, Text, Flex } from "@chakra-ui/react"

function AnimeCard({ name, image, animeID }){
    return (
        <Box width="200px" boxShadow="xl" borderRadius="15px" overflow="hidden" position="relative" top="200px" _hover={{ transform: "scale3d(1.07, 1.07, 1)", transition: "0.3s", zIndex: "1", cursor: "pointer" }}>
            <Flex d>
                <Image width="200px" maxW="200px" src={image} position="relative"/>
                <Box id={animeID} onClick={e => alert(e.target.id)} top="0px" width="225px" height="100%" borderRadius="15px" bgGradient="linear(to-b, rgba(166, 166, 166, 0) 0%, rgba(166, 166, 166, 0) 50%, rgba(166, 166, 166, 1) 90%)" position="absolute" />
                <Box align="center" w="100%" height="10%" background="rgb(166, 166, 166)" bottom="0px" position="absolute">
                    <Text top="10%" lineHeight="12px" id={animeID} onClick={e => alert(e.target.id)} noOfLines={2} maxWidth="150px" fontSize="12" color="black" fontWeight="500" position="relative">{name}</Text>
                </Box>
            </Flex>
        </Box>  
    )
}

export default AnimeCard