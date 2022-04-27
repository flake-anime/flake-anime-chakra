import { Box, Image, Text, Center } from "@chakra-ui/react";
import React, {useState} from "react";
import { StarIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"

function AnimeCard({ imgUrl, name, rating, animeID, type, totalEpisodes }){
    const router = useRouter()

    const clicked = async(event) => {
        event.preventDefault()
    
        router.push(`/watch/${(animeID).replace(/ /g,"-")}/1`)
    }

    return (
        <Box key={name} onClick={clicked} id={animeID} _hover={{ background: "dark.cardhover", cursor: "pointer", transform: "scale(1.02) translate(0, -5px)"}} transition="all .2s ease-in-out" boxShadow="2xl" noOfLines={1} width="200px" borderRadius={15} height="350px" left="60px" position="relative">
            <Text noOfLines={1} width="174px" position="absolute" color="dark.text" fontWeight="medium" fontSize="14" bottom="55px" left="15px">{name}</Text>
            
            <StarIcon position="absolute" color="dark.pink" w={4} h={4} bottom="15px" left="15px"/>
            <Text fontWeight="500" color="dark.text" position="absolute" bottom="13px" left="37px" fontSize="14px">{rating}</Text>

            {totalEpisodes > 1 ? (
                <Text fontWeight="500" color="dark.text" position="absolute" bottom="13px" right="15px" fontSize="14px">{totalEpisodes} Episodes</Text>
            ) : (
                <Text fontWeight="500" color="dark.text" position="absolute" bottom="13px" right="15px" fontSize="14px">{totalEpisodes} Episode</Text>
            )}

            <Center marginTop="12px">
                <Image alt={name} key={name} fallbackSrc="https://i.imgur.com/8sJVxm8.jpg" borderRadius={10} boxShadow="2xl" width="175px" height="250px" src={imgUrl}></Image>
            </Center>

            {type == "Movies" ? (
                <Box position="absolute" top="12px" opacity="0.8" left="12.5px" borderRadius="8px 0px 5px 0px" background="dark.buttonhoverbackground" width="87.5px" height="30px">
                    <Text paddingTop="3px" paddingLeft="20px" color="white" fontSize="15px" noOfLines={5} textTransform="uppercase" position="absolute" top="0px" left="0px" fontWeight="semibold">Movie</Text>
                </Box>
            ) : null}
        </Box>
    )
}

export default AnimeCard