import { Box, Center, Image, Text, SimpleGrid, Select, Checkbox, Button, IconButton, Input, Tag, TagLabel, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import Script from "next/script"
import AnimeCard from "/components/AnimeCard"
import NavBar from "/components/NavBar"
import WeeklyTopCard from "/components/WeeklyTopCard"
import AnimeSelection from "/components/AnimeSelection"
import RandomBackground from "/components/RandomBackground"

function MyApp({ data }){
    const animes = JSON.parse(data)
    const { asPath } = useRouter();
    const searchedAnime = decodeURI(asPath.split("/")[2]).replace(/-/g, " ")

    return (
        <div>
            <RandomBackground/>

            <NavBar/>
            <AnimeSelection/>

            <Text fontSize="20" style={{ textTransform: "capitalize", textShadow: "2px 2px black" }} top="95px" left="120px" fontWeight="625" color="white" position="absolute">Search Results For {searchedAnime}</Text>

            <Box>
                <SimpleGrid columns={5} spacingX="15px" spacingY="20px" position="absolute" top="-40px" left="120px">
                
                    {Object.keys(animes).map((anime) => (
                        <AnimeCard name={animes[anime]["anime_name"]} image={animes[anime]["anime_image"]} animeID={animes[anime]["anime_id"]}/>
                    ))} 

                </SimpleGrid>
            </Box>

            <Box>
                <Text fontSize="30" top="590px" right="150px" fontWeight="625" color="white" position="absolute">Weekly Top</Text>

                <WeeklyTopCard name="One Piece" image="https://gogocdn.net/images/anime/One-piece.jpg" cardRight="50px" cardTop="660px"/>
                <WeeklyTopCard name="Sono Bisque Doll wa Koi wo Suru" image="https://cachecow.eu/i/b15363b512267fdb4f30a789bacd97a6.jpg" cardRight="50px" cardTop="770px"/>
                <WeeklyTopCard name="Naruto Shippuden" image="https://cachecow.eu/i/d7c4f5008a6c3a4f4d354e531939906f.jpg" cardRight="50px" cardTop="880px"/>
            </Box>
        </div>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`https://aniflake-proxy-server.herokuapp.com/search?anime_name=${context.params.slug}`)
    const newData = await res.text()
    const data = [newData]

    return { props: {data} }
}

export default MyApp