import { Box, Button, Stack } from "@chakra-ui/react"
import { useState } from "react";

function HomeTypeButtons(){
    const [newEps, setNewEps] = useState(true);
    const [followed, setFollowed] = useState(false);
    const [recent, setRecent] = useState(false);
    const [popular, setPopular] = useState(false);
    const [movie, setMovie] = useState(false);
    
    return (
        <Box key="typeButton" cursor="pointer">
            <Stack position="absolute" direction="row" spacing={4} align="center" top="300px" left="70px">
                <Button _focus={{ bg: "dark.buttonfocus" }} onClick={() => {
                        setNewEps(true);
                        setFollowed(false);
                        setRecent(false);
                        setPopular(false);
                        setMovie(false);}} id="newEps" isActive={newEps} _active={{ bg: "dark.pink", color: "white" }} height="40px" _hover={{ background: "dark.buttonhoverbackground", color: "white" }} style={{ transition: "0.2s" }} width="80px" background="dark.buttonbackground" color="dark.text" fontSize="14px" fontWeight="400">New Eps</Button>
                <Button _focus={{ bg: "dark.buttonfocus" }} onClick={() => {
                        setNewEps(false);
                        setFollowed(true);
                        setRecent(false);
                        setPopular(false);
                        setMovie(false);}} id="followed" isActive={followed} _active={{ bg: "dark.pink", color: "white" }} height="40px" _hover={{ background: "dark.buttonhoverbackground", color: "white" }} style={{ transition: "0.2s" }} width="80px" background="dark.buttonbackground" color="dark.text" fontSize="14px" fontWeight="400">Followed</Button>
                <Button _focus={{ bg: "dark.buttonfocus" }} onClick={() => {
                        setNewEps(false);
                        setFollowed(false);
                        setRecent(true);
                        setPopular(false);
                        setMovie(false);}} id="recent" isActive={recent} _active={{ bg: "dark.pink", color: "white" }} height="40px" _hover={{ background: "dark.buttonhoverbackground", color: "white" }} style={{ transition: "0.2s" }} width="80px" background="dark.buttonbackground" color="dark.text" fontSize="14px" fontWeight="400">Recent</Button>
                <Button _focus={{ bg: "dark.buttonfocus" }} onClick={() => {
                        setNewEps(false);
                        setFollowed(false);
                        setRecent(false);
                        setPopular(true);
                        setMovie(false);}} id="popular" isActive={popular} _active={{ bg: "dark.pink", color: "white" }} height="40px" _hover={{ background: "dark.buttonhoverbackground", color: "white" }} style={{ transition: "0.2s" }} width="80px" background="dark.buttonbackground" color="dark.text" fontSize="14px" fontWeight="400">Popular</Button>
                <Button _focus={{ bg: "dark.buttonfocus" }} onClick={() => {
                        setNewEps(false);
                        setFollowed(false);
                        setRecent(false);
                        setPopular(false);
                        setMovie(true);}} id="movie" isActive={movie} _active={{ bg: "dark.pink", color: "white" }} height="40px" _hover={{ background: "dark.buttonhoverbackground", color: "white" }} style={{ transition: "0.2s" }} width="80px" background="dark.buttonbackground" color="dark.text" fontSize="14px" fontWeight="400">Movie</Button>
            </Stack>
        </Box>
    )
}

export default HomeTypeButtons