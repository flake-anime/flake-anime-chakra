import { Box, Center, Text, SimpleGrid } from "@chakra-ui/react";
import NavBar from "/components/NavBar";
import RandomTopAnime from "/components/RandomTopAnime";
import HomeTypeButtons from "/components/HomeTypeButtons";
import AnimeCard from "/components/AnimeCard";
import AnimeSelection from "/components/AnimeSelection";
import { useRouter } from 'next/router';
import Head from "next/head";

function MyApp({ data }){
    const animes = JSON.parse(data)
    const { asPath } = useRouter();
    const searchedAnime = decodeURI(asPath.split("/")[2]).replace(/-/g, " ")

    return (
        <div>
            <Head>
                <title>Searching Results for {searchedAnime}</title>
                <meta charSet="UTF-8"/>
                <meta property="og:title" content={`Showing Results for ${searchedAnime}`}/>
                <meta name="twitter:title" content={`Showing Results for ${searchedAnime}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`https://flake-anime.netlify.app/search/${searchedAnime.replace(" ", /-/g)}`}/>
                <meta name="description" content={`Showing Results for ${searchedAnime}`}/>
                <meta name="twitter:description" content={`Showing Results for ${searchedAnime}`}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image" content="https://i.imgur.com/MexfEp6.png"/>
                <meta name="twitter:site" content="@discord"/>
                <meta name="viewport" content="width=device-width, initial-scale=0.55"/>
            </Head>
        
            <NavBar/>

            <Box textTransform="capitalize" paddingLeft="15px" paddingRight="15px" color="#96A7AF" fontWeight="500" background="dark.buttonbackground" borderRadius="5" width="500px" height="45px" left="70px" top="90px" position="absolute">
                <Center paddingTop="10px">
                    <Text isTruncated>Showing {animes.length} Results for: {searchedAnime}</Text>
                </Center>
            </Box>

            <SimpleGrid position="absolute" top="145px" style={{ height: "100vh", width: "100vw", display: "flex", flexWrap: "wrap" }} spacingX="15px">
                {Object.keys(animes).map((anime) => (
                    <AnimeCard key={anime} totalEpisodes={animes[anime]["total_episodes"]} type={animes[anime]["type"]} name={animes[anime]["anime_name"]} imgUrl={animes[anime]["cover"]} animeID={animes[anime]["gogo_id"]} rating={ typeof animes[anime]["rating"] == "undefined" ? "???" : animes[anime]["score"] }/>
                ))}
            </SimpleGrid>
        </div>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`https://flake-anime-backend-server-two.herokuapp.com/search?q=${context.params.slug}`)
    const newData = await res.text()
    const data = [newData]

    return { props: {data} }
}

export default MyApp