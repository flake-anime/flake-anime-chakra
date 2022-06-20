import { SimpleGrid, Box } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import RandomTopAnime from "../components/RandomTopAnime"
import HomeTypeButtons from "../components/HomeTypeButtons"
import TestAnimeCard from "../components/TestAnimeCard"
import AnimeSelection from "../components/AnimeSelection"
import DiscordServer from "../components/DiscordServer"
import Head from "next/head"

function MyApp(){
  return (
    <div>
        <Head>
            <title>Flake Anime</title>
            <meta charSet="UTF-8"/>
            <meta property="og:title" content="Flake Anime"/>
            <meta name="twitter:title" content="Flake Anime"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://flake-anime.netlify.app/"/>
            <meta name="description" content="Enjoy HD anime for completely free - Subbed & Dubbed! No ads or anything else to worry about! "/>
            <meta name="twitter:description" content="Enjoy HD anime for completely free - Subbed & Dubbed! No ads or anything else to worry about!"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image" content="https://i.imgur.com/MexfEp6.png"/>
            <meta name="twitter:site" content="@discord"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

        <SimpleGrid className="row" columns={3} position="absolute" top="10px" spacingX="30px" style={{ height: "50vh", width: "calc(100vw - 50px)", display: "flex", flexWrap: "wrap" }}>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
            <Box className="column">
                <TestAnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            </Box>
        </SimpleGrid>
    </div>
  )
}

export default MyApp
