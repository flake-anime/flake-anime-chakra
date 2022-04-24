import { Box, Image, Text, Divider, Center } from "@chakra-ui/react"
import { TriangleDownIcon } from "@chakra-ui/icons"

function DetailCard(){
    return (
        <Box key="detailCard" cursor="pointer" background="dark.buttonbackground" borderRadius="3px" width="225px" height="550px" left="122px" top="95px" position="absolute">
            <Image src="https://cachecow.eu/min/mal/10/47347.jpg" borderRadius="3px 3px 0 0" height="350px" width="225px"></Image>
            <Text fontSize="16" marginTop="5px" marginLeft="10px" color="white" fontWeight="400">Attack On Titan</Text>
            <Text fontSize="14" marginTop="0px" marginLeft="10px" color="dark.text" fontWeight="400">進撃の巨人</Text>
            <Center>
                <Divider paddingTop="10px" width="215px" orientation="horizontal"/>
                <Text fontSize="16" marginTop="35px" position="absolute" marginLeft="10px" color="white" fontWeight="semibold">Information</Text>
                <Divider paddingTop="65px" position="absolute" width="215px" orientation="horizontal"/>
            </Center>

            <Text fontSize="16" marginTop="30px" position="absolute" marginLeft="10px" color="white" fontWeight="400">Episodes: </Text>
            <Text fontSize="16" marginTop="30px" marginLeft="82px" color="dark.text" fontWeight="400">25</Text>

            <Text fontSize="16" marginTop="0px" position="absolute" marginLeft="10px" color="white" fontWeight="400">Type: </Text>
            <Text fontSize="16" marginTop="0px" marginLeft="52px" color="dark.text" fontWeight="400">TV Series</Text>

            <Text fontSize="16" marginTop="0px" position="absolute" marginLeft="10px" color="white" fontWeight="400">Status: </Text>
            <Text fontSize="16" marginTop="0px" marginLeft="62px" color="dark.text" fontWeight="400">Finished Airing</Text>
        </Box>
    )
}

export default DetailCard