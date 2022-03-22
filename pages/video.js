import {Box, Center, Image, Text, Flex} from "@chakra-ui/react";
import {StarIcon, ViewIcon} from "@chakra-ui/icons";
import Script from "next/script";

function MyApp({ data }){
  // const episodes = JSON.parse(data);

  // console.log(episodes[0]["src"]);

  return (
    <Center marginTop="50px">

      <h1>uwu</h1>
      
      {/* <Box width="500px">
        {Object.keys(episodes).map((episode) => (
          <h1>{episodes[episode]}</h1>
        ))} 
      </Box> */}

    </Center>
  )
}

export async function getServerSideProps(){
  const anime_id = "death-note"
  const eps_number = 1

  const res = await fetch(`https://aniflake-proxy-server.herokuapp.com/get_streaming_sources?anime_id=${anime_id}&eps_number=${eps_number}`)
  const newData = await res.text()
  const data = [newData]

  return { props: {data} }
}

export default MyApp