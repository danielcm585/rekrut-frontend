import React, { useState } from "react"

import { Navbar, Footer } from "../components"

import { Box, Button, Flex, Spacer, Text, VStack } from "@chakra-ui/react"

export default function Landing() {
  useState(() => {
    document.title = "Rekrut.id | Work or hire now!"
  }, [])

  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Box p="10" mt="250" borderRadius="lg">
          <VStack>
            <Text fontSize="1.5xl" fontWeight="semibold">Hire great talents or work freely now!</Text>
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Button variant="outline" borderColor="black" borderRadius="50"  onClick={() => window.location.href="/login"}>Get Started</Button>
          </VStack>
        </Box>
      </Flex>
      <Footer />  
    </>
  )
}
