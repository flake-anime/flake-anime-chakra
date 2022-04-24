import { Text, Center } from "@chakra-ui/react"
import React, { Component, useEffect } from "react";
import Head from "next/head"

function MyApp(){
    useEffect(() => {
        window.location.href = "https://discord.gg/hvYDKnpbdd";
    }, []);

    return (
        <Center>
            <Head>
                <title>Flake Anime Discord</title>
                <meta charset="UTF-8"/>
                <meta property="og:title" content="Flake Anime Discord"/>
                <meta name="twitter:title" content="Flake Anime Discord"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://flake-anime.netlify.app/discord"/>
                <meta name="description" content="Watch FREE UNLIMITED anime WITHOUT ADS in HD RESOLUTION and much more!"/>
                <meta name="twitter:description" content="Watch FREE UNLIMITED anime WITHOUT ADS in HD RESOLUTION and much more!"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:image" content="https://i.imgur.com/MexfEp6.png"/>
                <meta name="twitter:site" content="@discord"/>
            </Head>

            <Text fontSize="22" top="10px" position="absolute" color="dark.text" lineHeight={1.4}>
                Please wait, you are being redirected
            </Text>
        </Center>
    )
}

export default MyApp
