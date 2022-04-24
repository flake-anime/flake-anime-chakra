import { Box, Image, SlideFade, Text } from "@chakra-ui/react"
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { useState } from "react";

function RandomTopAnime(){
    const [hovered, setHovered] = useState(0);
    const [showingCard, setShowingCard] = useState(0);
    const topAnimes = [0, 1, 2];

    return (
        <Box key={topAnimes[0]} className="className" cursor="pointer">
            <Box opacity={showingCard == topAnimes[0] ? "1" : "0"} zIndex={showingCard == 0 ? "1" : "0"} overflow="hidden" width="1100px" borderRadius={12} marginTop="95px" marginLeft="70px" height="175px" position="absolute">
                <Box className="0" position="absolute" overflow="hidden" onMouseEnter={() => {setHovered(0.2)}} onMouseLeave={() => {setHovered(0)}} _hover={{  background: "dark.buttonhoverbackground" }} style={{ transition: "0.2s ease-in-out"}} top="0px" left="0px" bg="dark.buttonbackground" width={[0, 500, 700, 900, 1100]} height="175px" borderRadius="12px">
                    <Text fontWeight="medium" color="dark.text" position="absolute" top="15px" left="165px" fontSize="20px">Banish from the Hero&apos;s Party</Text>
                {/* Font Size: 14 */}
                    <Text color="dark.text" position="absolute" top="60px" left="165px" fontSize="14px">
                        Miko is a typical high school student whose life turns upside down when she suddenly starts to see gruesome and hideous monsters. Despite being completely terrified, Miko carries on with her daily life, pretending not to notice the horrors that surround her.
                    </Text>

                    <StarIcon position="absolute" color="dark.pink" w={4} h={4} bottom="15px" left="165px"/>
                    <Text fontWeight="500" color="dark.text" position="absolute" bottom="13px" left="190px" fontSize="14px">6.95</Text>

                    {/* onClick={(e) => {e.target.parentNode}} */}
                    <ChevronLeftIcon onClick={(e) => {

                        // e.target.parentNode.className[0] == "0" ? e.target.parentNode.style.left="-100%" : console.log("Error clicking button");

                        setTimeout(function(){
                            topAnimes.includes(showingCard-1) ? setShowingCard(showingCard-1) : setShowingCard(topAnimes.length - 1);
                            // console.log(showingCard);
                        }, 400)

                    }} _hover={{ color: "dark.pink" }} style={{ transition: "0.2s" }} position="absolute" color="dark.text" w={6} h={6} bottom="15px" right="40px"/>
                    <ChevronRightIcon onClick={(e) => {

                        // e.target.parentNode.className[0] == "0" ? e.target.parentNode.style.left="100%" : console.log("Error clicking button");

                        setTimeout(function(){
                            topAnimes.includes(showingCard+1) ? setShowingCard(showingCard+1) : setShowingCard(topAnimes[0]);
                            // console.log(showingCard);
                        }, 400)

                    }} _hover={{ color: "dark.pink" }} style={{ transition: "0.2s" }} position="absolute" color="dark.text" w={6} h={6} bottom="15px" right="20px"/>

                    <Image key={topAnimes[0]} alt="image" fallbackSrc="https://i.imgur.com/dnIzpyH.png" height="200px" width="140px" src="https://gogocdn.net/cover/shin-no-nakama-ja-nai-to-yuusha-no-party-wo-oidasareta-node-henkyou-de-slow-life-suru-koto-ni-shimashita.png"></Image>
                </Box>
            </Box>


            <Box key={topAnimes[1]} opacity={showingCard == topAnimes[1] ? "1" : "0"} zIndex={0} overflow="hidden" width="1100px" borderRadius={12} marginTop="95px" marginLeft="70px" height="175px" position="absolute">
                <Box className="0" position="absolute" overflow="hidden" onMouseEnter={() => {setHovered(0.2)}} onMouseLeave={() => {setHovered(0)}} _hover={{  background: "dark.buttonhoverbackground" }} style={{ transition: "0.4s ease-in-out"}} top="0px" left="0px" bg="dark.buttonbackground" width={[0, 500, 700, 900, 1100]} height="175px" borderRadius="12px">
                    <Text fontWeight="medium" color="dark.text" position="absolute" top="15px" left="165px" fontSize="20px">Tate no Yuusha no Nariagari Season 2</Text>

                    <Text color="dark.text" position="absolute" top="60px" left="165px" fontSize="14px">
                        Second season of Tate no Yuusha no Nariagari. As the Shield Hero, the weakest of the heroes, all is not as it seems. Naofumi is soon alone, penniless, and betrayed. With no one to turn to, and nowhere to run, he is left with only his shield. Now, Naofumi must rise to become the legendary Shield Hero and save the world!
                    </Text>

                    <StarIcon position="absolute" color="dark.pink" w={4} h={4} bottom="15px" left="165px"/>
                    <Text fontWeight="500" color="dark.text" position="absolute" bottom="13px" left="190px" fontSize="14px">6.95</Text>

                    {/* onClick={(e) => {e.target.parentNode}} */}
                    <ChevronLeftIcon onClick={(e) => {

                        // e.target.parentNode.className[0] == "0" ? e.target.parentNode.style.left="-100%" : console.log("Error clicking button");

                        setTimeout(function(){
                            topAnimes.includes(showingCard-1) ? setShowingCard(showingCard-1) : setShowingCard(topAnimes.length - 1);
                            // console.log(showingCard);
                        }, 100)

                    }} _hover={{ color: "dark.pink" }} style={{ transition: "0.2s" }} position="absolute" color="dark.text" w={6} h={6} bottom="15px" right="40px"/>
                    <ChevronRightIcon onClick={(e) => {

                        // e.target.parentNode.className[0] == "0" ? e.target.parentNode.style.left="100%" : console.log("Error clicking button");
                        
                        setTimeout(function(){
                            topAnimes.includes(showingCard+1) ? setShowingCard(showingCard+1) : setShowingCard(topAnimes[0]);
                            // console.log(showingCard);
                        }, 100)

                    }} _hover={{ color: "dark.pink" }} style={{ transition: "0.2s" }} position="absolute" color="dark.text" w={6} h={6} bottom="15px" right="20px"/>

                    <Image key={topAnimes[1]} alt="image" fallbackSrc="https://i.imgur.com/dnIzpyH.png" height="200px" width="140px" src="https://cachecow.eu/min/mal/1021/120882.jpg"></Image>
                </Box>
            </Box>


            <Box key={topAnimes[2]} opacity={showingCard == topAnimes[2] ? "1" : "0"} zIndex={0} overflow="hidden" width="1100px" borderRadius={12} marginTop="95px" marginLeft="70px" height="175px" position="absolute">
                <Box className="0" position="absolute" overflow="hidden" onMouseEnter={() => {setHovered(0.2)}} onMouseLeave={() => {setHovered(0)}} _hover={{  background: "dark.buttonhoverbackground" }} style={{ transition: "0.4s ease-in-out"}} top="0px" left="0px" bg="dark.buttonbackground" width={[0, 500, 700, 900, 1100]} height="175px" borderRadius="12px">
                    <Text fontWeight="medium" color="dark.text" position="absolute" top="15px" left="165px" fontSize="20px">Aharen-san wa Hakarenai</Text>

                    <Text color="dark.text" position="absolute" top="60px" left="165px" fontSize="14px">
                        Daily life of the short and quiet Reina Aharen and Raidou who sits next to her. Aharen is not so good at gauging the distance between people. One day, when Raidou picked up the eraser that Aharen had dropped, the distance between them suddenly became uncomfortably close.
                    </Text>

                    <StarIcon position="absolute" color="dark.pink" w={4} h={4} bottom="15px" left="165px"/>
                    <Text fontWeight="500" color="dark.text" position="absolute" bottom="13px" left="190px" fontSize="14px">6.95</Text>

                    {/* onClick={(e) => {e.target.parentNode}} */}
                    <ChevronLeftIcon onClick={(e) => {

                        // e.target.parentNode.className[0] == "0" ? e.target.parentNode.style.left="-100%" : console.log("Error clicking button");

                        setTimeout(function(){
                            topAnimes.includes(showingCard-1) ? setShowingCard(showingCard-1) : setShowingCard(topAnimes.length - 1);
                            // console.log(showingCard);
                        }, 100)

                    }} _hover={{ color: "dark.pink" }} style={{ transition: "0.2s" }} position="absolute" color="dark.text" w={6} h={6} bottom="15px" right="40px"/>
                    <ChevronRightIcon onClick={(e) => {

                        // e.target.parentNode.className[0] == "0" ? e.target.parentNode.style.left="100%" : console.log("Error clicking button");
                        
                        setTimeout(function(){
                            topAnimes.includes(showingCard+1) ? setShowingCard(showingCard+1) : setShowingCard(topAnimes[0]);
                            // console.log(showingCard);
                        }, 100)

                    }} _hover={{ color: "dark.pink" }} style={{ transition: "0.2s" }} position="absolute" color="dark.text" w={6} h={6} bottom="15px" right="20px"/>

                    <Image key={topAnimes[2]} alt="image" fallbackSrc="https://i.imgur.com/dnIzpyH.png" height="200px" width="140px" src="https://cachecow.eu/min/mal/1612/120636.jpg"></Image>
                </Box>
            </Box>
        </Box>
    )
}

export default RandomTopAnime