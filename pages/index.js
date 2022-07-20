import { SimpleGrid, Image, Box } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import RandomTopAnime from "../components/RandomTopAnime"
import HomeTypeButtons from "../components/HomeTypeButtons"
import AnimeCard from "../components/AnimeCard"
import AnimeSelection from "../components/AnimeSelection"
import DiscordServer from "../components/DiscordServer"
import Head from "next/head"
import { useState, useEffect } from "react";

function MyApp(){
    // useEffect(()=> {
    //     if (window.innerWidth <= 478){
    //         let cards = document.getElementById("simplegrid").getElementsByTagName("div");

    //         for(let i = 0; i < cards.length; i++){
    //             cards[i].style.transform = "scale(0.7)";
                
    //             // images[i].style.transform = "scale(1)";
    //         }
    //     } else {
    //         let cards = document.getElementById("simplegrid").getElementsByTagName("div");

    //         for(let i = 0; i < cards.length; i++){
    //             cards[i].style.transform = "scale(1)";
    //         }
    //     }

    //     window.addEventListener("resize", ()=> {
    //         if (window.innerWidth <= 478){
    //             let cards = document.getElementById("simplegrid").getElementsByTagName("div");

    //             for(let i = 0; i < cards.length; i++){
    //                 cards[i].style.transform = "scale(0.7)";
    //             }
    //         } else {
    //             let cards = document.getElementById("simplegrid").getElementsByTagName("div");

    //             for(let i = 0; i < cards.length; i++){
    //                 cards[i].style.transform = "scale(1)";
    //             }
    //         }
    //     });
    // }, [])
    

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
                <meta name="viewport" content="width=device-width, initial-scale=0.55"></meta>
            </Head>
            
            {/* <Image className="background" src="https://i.imgur.com/23Yxiwx.jpg"/> */}
            {/* <Image className="background" src="https://wallpaperaccess.com/full/6319352.jpg"/> */}
            <Image className="background" src="https://www.fanbolt.com/storage/2021/08/anime-iphone-wallpaper-800x500.jpg"/>

            <NavBar/>
            <RandomTopAnime/>
            <HomeTypeButtons/>
            {/* <DiscordServer/> */}

            
            <SimpleGrid id="simplegrid" position="absolute" top="360px" spacingX="30px" style={{ height: "50vh", width: "calc(100vw - 50px)", display: "flex", flexWrap: "wrap" }}>
                <AnimeCard rating="Soon" totalEpisodes="100" imgUrl="https://gogocdn.net/images/anime/One-piece.jpg" name="One Piece" animeID="one-piece"/>
                <AnimeCard rating="Soon" totalEpisodes="6" imgUrl="https://gogocdn.net/cover/spy-x-family.png" name="Spy X Family" animeID="spy-x-family"/>
                <AnimeCard rating="Soon" totalEpisodes="100" imgUrl="https://gogocdn.net/cover/boruto-naruto-next-generations.png" name="Boruto: Naruto Next Generations" animeID="boruto-naruto-next-generations"/>
                <AnimeCard rating="Soon" totalEpisodes="3" imgUrl="https://gogocdn.net/cover/tate-no-yuusha-no-nariagari-2nd-season.png" name="Tate No Yuusha Np Nariagrai 2nd Season" animeID="tate-no-yuusha-no-nariagari-2nd-season"/>
                <AnimeCard rating="Soon" totalEpisodes="2" imgUrl="https://gogocdn.net/cover/kaguya-sama-wa-kokurasetai-ultra-romantic.png" name="Kaguya-sama wa Kokurasetai: Ultra Romantic" animeID="kaguya-sama-wa-kokurasetai-ultra-romantic"/>
                <AnimeCard rating="Soon" totalEpisodes="2" imgUrl="https://gogocdn.net/cover/kawaii-dake-ja-nai-shikimori-san.png" name="Kawaii dake ja Nai Shikimori-san" animeID="kawaii-dake-ja-nai-shikimori-san"/>
                <AnimeCard rating="Soon" totalEpisodes="100" imgUrl="https://gogocdn.net/images/anime/detective-conan.jpg" name="Detective Conan" animeID="detective-conan"/>
                <AnimeCard rating="Soon" totalEpisodes="2" imgUrl="https://gogocdn.net/cover/komi-san-wa-comyushou-desu-2nd-season.png" name="Komi-san wa, Comyushou desu. 2nd Season" animeID="komi-san-wa-comyushou-desu-2nd-season"/>
                <AnimeCard rating="Soon" totalEpisodes="3" imgUrl="https://gogocdn.net/cover/aharen-san-wa-hakarenai.png" name="Aharen-san wa Hakarenai" animeID="aharen-san-wa-hakarenai"/>
                <AnimeCard rating="Soon" totalEpisodes="2" imgUrl="https://gogocdn.net/cover/summertime-render.png" name="Summertime Render" animeID="summertime-render"/>
                <AnimeCard rating="Soon" totalEpisodes="3" imgUrl="https://gogocdn.net/cover/tomodachi-game.png" name="Tomodachi Game" animeID="tomodachi-game"/>
                <AnimeCard rating="Soon" totalEpisodes="2" imgUrl="https://gogocdn.net/cover/date-a-live-iv.png" name="Date A Live IV" animeID="date-a-live-iv"/>
            </SimpleGrid>
        </div>
    )
}

export default MyApp
