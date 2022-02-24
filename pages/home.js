import { Box, Center, Image, Text, SimpleGrid, Select, Checkbox, Button, IconButton, Input, Tag, TagLabel, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons"
import Script from "next/script"
import AnimeCard from "../components/AnimeCard"
import NavBar from "../components/NavBar"

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

        <Box width="450px" top="178px" left="700px" position="fixed">
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
            <Text fontSize="50" top="150px" left="200px" fontWeight="625" color="white" position="absolute">Attack On Titan</Text>
            
            <Tag top="240px" left="200" position="absolute" size="lg" key="lg" bgColor="rgba(31, 34, 38, 0.68)" borderRadius="full" variant="solid" colorScheme="green">
            <TagLabel style={{zIndex: "100"}}>Subbed</TagLabel>
            </Tag>

            <Tag top="240px" left="300" position="absolute" size="lg" key="lg" bgColor="rgba(31, 34, 38, 0.68)" borderRadius="full" variant="solid" colorScheme="green">
            <TagLabel>Action</TagLabel>
            </Tag>

            <Tag top="240px" left="390" position="absolute" size="lg" key="lg" bgColor="rgba(31, 34, 38, 0.68)" borderRadius="full" variant="solid" colorScheme="green">
            <TagLabel>Adventure</TagLabel>
            </Tag>

            <Tag top="240px" left="510" position="absolute" size="lg" key="lg" bgColor="rgba(31, 34, 38, 0.68)" borderRadius="full" variant="solid" colorScheme="green">
            <TagLabel>Romance</TagLabel>
            </Tag>

            <Box>
                <Text width="500px" noOfLines={6} fontWeight="450" position="absolute" top="290px" left="200px" color="white">
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

        <Text position="absolute" color="white" top="490px" right="50%" fontSize="31" fontWeight="500">Available Now!</Text>

        {/* Cards */}

        <Box>
            <SimpleGrid columns={5} spacingX="5px" spacingY="0px" position="absolute" top="400px" left="120px">
                <AnimeCard name="Shingeki no Kyojin" image="https://gogocdn.net/cover/shingeki-no-kyojin-the-final-season-part-2.png"/>
                <AnimeCard name="Black Clover" image="https://gogocdn.net/cover/black-clover.png"/>
                <AnimeCard name="Demon Slayer" image="https://gogocdn.net/cover/kimetsu-no-yaiba-dub.png"/>
                <AnimeCard name="Shingeki no Kyojin" image="https://gogocdn.net/cover/shingeki-no-kyojin-the-final-season-part-2.png"/>
                <AnimeCard name="Black Clover" image="https://gogocdn.net/cover/black-clover.png"/>                
            </SimpleGrid>
        </Box>


        <Center style={{zIndex: "1"}} position="fixed" right="50px" top="125px">
            <Box bgGradient="linear(to-b, rgba(23, 26, 31, 0.75), rgba(20, 22, 26, 0.5))" style={{backdropFilter: "blur(1px)"}} width="350px" height="508px" borderRadius="12px">
                <Box position="absolute">
                    <SimpleGrid columns={2} spacingX="50px" spacingY="360px" marginLeft="30px" marginTop="50px">
                        <Menu>
                            <MenuButton bgColor="#14161A" color="white" _hover={{ bgColor: "#262a31" }} as={Button} rightIcon={<ChevronDownIcon />}>
                                Season
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

                <SimpleGrid columns={2} marginLeft="30px" marginTop="170px" position="absolute" spacingX="80px">
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Action</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Adventure</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Anti-Hero</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Cars</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">College</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Comedy</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Demons</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Drama</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Ecchi</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Fantasy</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Game</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Harem</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Historical</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Horror</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Idol</Text>
                    </Checkbox>
                    <Checkbox size="lg" colorCheme="#0194FF">
                        <Text color="white">Isekai</Text>
                    </Checkbox>
                </SimpleGrid>

                <SimpleGrid columns={2} spacingX="0px" spacingY="380px" marginTop="15px">
                    <Text fontWeight="500" color="white" marginLeft="30px" fontSize="16">Season</Text>
                    <Text fontWeight="500" color="white" fontSize="16" >Year</Text>
                    <Text fontWeight="500" color="white" marginLeft="30px" fontSize="16" >Stream</Text>
                    <Text fontWeight="500" color="white" fontSize="16" >Sub/Dub</Text>
                </SimpleGrid>

                <Center>
                    <Text fontWeight="500" color="white" fontSize="19px" marginBottom="625px" position="absolute">Genre</Text>
                </Center>
            
            </Box>

        </Center>

        <Script>
            const player = new Plyr('#player');
        </Script>
    </div>
  )
}

export default MyApp