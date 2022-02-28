import React, { useState } from "react"

import "../styles/Landing.css"

import LandingImg from "../images/Landing.png"
import { Navbar, Footer } from "../components"

import { Button, Flex, SimpleGrid, Text } from "@chakra-ui/react"

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
              <p>Rekrut.Id adalah web pencari kerja untuk para freelancer</p>
              </div>
              <Flex>
                <SimpleGrid w="55%">
                  <Button size="lg" mt="6" borderRadius="50" bgColor="#FF8450">
                    <Text fontSize="lg" fontWeight="bold">Cari Pekerjaan</Text>
                  </Button> 
                  <Button size="lg" mt="4" borderRadius="50" bgColor="#FF8450">
                    <Text fontSize="lg" fontWeight="bold">Cari Jasa</Text>
                  </Button> 
                </SimpleGrid>
              </Flex>
            </div>
          </div>
        </div>
        <div className="orange"></div>
        <img className="image" src={LandingImg} />
      </Flex>
      <Footer />  
    </>
  )
}
