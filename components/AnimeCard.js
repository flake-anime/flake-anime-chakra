import { Box, Image, Text, IconButton, Portal, Input, Button, useControllableProp, useControllableState, SimpleGrid, Stack, Center } from "@chakra-ui/react";
import React, {useState} from "react";
import { StarIcon } from "@chakra-ui/icons"

function AnimeCard({ imgUrl, name, rating }){
    return (
        <Box _hover={{ background: "rgba(254, 215, 226, 0.08)", cursor: "pointer"}} boxShadow="xl" noOfLines={1} transition="0.2s" width="200px" borderRadius={15} height="350px" left="60px" position="relative">
            <Text noOfLines={1} width="174px" position="absolute" color="#96A7AF" fontWeight="medium" fontSize="14" bottom="55px" left="15px">{name}</Text>
            
            <StarIcon position="absolute" color="#ED64A6" w={4} h={4} bottom="15px" left="15px"/>
            <Text fontWeight="500" color="#96A7AF" position="absolute" bottom="13px" left="37px" fontSize="14px">{rating}</Text>

            <Center marginTop="12px">
                <Image borderRadius={10} boxShadow="2xl" minWidth="175px" maxWidth="175px" src={imgUrl}></Image>
            </Center>
        </Box>
    )
}

export default AnimeCard