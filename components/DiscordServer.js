import { Box, Image, Text } from "@chakra-ui/react"
import { useRouter } from "next/router";

function DetailCard(){
    const router = useRouter()

    const join = async() => {

        router.push(`/discord`)
    }

    return (
        <Box key="discord" onClick={join} cursor="pointer" zIndex={2} position="absolute" overflow="hidden" _hover={{  background: "dark.buttonhoverbackground" }} style={{ transition: "0.2s ease-in-out"}} top="95px" right="45px" bg="dark.buttonbackground" width="340px" height="150px" borderRadius="12px">
            <Image zIndex={1} position="absolute" marginTop="20px" marginLeft="20px" mixBlendMode="normal" fallbackSrc="https://i.imgur.com/8sJVxm8.jpg" borderRadius={25} boxShadow="2xl" width="110px" height="110px" src="https://i.pinimg.com/originals/fe/0b/65/fe0b65126ee24fcd2a2e84f20e9f8f42.jpg"></Image>
            <Text fontSize="24" fontWeight="semibold" color="white" lineHeight={1.2} marginTop="17px" marginLeft="150px">Flake Anime Discord</Text>
            <Text fontSize="12" color="dark.text" lineHeight={1.4} marginTop="5px" marginLeft="150px" paddingRight="10px">
                Join our discord server for updates, events and be part of our community!
            </Text>
        </Box>
    )
}

export default DetailCard

// import { Box, Image } from "@chakra-ui/react"

// function DetailCard(){
//     return (
//         <Box cursor="pointer" background="dark.buttonbackground" borderRadius="12px" zIndex={2} _hover={{ background: "dark.buttonhoverbackground" }} style={{ transition: "2s ease-in-out"}} position="absolute" width="340px" height="150px" right="45px" top="95px">
//             <Image position="absolute" marginTop="20px" marginLeft="20px" mixBlendMode="normal" fallbackSrc="https://i.imgur.com/8sJVxm8.jpg" borderRadius={25} boxShadow="2xl" width="110px" height="110px" src="https://i.pinimg.com/originals/fe/0b/65/fe0b65126ee24fcd2a2e84f20e9f8f42.jpg"></Image>
//         </Box>
//     )
// }