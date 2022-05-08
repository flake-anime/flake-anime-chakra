import { Box, Center, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react"
import { TriangleDownIcon } from "@chakra-ui/icons"
import { useState, useEffect } from "react";

function DefaultPlayer({ width, height }){
    const [iframeWidth, setWidth] = useState(0);

    setTimeout(function(){
        setWidth(window.innerWidth / 1.6);        
    }, 1000);

    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            setWidth(window.innerWidth / 1.6)
        })
    }, [])

    return (
        <Box cursor="pointer" background="dark.buttonbackground" borderRadius="8px" width={iframeWidth} height="562.5px" top="0px" position="absolute">
            <Center paddingTop={`calc(562.5px / 2.7)`}>
                <TriangleDownIcon color="#ED64A6" width="90px" transform="rotate(-90deg)" height="90px"/>
            </Center>

            <Box cursor="pointer" background="#C4C4C4" borderRadius="0 0 8px 8px" width={iframeWidth} height="25px" bottom="0px" position="absolute">
                <TriangleDownIcon color="#ED64A6" height="15px" bottom="6px" left="5px" transform="rotate(-90deg)" position="absolute"/>
                
                <Slider aria-label="slider-ex-1" width={`calc(${iframeWidth}px - 40px)`} position="absolute" top="1px" left="25px" defaultValue={30}>
                    <SliderTrack background="#A8A8A8" height="7px">
                        <SliderFilledTrack background="#ED64A6" />
                    </SliderTrack>
                    <SliderThumb/>
                </Slider>
            </Box>
        </Box>

        // <Box key="player" width={width} height={height} borderRadius={8} overflow="hidden">
        //     <iframe width={width} height={height} allowFullScreen src={"https://proxy-server-flake-anime.herokuapp.com/player?player_link=" + episodeLink}></iframe>
        // </Box>
    )
}

export default DefaultPlayer