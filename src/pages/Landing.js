import React, { useState } from "react"

import "../styles/Landing.css"

import { LandingImg, Procedure1Img } from "../images"
import { Navbar, Footer } from "../components"

import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"

export default function Landing() {
  useState(() => {
    document.title = "Rekrut.id | Kerja atau rekrut sekarang!"
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
      </Flex>
      <Flex mt="90" justifyContent="center">
        <Text fontSize="3xl" fontWeight="bold">Ribuan Bidang Pekerjaan</Text>
      </Flex>
      <Flex mt="10" justifyContent="center">
        <SimpleGrid w="60%" columns="4" spacing="10">
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Guru</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Desainer</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Fotografer</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Web Developer</Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex mt="8" justifyContent="center">
        <SimpleGrid w="45%" columns="3" spacing="10">
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Translator</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Helper</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Driver</Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex mt="90" justifyContent="center">
        <Text fontSize="3xl" fontWeight="bold">Cara Kerja di Rekrut.id</Text>
      </Flex>
      <Flex mt="8" justifyContent="center">
        <SimpleGrid w="85%" columns="3" spacing="10">
          <Box p="2" pb="3" borderRadius="md" shadow="md">
            <Image src={Procedure1Img} borderRadius="md" />
            <Flex mt="2" justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">1. Jelaskan Kebutuhanmu</Text>
            </Flex>
            <Flex mt="2" justifyContent="center">
              <Text align="center" fontSize="lg">
                Informasikan jasa yang Anda butuhkan. Dapatkan lebih dari 10+ penawaran dalam hitungan jam
              </Text>
            </Flex>
          </Box>
          <Box p="2" pb="3" borderRadius="md" shadow="md">
            <Image src={Procedure1Img} borderRadius="md" />
            <Flex mt="2" justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">2. Bandingkan Setiap Jasa</Text>
            </Flex>
            <Flex mt="2" justifyContent="center">
              <Text align="center" fontSize="lg">
                Bandingkan profil untuk menemukan pilihan yang sesuai
              </Text>
            </Flex>
          </Box>
          <Box p="2" pb="3" borderRadius="md" shadow="md">
            <Image src={Procedure1Img} borderRadius="md" />
            <Flex mt="2" justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">3. Rekrut Pekerja</Text>
            </Flex>
            <Flex mt="2" justifyContent="center">
              <Text align="center" fontSize="lg">
                Rekrut pekerja yang paling tepat untuk Anda. Bekerja melalui workspace kami hingga tuntas.
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
      <Footer />
    </>
  )
}
