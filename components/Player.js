import { Box, Center, Slider, SliderTrack, SliderFilledTrack, SliderThumb, MdGraphicEq, Image, Text, IconButton, Portal, Input, Button, useControllableProp, useControllableState, SimpleGrid, Stack } from "@chakra-ui/react"
import { TriangleDownIcon } from "@chakra-ui/icons"

function Player(){
    return (
        <Box cursor="pointer" background="#3B3E49" borderRadius="8px" width="1000px" height="550px" left="70px" top="95px" position="absolute">
            <Center paddingTop="225px">
                <TriangleDownIcon color="#ED64A6" width="90px" transform="rotate(-90deg)" height="90px"/>
            </Center>

            <Box cursor="pointer" background="#C4C4C4" borderRadius="0 0 8px 8px" width="1000px" height="25px" bottom="0px" position="absolute">
                <TriangleDownIcon color="#ED64A6" height="15px" bottom="6px" left="5px" transform="rotate(-90deg)" position="absolute"/>
                
                <Slider aria-label="slider-ex-1" width="960px" position="absolute" top="1px" left="25px" defaultValue={30}>
                    <SliderTrack background="#A8A8A8" height="7px">
                        <SliderFilledTrack background="#ED64A6" />
                    </SliderTrack>
                    <SliderThumb/>
                </Slider>
            </Box>
        </Box>
    )
}

export default Player