import React from "react"
// import { AiFillMail } from "react-icons/ai"
// import { IoMdMail } from "react-icons/io"  
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { GrMail, GrInstagram, GrLinkedin } from "react-icons/gr"
import { SiWhatsapp } from "react-icons/si"

import { Box, Flex, IconButton, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <>
      <Flex mt="450" w="100%" justifyContent="center" bg="#2A2A30">
        <Flex mt="10" mb="10" w="85%">
          <Flex w="45%" direction="column">
            <Text fontSize="2xl" fontWeight="bold" color="white">Rekrut.id</Text>
            <Text mt="5" fontSize="1xl" color="white">
              Freelancer has an obligation to conduct its business in accordance with all applicable rules, regulations and laws. We are committed to helping all Users act in a way that preserves trust and respect. This Code is meant as a guide to using our Site appropriately and must be followed at all times
            </Text>
            <Text mt="5" fontSize="1xl" fontWeight="semibold" color="white">@ Copyright 2022</Text>
          </Flex>
          <Flex ml="20%" direction="column">
            <Flex ml="3" mt="2">
              <Text fontSize="xl" fontWeight="semibold" color="white">Hubungi Kami</Text>
            </Flex>
            <Box ml="3" mr="3" mt="2" pt="1" bg="#FF8450"></Box>
            <Flex mt="1" ml="1">
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
