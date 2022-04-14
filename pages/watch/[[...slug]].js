import { Box, Center, Image, Text, SimpleGrid, Select, Checkbox, Button, IconButton, Input, Tag, TagLabel, Menu, MenuButton, MenuList, MenuItem, Container } from "@chakra-ui/react"
import NavBar from "/components/NavBar"
import Player from "/components/Player"
import { useRouter } from "next/router"
import { IoFolderOpenSharp } from "react-icons/io5"

function MyApp({ data }){
    const details = JSON.parse(`[${data}]`);
    const genres = details[0]["genre"];
    const episodes = details[0]["total_episodes"];
    let episodeArray = []
    const { asPath } = useRouter();
    const searchedAnime = decodeURI(asPath.split("/")[2]).replace(/-/g, " ");

    console.log(asPath.query.slug);

    for(let i = 0; i < episodes; i++){
        episodeArray.push(i);
    }

    return (
        <div>
            <NavBar/>
            <Player/>

            <Box position="absolute" width="470px" height="200px" background="#3B3E49" borderRadius="8px" right="30px" top="95px">
                <Box padding="15px" position="absolute">
                    <IoFolderOpenSharp position="relative" size={22} color="#C4C4C4"/>
                </Box>

                <Text paddingRight="15px" color="#ffffff" noOfLines={1} textTransform="capitalize" position="absolute" top="14px" left="42px" fontWeight="500">{details[0]["anime_name"]}</Text>
                <Text color="#ffffff" paddingRight="15px" fontSize="12px" noOfLines={5} textTransform="capitalize" position="absolute" top="50px" left="15px" fontWeight="regular">{details[0]["plot_summary"]}</Text>
            
                <SimpleGrid overflow="hidden" position="absolute" display="flex" justifyContent="center" bottom="15px" left="15px" color="white" rows={3} spacingX="15px">
                    {Object.keys(genres).map((genre) => (
                        <Tag background="#494D5A" color="white" height="30px" borderRadius="25px" paddingLeft="20px" paddingRight="20px" fontWeight="regular">{genres[genre].trim()}</Tag>
                    ))}
                </SimpleGrid>
            </Box>

            <Box position="absolute" width="470px" height="200px" background="#3B3E49" borderRadius="8px" right="30px" top="320px">
                <Box padding="15px" position="absolute">
                    <IoFolderOpenSharp position="relative" size={22} color="#C4C4C4"/>
                </Box>

                <Text paddingRight="15px" color="#ffffff" noOfLines={1} textTransform="capitalize" position="absolute" top="14px" left="42px" fontWeight="500">Episodes</Text>
            
                <SimpleGrid left="15px" top="50px" columns={8} position="absolute" spacingX="17px" spacingY="10px">
                    {Object.keys(episodeArray).map((episodeNum) => (
                        <Button _hover={{ background: "#f4a0c8", color: "white" }} background="#494D5A" _active={{ bg: "#ED64A6", color: "white" }} color="white" width="40px" height="35px">{parseInt(episodeNum)+1}</Button>
                    ))}
                </SimpleGrid>
            </Box>
        </div>
    )
}
//<Tag background="#494D5A" color="white" height="30px" borderRadius="25px" fontWeight="regular">{genres[genre]}</Tag>

export async function getServerSideProps(context){
    const res = await fetch(`https://aniflake-proxy-server.herokuapp.com/anime_detail?anime_id=${context.params.slug}`)
    const data = await res.text()

    return { props: {data} }
}

export default MyApp