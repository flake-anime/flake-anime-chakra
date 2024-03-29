import {
  Box,
  Image,
  Text,
  IconButton,
  Input,
  Button,
  SimpleGrid,
  Center,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
// import { useState, useEffect } from "react";

function NavBar() {
  const router = useRouter();

//   const search = async (event) => {
//     if(event.target.textbox.value.trim() == ""){
//         event.preventDefault();
//     } else {
//         // setLoading(true);

//         // router.push(`/search/${event.target.textbox.value.replace(/ /g, "-")}`);
//         return <Redirect to={`localhost:3000/search/${event.target.textbox.value.replace(/ /g, "-")}`}/>
//         // setLoading(false);
//     }
//   };

  return (
    <Box key="navbar">

      <Box className="navbarClass">
        {/* <Button _focus={{ bg: "rgba(44, 45, 54, 0.92)" }} _hover={{ bg: "dark.navbarbuttonhover"}} style={{ transition: "0.2s" }} bgColor="dark.pink" color="white" size="md" width="94px" height="45px" position="absolute" top="25px" right="30px">
                    <Text fontSize="14" fontWeight="400">Sign In</Text>
                </Button> */}

        {/* lds-dual-ring */}

        {/* Logo */}
        <Image
          alt="logo"
          _hover={{ cursor: "pointer" }}
          top="27px"
          left="70px"
          width="35px"
          position="absolute"
          src="https://i.imgur.com/GAGPSGW.png"
          onClick={() => (document.location.href = "/")}
        />

        {/* Home */}
        {/* Shuffle */}
        {/* Heart */}
        {/* Message */}
        {/* Bell */}
        {/* Star */}

        <SimpleGrid
          columns={1}
          top="40px"
          spacingY="50px"
          left="25px"
          position="fixed"
        >
          <Image
            alt="home"
            cursor="pointer"
            height="15px"
            src="https://i.imgur.com/4T35GJ5.png"
            style={{ cursor: "not-allowed" }}
          />
          <Image
            alt="shuffle"
            cursor="pointer"
            height="15px"
            src="https://i.imgur.com/YpAcgzm.png"
            style={{ cursor: "not-allowed" }}
          />
          <Image
            alt="heart"
            cursor="pointer"
            height="15px"
            src="https://i.imgur.com/wTcnhew.png"
            style={{ cursor: "not-allowed" }}
          />
          <Image
            alt="message"
            cursor="pointer"
            height="15px"
            src="https://i.imgur.com/50JH9SG.png"
            style={{ cursor: "not-allowed" }}
          />
          <Image
            alt="bell"
            cursor="pointer"
            height="15px"
            src="https://i.imgur.com/Io9ymdK.png"
            style={{ cursor: "not-allowed" }}
          />
          <Image
            alt="star"
            cursor="pointer"
            height="15px"
            src="https://i.imgur.com/6rke9dV.png"
            style={{ cursor: "not-allowed" }}
          />
        </SimpleGrid>

        <form onSubmit={(event) => {
                event.preventDefault();
                window.location.replace(`http://flake-anime.netlify.app/search/${event.target.textbox.value.replace(/ /g, "-")}`)
            }
        }>
            <Input
                focusBorderColor="dark.pink"
                autoComplete="off"
                id="textbox"
                name="textbox"
                style={{ textTransform: "capitalize" }}
                placeholder="What would you like to watch today?"
                fontSize="14px"
                _hover={{ bg: "dark.buttonhoverbackground" }}
                variant="filled"
                color="white"
                left="120px"
                bgColor="dark.buttonbackground"
                height="45px"
                width="50vw"
                maxWidth="350px"
                position="absolute"
                top="25px"
                display="inline-block"
            />
            <IconButton
                _focus={{ bg: "dark.buttonfocus" }}
                _hover={{ bg: "dark.navbarbuttonhover" }}
                style={{ transition: "0.2s" }}
                type="submit"
                aria-label="search"
                bgColor="dark.pink"
                color="white"
                height="45px"
                width="45px"
                top="25px"
                left="480px"
                position="absolute"
                icon={<SearchIcon />}
            />
        </form>
      </Box>
    </Box>
  );
}

export default NavBar;
