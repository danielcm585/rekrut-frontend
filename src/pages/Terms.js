import React from "react"

import tnc from "../data/terms"

import { Footer, Navbar } from "../components"
import { Paragraph } from "../components/terms"

import { AccordionIcon, Box, Flex, Text } from "@chakra-ui/react"
import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from "@chakra-ui/react"

export default function Terms() {
  return (
    <>
      <Navbar />
      <Flex mt="8" justifyContent="center">
        <Flex w="85%" direction="column"> 
          <Text fontSize="xl" fontWeight="semibold">Syarat dan Ketentuan</Text>
          <Accordion mt="6" w="100%" allowToggle>
            {
              tnc.map((chap, idx) => {
                return (
                  <AccordionItem key={idx}>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontWeight="semibold">
                          {chap.title}
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb="4">
                      <Paragraph data={chap.body} depth={0} />
                    </AccordionPanel>
                  </AccordionItem>
                )
              })
            }
          </Accordion>
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
