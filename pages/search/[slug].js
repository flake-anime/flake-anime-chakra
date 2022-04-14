import { Box, Center, Image, Text, SimpleGrid, Select, Checkbox, Button, IconButton, Input, Tag, TagLabel, Menu, MenuButton, MenuList, MenuItem, Container } from "@chakra-ui/react"
import NavBar from "/components/NavBar"
import RandomTopAnime from "/components/RandomTopAnime"
import HomeTypeButtons from "/components/HomeTypeButtons"
import AnimeCard from "/components/AnimeCard"
import AnimeSelection from "/components/AnimeSelection"
import { useRouter } from 'next/router'

function MyApp({ data }){
    const animes = JSON.parse(data)
    const { asPath } = useRouter();
    const searchedAnime = decodeURI(asPath.split("/")[2]).replace(/-/g, " ")

    console.log(animes);

    return (
        <div>
            <NavBar/>
            <AnimeSelection/>

            <Box textTransform="capitalize" color="#96A7AF" fontWeight="500" background="#3B3E49" borderRadius="12" width="300px" height="45px" left="70px" top="90px" position="absolute">
                <Center paddingTop="10px">
                    <Text isTruncated>{searchedAnime}</Text>
                </Center>
            </Box>

            <SimpleGrid position="absolute" top="145px" columns={5} spacingX="30px">
                {Object.keys(animes).map((anime) => (
                    <AnimeCard name={animes[anime]["anime_name"]} imgUrl={animes[anime]["anime_image"]} animeID={animes[anime]["anime_id"]} rating={ typeof animes[anime]["rating"] == "undefined" ? "???" : animes[anime]["rating"] }/>
                ))}
            </SimpleGrid>
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