import React from "react"

import { GrMail, GrInstagram, GrLinkedin } from "react-icons/gr"
import { SiWhatsapp } from "react-icons/si"

import { useMediaQuery } from "@chakra-ui/react"
import { Box, Flex, IconButton, Text } from "@chakra-ui/react"

export default function Footer() {
  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Flex mt="450" w="100%" justifyContent="center" bg="#2A2A30">
        <Flex mt="10" mb="10" w="85%" direction={!isBigScreen && "column"}>
          <Flex w={isBigScreen ? "45%" : "100%"} direction="column">
            <Text fontSize="2xl" fontWeight="bold" color="white">Rekrut.id</Text>
            <Text mt="5" fontSize="1xl" color="white">
              Freelancer has an obligation to conduct its business in accordance with all applicable rules, regulations and laws. We are committed to helping all Users act in a way that preserves trust and respect. This Code is meant as a guide to using our Site appropriately and must be followed at all times
            </Text>
            <Text mt="5" fontSize="1xl" fontWeight="semibold" color="white">@ Copyright 2022</Text>
          </Flex>
          <Flex ml={isBigScreen && "20%"} mt={!isBigScreen && "10"} direction="column">
            <Flex ml={isBigScreen && "3"} mt="2">
              <Text fontSize="xl" fontWeight="semibold" color="white">Hubungi Kami</Text>
            </Flex>
            <Box ml={isBigScreen && "3"} mr="3" mt="2" pt="1" bg="#FF8450"></Box>
            <Flex mt="1" ml={isBigScreen && "1"}>
              <IconButton variant="ghost" isRound="true" icon={<GrMail color="#FF8450" />} 
                onClick={() => window.location.href="mailto:cs.rekrut.id@gmail.com"} /> 
              <IconButton variant="ghost" isRound="true" icon={<SiWhatsapp color="#FF8450" />} 
                onClick={() => window.location.href="https://wa.me/+6281313233290"} />
              <IconButton variant="ghost" isRound="true" icon={<GrInstagram color="#FF8450" />} 
                onClick={() => window.location.href=""} /> {/*TODO: Instagram link*/}
              <IconButton variant="ghost" isRound="true" icon={<GrLinkedin color="#FF8450" />} 
                onClick={() => window.location.href=""} /> {/*TODO: linkedin link*/}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
