import { Box, Image, Text, IconButton, Portal, Input, Button, useControllableProp, useControllableState, SimpleGrid, Stack, Center } from "@chakra-ui/react";
import React, {useState} from "react";
import { StarIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"

function AnimeCard({ imgUrl, name, rating, animeID }){
    const router = useRouter()

    const clicked = async(event) => {
        event.preventDefault()
    
        router.push(`/watch/${(animeID).replace(/ /g,"-")}`)
    }

    return (
        <Box onClick={clicked} id={animeID} mixBlendMode="lighten" _hover={{ background: "rgba(254, 215, 226, 0.08)", cursor: "pointer", mixBlendMode: "normal", transform: "scale(1.02) translate(0, -5px)"}} transition="all .2s ease-in-out" boxShadow="xl" noOfLines={1} width="200px" borderRadius={15} height="350px" left="60px" position="relative">
            <Text noOfLines={1} width="174px" position="absolute" color="#96A7AF" fontWeight="medium" fontSize="14" bottom="55px" left="15px">{name}</Text>
            
            <StarIcon position="absolute" color="#ED64A6" w={4} h={4} bottom="15px" left="15px"/>
            <Text fontWeight="500" color="#96A7AF" position="absolute" bottom="13px" left="37px" fontSize="14px">{rating}</Text>

            <Center marginTop="12px">
                <Image borderRadius={10} boxShadow="2xl" width="175px" height="250px" src={imgUrl}></Image>
            </Center>
        </Box>
    )
}

export default AnimeCard