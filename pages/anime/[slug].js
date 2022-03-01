import { Box, Center, Image, Text, SimpleGrid, Select, Checkbox, Button, IconButton, Input, Tag, TagLabel, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import Script from "next/script"
import AnimeCard from "/components/AnimeCard"
import NavBar from "/components/NavBar"
import WeeklyTopCard from "/components/WeeklyTopCard"
import AnimeSelection from "/components/AnimeSelection"
import RandomBackground from "/components/RandomBackground"

function MyApp(){
    const { asPath } = useRouter();
    const anime_id = decodeURI(asPath.split("/")[2]).replace(/-/g, " ")

    return (
        <div width="100%" height="100%">
            <head>
                <script src="https://cdn.plyr.io/3.6.12/plyr.js"/>
                <link rel="stylesheet" href="https://cdn.plyr.io/3.6.12/plyr.css" />
            </head>

            <NavBar/>

            <Box postion="fixed" style={{zIndex: "-1"}}>
                <Image src="https://i.pinimg.com/originals/32/4a/51/324a511fb2d414841cf6458088aa5d35.jpg" width="100%" position="relative"/>
                <Box top="0px" width="100%" height="100%" bgGradient="linear(to-b, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 1) 55%)" position="absolute" />
            </Box>

            <Box width="600px" top="150px" left="0" right="0" margin="auto" position="absolute" style={{ zIndex: "1" }}>
                <iframe width="600px" height="400px" src="https://aniflake-proxy-server.herokuapp.com/player?anime_id=death-note&eps_number=37" allowfullscreen/>
            </Box>

            <Script>
                {/* var player = new Plyr("#player"); */}
            </Script>
        </div>
    )
}

export default MyApp