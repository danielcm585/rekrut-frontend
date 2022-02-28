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
      <Footer />  
    </>
  )
}
