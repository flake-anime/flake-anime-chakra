import {Box, Center, Image, Text, Flex} from "@chakra-ui/react"
import {StarIcon, ViewIcon} from "@chakra-ui/icons"
import Script from "next/script"

function MyApp({ data }){
  const episodes = JSON.parse(data)

  return (
    <Center marginTop="50px">
        <head>
            <script src="https://cdn.plyr.io/3.6.12/plyr.js"/>
            <link rel="stylesheet" href="https://cdn.plyr.io/3.6.12/plyr.css" />

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"/>
        </head> 

      <Box width="500px">
        <video id="player" playsinline controls>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
      </Box>

      <Script>
        let player = new Plyr("#player");
      </Script>
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