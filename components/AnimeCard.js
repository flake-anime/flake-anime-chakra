import { Box, Image, Text, Flex } from "@chakra-ui/react"

function AnimeCard({ name, image }){
    return (
            <Box boxShadow="xl" borderRadius="15px" overflow="hidden" position="relative" top="200px">
                <Flex d _hover={{  }}>
                    <Image width="225px" maxW="225px" src={image} position="relative"/>
                    <Box top="0px" width="225px" height="100%" borderRadius="15px" bgGradient="linear(to-b, rgba(17, 16, 21, 0) 0%, rgba(17, 16, 21, 0) 50%, rgba(17, 16, 21, 1) 90%)" position="absolute" />
                    <Box w="100%" height="10%" background="#111015" bottom="0px" position="absolute">
                        <Text paddingBottom="10px" fontSize="18" color="#C9C9C9" align="center" fontWeight="500" position="relative">{name}</Text>
                    </Box>
                </Flex>
            </Box>  
    )
}

export default AnimeCard