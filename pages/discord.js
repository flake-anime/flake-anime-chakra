import { Text, Center } from "@chakra-ui/react"
import React, { Component, useEffect } from "react";

function MyApp(){
    useEffect(() => {
        window.location.href = "https://discord.gg/hvYDKnpbdd";
    }, []);

    return (
        <Center>
            <Text fontSize="22" top="10px" position="absolute" color="dark.text" lineHeight={1.4}>
                Please wait, you are being redirected
            </Text>
        </Center>
    )
}

export default MyApp
