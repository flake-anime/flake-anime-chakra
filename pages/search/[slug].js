import { Box, Center, Text, SimpleGrid } from "@chakra-ui/react"
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

    return (
        <div>
            <NavBar/>

            <Box textTransform="capitalize" paddingLeft="15px" paddingRight="15px" color="#96A7AF" fontWeight="500" background="dark.buttonbackground" borderRadius="5" width="300px" height="45px" left="70px" top="90px" position="absolute">
                <Center paddingTop="10px">
                    <Text isTruncated>Showing {animes.length} Results for: {searchedAnime}</Text>
                </Center>
            </Box>

            <SimpleGrid position="absolute" top="145px" columns={[1, 2, 3, 5, 6, 7]} spacingX="15px">
                {Object.keys(animes).map((anime) => (
                    <AnimeCard key={anime} totalEpisodes={animes[anime]["total_episodes"]} type={animes[anime]["type"]} name={animes[anime]["anime_name"]} imgUrl={animes[anime]["cover"]} animeID={animes[anime]["gogo_id"]} rating={ typeof animes[anime]["rating"] == "undefined" ? "???" : animes[anime]["score"] }/>
                ))}
            </SimpleGrid>
        </div>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`https://backend-flake-anime.herokuapp.com/search?q=${context.params.slug}`)
    const newData = await res.text()
    const data = [newData]

    return { props: {data} }
}

export default MyApp