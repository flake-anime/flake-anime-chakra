import {Box, Center, Image, Text, Flex} from "@chakra-ui/react"
import {StarIcon, ViewIcon} from "@chakra-ui/icons"

function MyApp(){
  return (

    <Center marginTop="50px">
      <Box boxShadow="xl" maxW="300px" borderRadius="15px" overflow="hidden">
        <Image width="225px" src="https://gogocdn.net/cover/kimetsu-no-yaiba.png"/>
        <Box w="100%" background="#111015">
          <Text paddingBottom="10px" fontSize="18" color="#C9C9C9" align="center" fontWeight="500" >Kimetsu no Yaiba</Text>
        </Box>
      </Box>


      <Box marginLeft="10px" boxShadow="xl" maxW="225px" borderRadius="15px" overflow="hidden" position="relative">
        <Image width="225px" src="https://gogocdn.net/cover/shingeki-no-kyojin-the-final-season-part-2.png " position="relative"/>
        <Box top="0px" width="225px" height="100%" borderRadius="15px" bgGradient="linear(to-b, rgba(17, 16, 21, 0) 0%, rgba(17, 16, 21, 0) 50%, rgba(17, 16, 21, 1) 90%)" position="absolute" />
        <Box w="100%" background="#111015">
          <Text paddingBottom="10px" fontSize="18" color="#C9C9C9" align="center" fontWeight="500" position="relative">Shingeki no Kyojin</Text>
        </Box>

      </Box>


      <Box marginLeft="10px" boxShadow="xl">
        <Flex>
          <Image borderRadius="15px 0px 0px 15px" height="210px" src="https://gogocdn.net/images/anime/One-piece.jpg"/>
          <Box bg="rgba(31, 34, 38, 0.87)" width="450px" borderRadius="0px 15px 15px 0px">
            <Text color="#96A7AF" fontSize="28" fontWeight="500" marginLeft="40px" marginTop="20px">One Piece</Text>
            <Text color="white" fontSize="20px" position="absolute" fontWeight="500" marginLeft="75px" marginTop="75px">7.61</Text>
            <Text color="#96A7AF" fontSize="20px" position="absolute" fontWeight="500" marginLeft="180px" marginTop="75px">216,649</Text>
            
            <StarIcon color="#FFC542" marginLeft="40px" marginTop="75px" width="28px" height="28px"/>
            <ViewIcon color="#96A7AF" width="28px" height="28px" marginLeft="75px" marginTop="75px"/>
          </Box>
        </Flex>

      </Box>

    </Center>
  )
}

export default MyApp