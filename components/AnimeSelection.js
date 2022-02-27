import { Box, Center, Image, Text, SimpleGrid, Select, Checkbox, Button, IconButton, Input, Tag, TagLabel, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons"

function AnimeSelection(){
    return (
        <Center style={{zIndex: "1"}} position="absolute" right="50px" top="115px">
            <Box bgGradient="linear(to-b, rgba(23, 26, 31, 0.75), rgba(20, 22, 26, 0.5))" style={{backdropFilter: "blur(100px)"}} width="310px" height="450px" borderRadius="12px">
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

    )
}

export default AnimeSelection