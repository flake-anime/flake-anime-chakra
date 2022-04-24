import { SimpleGrid } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import RandomTopAnime from "../components/RandomTopAnime"
import HomeTypeButtons from "../components/HomeTypeButtons"
import AnimeCard from "../components/AnimeCard"
import AnimeSelection from "../components/AnimeSelection"
import DiscordServer from "../components/DiscordServer"
import Head from "next/head"

function MyApp(){
  return (
    <div>
        <Head>
            <title>Flake Anime</title>
            <meta charset="UTF-8"/>
            <meta property="og:title" content="Flake Anime"/>
            <meta name="twitter:title" content="Flake Anime"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://flake-anime.netlify.app/"/>
            <meta name="description" content="Enjoy HD anime for completely free - Subbed & Dubbed! No ads or anything else to worry about! "/>
            <meta name="twitter:description" content="Enjoy HD anime for completely free - Subbed & Dubbed! No ads or anything else to worry about!"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image" content="https://i.imgur.com/MexfEp6.png"/>
            <meta name="twitter:site" content="@discord"/>
        </Head>
        
        <NavBar/>
        <RandomTopAnime/>
        <HomeTypeButtons/>
        <DiscordServer/>

        <SimpleGrid position="absolute" top="360px" columns={[1, 2, 3, 4, 5]} spacingX="30px">
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
            <AnimeCard imgUrl="https://cdn.myanimelist.net/images/anime/1126/108573.jpg?s=16fce010e7503040b413bb3d924279e8" name="The Misfit of Demon King Academy" rating="6.95" animeID="maou-gakuin-no-futekigousha-shijou-saikyou-no-maou-no-shiso-tensei-shite-shison-tachi-no-gakkou-e"/>
        </SimpleGrid>
    </div>
  )
}

export default MyApp
