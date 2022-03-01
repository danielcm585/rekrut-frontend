import React from "react"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"

import { Box, Flex, IconButton, Text } from "@chakra-ui/react"

export default function Footer() {
  return (
    <>
      <Flex mt="250" w="100%" justifyContent="center" bg="#2A2A30">
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
              <Text fontSize="xl" fontWeight="semibold" color="white">Social Media</Text>
            </Flex>
            <Box ml="3" mr="3" mt="2" pt="1" bg="#FF8450"></Box>
            <Flex mt="1">
              <IconButton variant="ghost" isRound="true" icon={<FaFacebookF color="#FF8450" />} 
                onClick={() => window.location.href=""} /> {/*TODO: Facebook link*/}
              <IconButton variant="ghost" isRound="true" icon={<FaInstagram color="#FF8450" />} 
                onClick={() => window.location.href=""} /> {/*TODO: Instagram link*/}
              <IconButton variant="ghost" isRound="true" icon={<FaTwitter color="#FF8450" />} 
                onClick={() => window.location.href=""} /> {/*TODO: twitter link*/}
              <IconButton variant="ghost" isRound="true" icon={<FaLinkedinIn color="#FF8450" />} 
                onClick={() => window.location.href=""} /> {/*TODO: linkedin link*/}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
