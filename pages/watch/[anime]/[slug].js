import { Box, Text, SimpleGrid,  Button, Tag } from "@chakra-ui/react"
import NavBar from "/components/NavBar"
import Player from "/components/Player"
import { useRouter } from "next/router"
import { IoFolderOpenSharp } from "react-icons/io5"
import { useState } from "react";

function MyApp({ details, episodes }){
    const data = JSON.parse(details);
    const episodeData = JSON.parse(episodes);
    const genres = data["genres"];
    const { asPath } = useRouter();
    const router = useRouter()
    const searchedAnime = decodeURI(asPath.split("/")[2]);
    const selectedEpisode = asPath.split("/")[3];

    console.log(episodeData);
    console.log(episodeData[episodeData.length-selectedEpisode])

    function showDifEpisode(e){
        const episodeNum = e.target.className.split(" ")[1];
        e.preventDefault();
    
        if(episodeNum == selectedEpisode){
            console.log("Same Episode");
        } else {
            router.push(`/watch/${searchedAnime}/${episodeNum}`);
        }
    }

    return (
        <div>
            <NavBar/>

            <Box left="70px" position="absolute">
                <Player width="1000px" height="550px"/>
            </Box>

            <Box position="absolute" width="470px" height="200px" background="dark.buttonbackground" borderRadius="8px" right="30px" top="95px">
                <Box padding="15px" position="absolute">
                    <IoFolderOpenSharp position="relative" size={22} color="#C4C4C4"/>
                </Box>

                <Text paddingRight="15px" color="#ffffff" noOfLines={1} textTransform="capitalize" position="absolute" top="14px" left="42px" fontWeight="500">{data["anime_name"]}</Text>
                <Text color="#ffffff" paddingRight="15px" fontSize="12px" noOfLines={5} textTransform="capitalize" position="absolute" top="50px" left="15px" fontWeight="regular">{data["plot_summary"]}</Text>
            
                <Box position="relative" width="470px" height="200px" borderRadius="8px" right="0px" top="0px" overflow="hidden">
                    <SimpleGrid position="absolute" display="flex" justifyContent="center" bottom="15px" left="15px" color="white" columns={1} rows={1} spacingX="15px">
                        {Object.keys(genres).map((genre) => (
                            <Tag key={genre} background="dark.pink" color="white" height="30px" borderRadius="25px" paddingLeft="20px" paddingRight="20px" fontWeight="regular">{genres[genre].trim()}</Tag>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>

            <Box position="absolute" width="470px" height={`calc(50px + ${(Math.ceil(episodeData.length / 10)) * 60}px)`} background="dark.buttonbackground" borderRadius="8px" right="30px" top="320px">
                <Box padding="15px" position="absolute">
                    <IoFolderOpenSharp position="relative" size={22} color="#C4C4C4"/>
                </Box>

                <Text paddingRight="15px" color="#ffffff" noOfLines={1} textTransform="capitalize" position="absolute" top="14px" left="42px" fontWeight="500">Episodes</Text>
            
                <SimpleGrid left="15px" top="50px" columns={8} position="absolute" spacingX="17px" spacingY="10px">
                    {Object.keys(episodeData).map((episodeNum) => (
                        <Button key={parseInt(episodeNum)+1} className={parseInt(episodeNum)+1} _focus={{ bg: "dark.buttonfocus" }} isActive={selectedEpisode == parseInt(episodeNum)+1 ? true : false} onClick={(e) => {showDifEpisode(e)}} _active={{ bg: "dark.pink", color: "white" }} _hover={{ background: "dark.buttonfocus", color: "white" }} background="dark.buttonhoverbackground" _active={{ bg: "#ED64A6", color: "white" }} color="white" width="40px" height="35px">{parseInt(episodeNum)+1}</Button>
                    ))}
                </SimpleGrid>
            </Box>
        </div>
    )
}
//<Tag background="#494D5A" color="white" height="30px" borderRadius="25px" fontWeight="regular">{genres[genre]}</Tag>

export async function getServerSideProps(context){
    const res = await fetch(`https://backend-flake-anime.herokuapp.com/detail?gogo_id=${context.params.anime}`)
    const resEpisodes = await fetch(`https://backend-flake-anime.herokuapp.com/get_episodes?gogo_id=${context.params.anime}`)
    const details = await res.text()
    const episodes = await resEpisodes.text()

    return { props: {details, episodes} }
}

export default MyApp