import React from "react"

import "../styles/Landing.css"

import { LandingImg } from "../images"

import { useColorMode } from "@chakra-ui/react"
import { Box, Heading, useMediaQuery } from "@chakra-ui/react"
import { Button, Flex, Text } from "@chakra-ui/react"

export default function Welcome() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode == "dark")

  const [ isDesktop ] = useMediaQuery("(min-width:1400px)")
  
  if (isDesktop) return (
    <>
      <div className={isDark ? "black-dark" : "black"}>
        <div className={isDark ? "white-dark" : "white"}>
          <div className="section">
            <div className="text">
              <Heading fontSize="5xl">Rekrut.id</Heading>
              <Text mt="3">
                Rekrut.id adalah web pencari kerja untuk para freelancer dan pencari jasa bagi para pengusaha
              </Text>
            </div>
            <Flex>
                <Button mt="6" p="7" pl="50" pr="50" borderRadius="50" bgColor="#FF8450"
                  onClick={() => window.location.href="/register"}>
                  <Text fontSize="xl" fontWeight="bold">Mulai Sekarang</Text>
                </Button>
            </Flex>
          </div>
        </div>
      </div>
      <div className="orange"></div>
      <img className="image" src={LandingImg} />
    </>
  )
  return (
    <>
      <div className={isDark ? "black-dark-mobile" : "black-mobile"}>
        <div className={isDark ? "white-dark-mobile" : "white-mobile"}>
          <Box pt="8" pl="4" pr="4" w="100%" justifyContent="center">
            <Heading align="center" fontSize="4xl">Rekrut.id</Heading>
            <Text mt="2" align="center" fontSize="xl" fontWeight="semibold">
              Rekrut.id adalah web pencari kerja untuk para freelancer dan pencari jasa bagi para pengusaha
            </Text>
          </Box>
          <Flex justifyContent="center">
            <Button mt="5" pl="10" pr="10" borderRadius="50" bgColor="#FF8450"
              onClick={() => window.location.href="/register"}>
              <Text fontSize="lg" fontWeight="bold">Mulai Sekarang</Text>
            </Button>
          </Flex>
        </div>
      </div>
      <div className="orange-mobile"></div>
      <img className="image-mobile" src={LandingImg} />
    </>
  )
}
