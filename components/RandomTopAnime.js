import { Box, Image, Text, IconButton, Portal, Input, Button, useControllableProp, useControllableState, SimpleGrid } from "@chakra-ui/react"
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"

function RandomTopAnime(){
    return (
        <Box _hover={{ cursor: "pointer"}}>
            <Box position="absolute" overflow="hidden" _hover={{ background: "#575c6f"}} style={{ transition: "0.2s"}} top="95px" left="70px" bg="#4b4f5f" width={[600, 700, 850, 1000, 1100]} height="175px" borderRadius="12px">
                <Text fontWeight="medium" color="#96A7AF" position="absolute" top="15px" left="165px" fontSize="20px">Banish from the Hero's Party</Text>

                <Text color="#96A7AF" position="absolute" top="60px" left="165px" fontSize="14px">
                    Miko is a typical high school student whose life turns upside down when she suddenly starts to see gruesome and hideous monsters. Despite being completely terrified, Miko carries on with her daily life, pretending not to notice the horrors that surround her.
                </Text>

                <StarIcon position="absolute" color="#ED64A6" w={4} h={4} bottom="15px" left="165px"/>
                <Text fontWeight="500" color="#96A7AF" position="absolute" bottom="13px" left="190px" fontSize="14px">6.95</Text>

                <ChevronLeftIcon _hover={{ color: "#ED64A6" }} style={{ transition: "0.2s" }} position="absolute" color="#96A7AF" w={6} h={6} bottom="15px" right="40px"/>
                <ChevronRightIcon _hover={{ color: "#ED64A6" }} style={{ transition: "0.2s" }} position="absolute" color="#96A7AF" w={6} h={6} bottom="15px" right="20px"/>

                <Image height="200px" src="https://gogocdn.net/cover/shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita.png"></Image>
            </Box>
        </Box>
    )
}

export default RandomTopAnime