import { Box, Icon, Image, Text, IconButton, Portal, Input, Button, useControllableProp, useControllableState, SimpleGrid } from "@chakra-ui/react"
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"
import { IoFolderOpenSharp } from "react-icons/io5"

function StreamingDetails({ data }){
    const { asPath } = useRouter();
    const searchedAnime = decodeURI(asPath.split("/")[2]).replace(/-/g, " ");

    console.log(data);

    return (
        <Box position="absolute" width="470px" height="200px" background="#3B3E49" borderRadius="8px" right="30px" top="95px">
            <Box padding="15px" position="absolute">
                <IoFolderOpenSharp position="relative" size={22} color="#C4C4C4"/>
            </Box>

            <Text color="#ffffff" noOfLines={1} textTransform="capitalize" position="absolute" top="14px" left="42px" fontWeight="500">{searchedAnime}</Text>
        </Box>
    )
}

export async function getServerSideProps(context){
    const res = await fetch("https://aniflake-proxy-server.herokuapp.com/search?anime_name=death%20note")
    const data = await res.json()

    return { props: {data} }
}

export default StreamingDetails