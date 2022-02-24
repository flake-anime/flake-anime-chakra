import { Box, Center, Image, Text, SimpleGrid, Select, Checkbox, Button, IconButton, Input, Tag, TagLabel, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons"
import Script from "next/script"
import AnimeCard from "../components/AnimeCard"
import NavBar from "../components/NavBar"
import WeeklyTopCard from "../components/WeeklyTopCard"

function MyApp(){
  return (
    <div>
        <head>
            <script src="https://cdn.plyr.io/3.6.12/plyr.js"/>
            <link rel="stylesheet" href="https://cdn.plyr.io/3.6.12/plyr.css" />

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"/>
        </head> 


        <Box postion="fixed" style={{zIndex: "-1"}}>
            <Image src="https://i.pinimg.com/originals/32/4a/51/324a511fb2d414841cf6458088aa5d35.jpg" width="100%" position="relative"/>
            <Box top="0px" width="100%" height="100%"  bgGradient="linear(to-b, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 1) 75%)" position="absolute" />
        </Box>

        <Box width="430px" top="150px" left="670px" position="absolute" style={{ zIndex: "1" }}>
            <div class="plyr__video-embed" id="player" height="300px">
                <iframe
                    src="https://www.youtube.com/watch?v=sxxRIKvaBO4"
                    allowfullscreen
                    allowtransparency
                    allow="autoplay"
                ></iframe>
            </div>
        </Box>

        <NavBar/>

        <Box>
            <Text fontSize="45" top="140px" left="180px" fontWeight="625" color="white" position="absolute">Attack On Titan</Text>
            
            <Tag top="220px" left="180px" position="absolute" size="lg" key="lg" bgColor="rgba(31, 34, 38, 0.68)" borderRadius="full" variant="solid" colorScheme="green">
            <TagLabel style={{zIndex: "100"}}>Subbed</TagLabel>
            </Tag>

            <Tag top="220px" left="270px" position="absolute" size="lg" key="lg" bgColor="rgba(31, 34, 38, 0.68)" borderRadius="full" variant="solid" colorScheme="green">
            <TagLabel>Action</TagLabel>
            </Tag>

            <Tag top="220px" left="350px" position="absolute" size="lg" key="lg" bgColor="rgba(31, 34, 38, 0.68)" borderRadius="full" variant="solid" colorScheme="green">
            <TagLabel>Adventure</TagLabel>
            </Tag>

            <Tag top="220px" left="460px" position="absolute" size="lg" key="lg" bgColor="rgba(31, 34, 38, 0.68)" borderRadius="full" variant="solid" colorScheme="green">
            <TagLabel>Romance</TagLabel>
            </Tag>

            <Box>
                <Text width="450px" noOfLines={6} fontSize="14" fontWeight="450" position="absolute" top="270px" left="180px" color="white">
                    Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans,
                    forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying
                    is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To
                    ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one
                    hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal
                    Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the
                    man-eating abominations.
                </Text>
            </Box>
        </Box>

        <Text position="absolute" color="white" top="430px" right="50%" fontSize="28" fontWeight="500">Available Now!</Text>

        {/* Cards */}

        <Box>
            <SimpleGrid columns={5} spacingX="5px" spacingY="0px" position="absolute" top="320px" left="120px">
                <AnimeCard name="Shingeki no Kyojin" image="https://gogocdn.net/cover/shingeki-no-kyojin-the-final-season-part-2.png"/>
                <AnimeCard name="Black Clover" image="https://gogocdn.net/cover/black-clover.png"/>
                <AnimeCard name="Demon Slayer" image="https://gogocdn.net/cover/kimetsu-no-yaiba-dub.png"/>
                <AnimeCard name="Shingeki no Kyojin" image="https://gogocdn.net/cover/shingeki-no-kyojin-the-final-season-part-2.png"/>
                <AnimeCard name="Black Clover" image="https://gogocdn.net/cover/black-clover.png"/>                
            </SimpleGrid>
        </Box>


        <Center style={{zIndex: "1"}} position="absolute" right="50px" top="115px">
            <Box bgGradient="linear(to-b, rgba(23, 26, 31, 0.75), rgba(20, 22, 26, 0.5))" style={{backdropFilter: "blur(1px)"}} width="310px" height="450px" borderRadius="12px">
                <Box position="absolute">
                    <SimpleGrid columns={2} spacingX="50px" spacingY="300px" marginLeft="30px" marginTop="50px">
                        <Menu>
                            <MenuButton bgColor="#14161A" fontSize="14" color="white" _hover={{ bgColor: "#262a31" }} as={Button} rightIcon={<ChevronDownIcon />}>
                                All
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Spring</MenuItem>
                                <MenuItem>Summer</MenuItem>
                                <MenuItem>Fall</MenuItem>
                                <MenuItem>Winter</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu position="fixed">
                            <MenuButton bgColor="#14161A" right="10px" color="white" _hover={{ bgColor: "#262a31" }} as={Button} rightIcon={<ChevronDownIcon />}>
                                All
                            </MenuButton>
                            <MenuList>
                                <MenuItem>2022</MenuItem>
                                <MenuItem>2021</MenuItem>
                                <MenuItem>2020</MenuItem>
                                <MenuItem>2019</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu position="fixed">
                            <MenuButton bgColor="#14161A" color="white" _hover={{ bgColor: "#262a31" }} as={Button} rightIcon={<ChevronDownIcon />}>
                                Any
                            </MenuButton>
                            <MenuList>
                                <MenuItem>GOGO</MenuItem>
                                <MenuItem>API</MenuItem>
                                <MenuItem>AL</MenuItem>
                                <MenuItem>RUSH</MenuItem>
                            </MenuList>
                        </Menu>

                        <Menu position="fixed">
                            <MenuButton bgColor="#14161A" right="10px" color="white" _hover={{ bgColor: "#262a31" }} as={Button} rightIcon={<ChevronDownIcon />}>
                                Any
                            </MenuButton>
                            <MenuList>
                                <MenuItem>SUB</MenuItem>
                                <MenuItem>DUB</MenuItem>
                            </MenuList>
                        </Menu>           
                    </SimpleGrid>
                </Box>

                <SimpleGrid columns={2} marginLeft="30px" marginTop="150px" position="absolute" spacingX="50px">
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Action</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Adventure</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Anti-Hero</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Cars</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">College</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Comedy</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Demons</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Drama</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Ecchi</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Fantasy</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Game</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Harem</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Historical</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Horror</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Idol</Text>
                    </Checkbox>
                    <Checkbox size="md" colorCheme="#0194FF">
                        <Text color="white">Isekai</Text>
                    </Checkbox>
                </SimpleGrid>

                <SimpleGrid columns={2} spacingX="30px" spacingY="320px" marginTop="15px">
                    <Text fontWeight="500" color="white" marginLeft="30px" fontSize="14">Season</Text>
                    <Text fontWeight="500" color="white" fontSize="14" >Year</Text>
                    <Text fontWeight="500" color="white" marginLeft="30px" fontSize="14" >Stream</Text>
                    <Text fontWeight="500" color="white" fontSize="14" >Sub/Dub</Text>
                </SimpleGrid>

                <Center>
                    <Text fontWeight="500" color="white" fontSize="17" marginTop="-525px" position="absolute">Genre</Text>
                </Center>
            
            </Box>

        </Center>

        <Box>
            <Text fontSize="30" top="590px" right="150px" fontWeight="625" color="white" position="absolute">Weekly Top</Text>

            <WeeklyTopCard name="One Piece" image="https://gogocdn.net/images/anime/One-piece.jpg" cardRight="50px" cardTop="660px"/>
            <WeeklyTopCard name="Sono Bisque Doll wa Koi wo Suru" image="https://cachecow.eu/i/b15363b512267fdb4f30a789bacd97a6.jpg" cardRight="50px" cardTop="770px"/>
            <WeeklyTopCard name="Naruto Shippuden" image="https://cachecow.eu/i/d7c4f5008a6c3a4f4d354e531939906f.jpg" cardRight="50px" cardTop="880px"/>
        </Box>

        <Script>
            const player = new Plyr("#player");
        </Script>
    </div>
  )
}

export default MyApp