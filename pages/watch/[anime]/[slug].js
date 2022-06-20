import { Box, Text, SimpleGrid,  Button, Tag, Center, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "/components/NavBar";
import Player from "/components/Player";
import SidePlayer from "/components/SidePlayer";
import { useRouter } from "next/router";
import { IoFolderOpenSharp } from "react-icons/io5";
import Head from "next/head";
import { useState, useEffect } from "react";

function MyApp({ details, episodes }){
    const router = useRouter()
    const { asPath } = useRouter();
    const [boxWidth, setBoxWidth] = useState(0);
    const [boxOpacity, setBoxOpacity] = useState(0);

    useEffect(()=> {
        setBoxWidth(window.innerWidth / 3.4);
        setBoxOpacity(1);

        if (window.innerWidth <= 970){
            document.getElementById("sideBar").style.display = "none";
            document.getElementById("bottomBar").style.display = "block";
        } else {
            document.getElementById("bottomBar").style.display = "none";
            document.getElementById("sideBar").style.display = "block";
        }

        window.addEventListener('resize', ()=> {
            setBoxWidth(window.innerWidth / 3.4);

            if (window.innerWidth <= 970){
                document.getElementById("sideBar").style.display = "none";
                document.getElementById("bottomBar").style.display = "block";
            } else {
                document.getElementById("bottomBar").style.display = "none";
                document.getElementById("sideBar").style.display = "block";
            }
        });
    }, [])

    try {
        const data = JSON.parse(details);
        const episodeData = JSON.parse(episodes);
        const genres = data["genres"];
        const searchedAnime = decodeURI(asPath.split("/")[2]);
        const selectedEpisode = asPath.split("/")[3];
        const episodeLinks = episodeData[episodeData.length-selectedEpisode];
    
        let anime = searchedAnime.replace("-", " ").split(" ");
    
        for (let i = 0; i < anime.length; i++) {
            anime[i] = anime[i][0].toUpperCase() + anime[i].substr(1);
        }

        const titleAnime = anime.join(" ").replace("-", " ");
    
        // console.log(titleAnime);
        // console.log(episodeData);
        // console.log(episodeLinks);
        // console.log(encodeURIComponent(episodeLinks["player_link"]));
    
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
                <Head>
                    <title>{titleAnime.replace("-", "")} - Episode {selectedEpisode}</title>
                    <meta charSet="UTF-8"/>
                    <meta property="og:title" content={`${titleAnime.replace("-", "")} Episode ${selectedEpisode}`}/>
                    <meta name="twitter:title" content={`${titleAnime.replace("-", "")} Episode ${selectedEpisode}`}/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content={`https://flake-anime.netlify.app/${searchedAnime}/${selectedEpisode}`}/>
                    <meta name="description" content={data["plot_summary"]}/>
                    <meta name="twitter:description" content={data["plot_summary"]}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:image" content={data["cover"]}/>
                    <meta name="twitter:site" content="@discord"/>
                    <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                </Head>
    
                <NavBar/>
    
    
                <Box>
                    <Box id="sideBar" display="block">
                        <Box left="70px" top="95px" position="absolute">
                            <Player zIndex={1} episodeLink={encodeURIComponent(episodeLinks["player_link"])}/>
                        </Box>
            
                        {/* Top Box - 3.4 */}
                        <Box position="absolute" width={boxWidth} opacity={boxOpacity} height="200px" background="dark.buttonbackground" borderRadius="8px" right="30px" top="95px">
                            <Box padding="15px" position="absolute">
                                <IoFolderOpenSharp position="relative" size={22} color="#C4C4C4"/>
                            </Box>
            
                            <Text paddingRight="15px" color="#ffffff" noOfLines={1} textTransform="capitalize" position="absolute" top="14px" left="42px" fontWeight="500">{data["anime_name"]}</Text>
                            <Text color="#ffffff" paddingRight="15px" fontSize="12px" noOfLines={5} textTransform="capitalize" position="absolute" top="50px" left="15px" fontWeight="regular">{data["plot_summary"]}</Text>
                        
                            <Box position="relative" height="200px" borderRadius="8px" right="10px" top="0px" overflow="hidden">
                                <SimpleGrid position="absolute" display="flex" justifyContent="center" bottom="15px" left="15px" color="white" columns={1} rows={1}>
                                    {Object.keys(genres).map((genre) => (
                                        <Tag key={genre} position="relative" background="dark.pink" color="white" height="30px" borderRadius="25px" marginLeft="10px" paddingLeft="20px" paddingRight="20px" fontWeight="regular"><Text isTruncated>{genres[genre].trim()}</Text></Tag>
                                    ))}
                                </SimpleGrid>
                            </Box>
                        </Box>
            
                        <Box id="episodeBox" position="absolute" width={boxWidth} height={`calc(50px + ${(Math.ceil(episodeData.length / 10)) * 60}px)`} background="dark.buttonbackground" borderRadius="8px" right="30px" top="320px">
                            <Box padding="15px" position="absolute">
                                <IoFolderOpenSharp position="relative" size={22} color="#C4C4C4"/>
                            </Box>
            
                            <Text paddingRight="15px" color="#ffffff" noOfLines={1} textTransform="capitalize" position="absolute" top="14px" left="42px" fontWeight="500">Episodes</Text>
                        
                            <SimpleGrid left="15px" top="50px" columns={[4, 5, 6, 7, 8]} position="absolute" spacingX="17px" spacingY="10px">
                                {Object.keys(episodeData).map((episodeNum) => (
                                    <Button key={parseInt(episodeNum)+1} className={parseInt(episodeNum)+1} _focus={{ bg: "dark.buttonfocus" }} isActive={selectedEpisode == parseInt(episodeNum)+1 ? true : false} onClick={(e) => {showDifEpisode(e)}} _active={{ bg: "dark.pink", color: "white" }} _hover={{ background: "dark.buttonfocus", color: "white" }} background="dark.buttonhoverbackground" color="white" width="40px" height="35px">{parseInt(episodeNum)+1}</Button>
                                ))}
                            </SimpleGrid>
                        </Box>
                    </Box>







                    <Box id="bottomBar" display="none">
                        <Grid
                            templateAreas={`"video video"
                                            "details details"
                                            "episodes episodes"`}
                            // gridTemplateRows={`560px 600px`}
                            // gridTemplateColumns={`${boxWidth} 500px`}
                            autoColumns
                            height="500px"
                            gap='0'
                            fontWeight='bold'
                            marginLeft="60px"
                            marginTop="90px"
                            position="absolute"
                        >
                            <GridItem pl="2" area={"video"} left="70px" paddingBottom="15px">
                                <SidePlayer zIndex={1} episodeLink={encodeURIComponent(episodeLinks["player_link"])}/>
                            </GridItem>

                        {/* Top Box - 3.4 - right="30px" top="95px"*/}
                            <GridItem className="details" pl="0" left="8px" top="0px" position="absolute" background="dark.buttonbackground" width="70vw" minWidth="200px" borderRadius="8px" height="200px" area={"details"}>
                                <Box position="relative" width={boxWidth} minWidth="300px" opacity={boxOpacity} height="200px" background="dark.buttonbackground" borderRadius="8px">
                                    <Box>
                                        <Box padding="15px" position="absolute">
                                            <IoFolderOpenSharp position="relative" size={22} color="#C4C4C4"/>
                                        </Box>
                        
                                        <Text color="#ffffff" noOfLines={1} textTransform="capitalize" position="absolute" top="14px" left="52px" fontWeight="500">{data["anime_name"]}</Text>
                                        <Text color="#ffffff" paddingRight="15px" fontSize="12px" noOfLines={5} textTransform="capitalize" position="absolute" top="50px" left="15px" fontWeight="regular">{data["plot_summary"]}</Text>
                                    
                                        <Box position="relative" height="200px" width="70vw" borderRadius="8px" right="10px" top="0px" overflow="hidden">
                                            <SimpleGrid position="absolute" display="flex" justifyContent="center" bottom="15px" left="15px" color="white" columns={1} rows={1}>
                                                {Object.keys(genres).map((genre) => (
                                                    <Tag key={genre} position="relative" background="dark.pink" color="white" height="30px" borderRadius="25px" marginLeft="10px" paddingLeft="20px" paddingRight="20px" fontWeight="regular"><Text isTruncated>{genres[genre].trim()}</Text></Tag>
                                                ))}
                                            </SimpleGrid>
                                        </Box>
                                    </Box>
                                </Box>
                            </GridItem>
                
                            {/* right="30px" top="320px" */}
                            <GridItem pl="0" className="episodes" area={"episodes"} position="relative" minWidth="300px" height={`calc(50px + ${(Math.ceil(episodeData.length / 10)) * 60}px + 20px)`} background="dark.buttonbackground" borderRadius="8px">
                                <Box padding="15px" position="absolute">
                                    <IoFolderOpenSharp position="relative" size={22} color="#C4C4C4"/>
                                </Box>
                
                                <Text paddingRight="15px" color="#ffffff" noOfLines={1} textTransform="capitalize" position="absolute" top="14px" left="42px" fontWeight="500">Episodes</Text>
                            
                                <SimpleGrid left="15px" top="50px" columns={[5, 7, 9]} position="absolute" spacingX={["17px"]} spacingY="10px">
                                    {Object.keys(episodeData).map((episodeNum) => (
                                        <Button key={parseInt(episodeNum)+1} className={parseInt(episodeNum)+1} _focus={{ bg: "dark.buttonfocus" }} isActive={selectedEpisode == parseInt(episodeNum)+1 ? true : false} onClick={(e) => {showDifEpisode(e)}} _active={{ bg: "dark.pink", color: "white" }} _hover={{ background: "dark.buttonfocus", color: "white" }} background="dark.buttonhoverbackground" color="white" width="40px" height="35px">{parseInt(episodeNum)+1}</Button>
                                    ))}
                                </SimpleGrid>
                            </GridItem>
                        </Grid>
                    </Box>
                </Box>

                
            </div>
        )
    } catch(err){
        return (
            <div width="100%" height="100%">
                <NavBar/>
                <Center>
                    <Text fontSize="40" textAlign="center" top="15px" position="absolute" color="dark.text" lineHeight={1.4}>
                        Error
                    </Text>
                </Center>
            </div>
        )
    }
}

//<Tag background="#494D5A" color="white" height="30px" borderRadius="25px" fontWeight="regular">{genres[genre]}</Tag>

export async function getServerSideProps(context){
    const res = await fetch(`https://flake-anime-backend-server-two.herokuapp.com/detail?gogo_id=${context.params.anime}`)
    const resEpisodes = await fetch(`https://flake-anime-backend-server-two.herokuapp.com/get_episodes?gogo_id=${context.params.anime}`)
    const details = await res.text()
    const episodes = await resEpisodes.text()
    

    return { props: {details, episodes} }
}

export default MyApp