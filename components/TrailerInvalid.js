import { Box, Center, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react"
import { TriangleDownIcon } from "@chakra-ui/icons"

function DefaultPlayer({ width, height }){
    return (
        <Box cursor="pointer" background="dark.buttonbackground" borderRadius="8px" width={width} height={height} top="95px" position="absolute">
            <Box width={width} height="30px" borderRadius="8px 8px 0 0" background="dark.buttonhoverbackground" position="absolute" top="0px">
                <Center>
                    <Text paddingTop="2px" fontSize="16" color="dark.text" fontWeight="semibold">Trailer Not Found</Text>
                </Center>
            </Box>
            <Center paddingTop={`calc(${height} / 2.7)`}>
                <TriangleDownIcon color="#ED64A6" width="90px" transform="rotate(-90deg)" height="90px"/>
            </Center>

            <Box cursor="pointer" background="#C4C4C4" borderRadius="0 0 8px 8px" width={width} height="25px" bottom="0px" position="absolute">
                <TriangleDownIcon color="#ED64A6" height="15px" bottom="6px" left="5px" transform="rotate(-90deg)" position="absolute"/>
                
                <Slider aria-label="slider-ex-1" width={`calc(${width} - 40px)`} position="absolute" top="1px" left="25px" defaultValue={30}>
                    <SliderTrack background="#A8A8A8" height="7px">
                        <SliderFilledTrack background="#ED64A6" />
                    </SliderTrack>
                    <SliderThumb/>
                </Slider>
            </Box>
        </Box>
    )
}

export default DefaultPlayer