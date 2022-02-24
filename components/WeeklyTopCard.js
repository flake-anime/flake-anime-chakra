import { Box, Image, Text, Flex } from "@chakra-ui/react"
import { StarIcon, ViewIcon } from "@chakra-ui/icons"

function WeeklyTopCard({ name, image, cardRight, cardTop }){
    return (
        <Box marginLeft="10px" boxShadow="xl" width="310px" right={cardRight} top={cardTop} position="absolute">
            <Flex height="100px">
                <Image width="200px" borderRadius="15px 0px 0px 15px" src={image}/>
                <Box bg="rgba(31, 34, 38, 0.87)" width="450px" borderRadius="0px 15px 15px 0px">
                    <Text color="#96A7AF" fontSize="16" fontWeight="500" marginLeft="20px" marginTop="10px" noOfLines={1}>{name}</Text>
                    <Text color="white" fontSize="15px" position="absolute" fontWeight="500" marginLeft="45px" bottom="7px">7.61</Text>
                    <Text color="#96A7AF" fontSize="15px" position="absolute" fontWeight="500" marginLeft="130px" bottom="7px">216,649</Text>
                    
                    <StarIcon color="#FFC542" marginLeft="20px" bottom="10px" width="18px" height="18px" position="absolute"/>
                    <ViewIcon color="#96A7AF" width="18px" height="18px" marginLeft="100px" bottom="10px" position="absolute"/>
                </Box>
            </Flex>
        </Box>
    )
}

export default WeeklyTopCard