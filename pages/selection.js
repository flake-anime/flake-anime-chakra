import {Box, Center, Image, Text, Flex, Square, SimpleGrid, Select, color, Checkbox, Container} from "@chakra-ui/react"

function MyApp(){
  return (
    <Center marginTop="50px">
        {/* sx={{ filter: "blur(...px)" }} - blur*/}
        <Box bgGradient="linear(to-b, #2E3238, #171A1F)" width="374px" height="508px" borderRadius="12px">
            <Box position="absolute">
                <SimpleGrid columns={2} spacingX="30px" spacingY="360px" marginLeft="30px" marginTop="50px">
                    <Select placeholder="Fall" color="white" style={{backgroundColor: "#14161A" }} border="none">
                        <option value="spring" style={{backgroundColor: "#14161A" }}>Spring</option>
                        <option value="summer" style={{ backgroundColor: "#14161A" }}>Summer</option>
                        <option value="winter" style={{ backgroundColor: "#14161A" }}>Winter</option>
                    </Select> 

                    <Select placeholder="2022" color="white" style={{backgroundColor: "#14161A" }} border="none" marginLeft="18px">
                        <option value="2021" style={{backgroundColor: "#14161A" }}>2021</option>
                        <option value="2020" style={{ backgroundColor: "#14161A" }}>2020</option>
                        <option value="2019" style={{ backgroundColor: "#14161A" }}>2019</option>
                    </Select>

                    <Select placeholder="Any" color="white" style={{backgroundColor: "#14161A" }} border="none">
                        <option value="gogo" style={{backgroundColor: "#14161A" }}>GOGO</option>
                        <option value="api" style={{ backgroundColor: "#14161A" }}>API</option>
                        <option value="al" style={{ backgroundColor: "#14161A" }}>AL</option>
                        <option value="rush" style={{ backgroundColor: "#14161A" }}>Rush</option>
                    </Select>

                    <Select placeholder="Any" color="white" style={{backgroundColor: "#14161A" }} border="none" marginLeft="18px">
                        <option value="sub" style={{backgroundColor: "#14161A" }}>Sub</option>
                        <option value="dub" style={{backgroundColor: "#14161A" }}>Dub</option>
                    </Select>              
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
  )
}

export default MyApp
