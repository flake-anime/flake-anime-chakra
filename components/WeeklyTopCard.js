import { Box, Image, Text, Flex } from "@chakra-ui/react"
import { StarIcon, ViewIcon } from "@chakra-ui/icons"

function WeeklyTopCard({ name, image }){
    return (
        <Box marginLeft="10px" boxShadow="xl" width="350px" position="absolute">
            <Flex height="100px ">
            <Image borderRadius="15px 0px 0px 15px" src={image}/>
                <Box bg="rgba(31, 34, 38, 0.87)" width="450px" borderRadius="0px 15px 15px 0px">
                    <Text color="#96A7AF" fontSize="22" fontWeight="500" marginLeft="20px" marginTop="10px">{name}</Text>
                    <Text color="white" fontSize="18px" position="absolute" fontWeight="500" marginLeft="50px">7.61</Text>
                    <Text color="#96A7AF" fontSize="18px" position="absolute" fontWeight="500" marginLeft="130px">216,649</Text>
                    
                    <StarIcon color="#FFC542" marginLeft="20px" bottom="140px" width="22px" height="22px" position="absolute"/>
                    <ViewIcon color="#96A7AF" width="22px" height="22px" marginLeft="100px" bottom="140px" position="absolute"/>
                </Box>
            </Flex>
        </Box>
    )
}

export default WeeklyTopCard