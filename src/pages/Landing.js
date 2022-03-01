import React, { useState } from "react"

import "../styles/Landing.css"

import LandingImg from "../images/Landing.png"
import { Navbar, Footer } from "../components"

import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react"

export default function Landing() {
  useState(() => {
    document.title = "Rekrut.id | Work or hire now!"
  }, [])

  return (
    <>
      <Navbar />
      <Flex>
        <div className="black">
          <div className="white">
            <div className="section">
              <div className="text">
              <h1>Rekrut.id</h1>
              <p>
                Rekrut.id adalah web pencari kerja untuk para freelancer dan pencari jasa bagi para pengusaha
              </p>
              </div>
              <Flex>
                {/* <SimpleGrid w="55%"> */}
                  <Button mt="6" p="7" pl="50" pr="50" borderRadius="50" bgColor="#FF8450"
                    onClick={() => window.location.href="/register"}>
                    <Text fontSize="xl" fontWeight="bold">Mulai Sekarang</Text>
                  </Button> 
                  {/* <Button size="lg" mt="4" borderRadius="50" bgColor="#FF8450"
                    onClick={() => window.location.href="/login"}>
                    <Text fontSize="lg" fontWeight="bold">Cari Jasa</Text>
                  </Button> 
                </SimpleGrid> */}
              </Flex>
            </div>
          </div>
        </div>
        <div className="orange"></div>
        <img className="image" src={LandingImg} />
      </Flex>
      <Flex mt="90" justifyContent="center">
        <Text fontSize="3xl" fontWeight="bold">Ribuan Bidang Pekerjaan</Text>
      </Flex>
      <Flex mt="10" justifyContent="center">
        <SimpleGrid w="60%" columns="4" spacing="10">
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">Guru</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">Desainer</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">Fotografer</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">Web Developer</Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex mt="8" justifyContent="center">
        <SimpleGrid w="45%" columns="3" spacing="10">
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">Translator</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">Helper</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">Driver</Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex mt="90" justifyContent="center">
        <Text fontSize="3xl" fontWeight="bold">Cara Kerja di Rekrut.id</Text>
      </Flex>
      <Footer />  
    </>
  )
}
