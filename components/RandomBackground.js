import { Box, Image, Text, IconButton, Portal, Input, Button, useControllableProp, useControllableState } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { useRouter } from "next/router"
import Script from "next/script"

function RandomBackground(){
    const background = ["https://wallpaperaccess.com/full/39033.png",
                        "https://wallpapercave.com/wp/wp5104313.jpg",
                        "https://wallpaperaccess.com/full/10817.jpg",
                        "https://wallpapercave.com/wp/wp5342493.jpg",
                        "https://wallpapercave.com/wp/wp4474608.png",
                        "https://wallpaperaccess.com/full/471571.png",
                        "https://www.fanbolt.com/storage/2021/08/anime-iphone-wallpaper-800x500.jpg",
                        "https://cdn.wallpapersafari.com/67/80/9qIrnC.jpg"
                    ]

    return (
        <Box postion="fixed" style={{zIndex: "-1"}}>
            <Image opacity="0.2" src={background[Math.floor(Math.random()*background.length)]} width="100%" position="relative"/>
            <Box top="0px" width="100%" height="100%"  bgGradient="linear(to-b, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 1) 90%)" position="absolute" />
            {/* <Box top="0px" width="10%" left="0px" height="100%"  bgGradient="linear(to-l, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 1) 75%)" position="absolute" />
            <Box top="0px" width="10%" right="0px" height="100%"  bgGradient="linear(to-r, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 1) 75%)" position="absolute" /> */}
        </Box>
    )
}

export default RandomBackground