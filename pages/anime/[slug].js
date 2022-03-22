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
    const episodes = JSON.parse(data);
    const { asPath } = useRouter();
    const anime_id = decodeURI(asPath.split("/")[2]).replace(/-/g, " ");
    const url = decodeURIComponent(episodes[0]["src"].replace("/stream?url=", ""));

    console.log(url);

    return (
        <div width="100%" height="100%">
            <head>
                <script src="https://cdn.plyr.io/3.6.12/plyr.js"></script>
                <link rel="stylesheet" href="https://cdn.plyr.io/3.6.12/plyr.css" />
            </head>

            <video id="player" playsinline controls>
                <source src={url} type="video/mp4" />
            </video>

            <Script>
                var player = new Plyr("#player");
            </Script>
        </div>
    )
}

export async function getServerSideProps(context){
    const res = await fetch(`https://aniflake-proxy-server.herokuapp.com/get_streaming_sources?anime_id=death-note&eps_number=1`)
    const newData = await res.text()
    const data = [newData]

    return { props: {data} }
  }

export default MyApp