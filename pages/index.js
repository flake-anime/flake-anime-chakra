import { Box, Center, Image, Text, SimpleGrid, Select, Checkbox, Button, IconButton, Input, Tag, TagLabel, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import NavBar from "../components/NavBar"
import RandomTopAnime from "../components/RandomTopAnime"
import HomeTypeButtons from "../components/HomeTypeButtons"
import AnimeCard from "../components/AnimeCard"

function MyApp(){
  return (
    <div>
        <NavBar/>
        <RandomTopAnime/>
        <HomeTypeButtons/>

        <SimpleGrid position="absolute" top="360px" columns={5} spacingX="30px">
            <AnimeCard/>
            {/* <AnimeCard/>
            <AnimeCard/>
            <AnimeCard/>
            <AnimeCard/> */}
        </SimpleGrid>
    </div>
  )
}

export default MyApp
