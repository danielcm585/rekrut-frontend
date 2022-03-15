import React from "react"

import tnc from "../data/terms"
import pp from "../data/policy"

import { Footer, Navbar } from "../components"
import { Paragraph } from "../components/terms"

import { AccordionIcon, Box, Flex, TabPanel, Text } from "@chakra-ui/react"
import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react"
import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from "@chakra-ui/react"

export default function Terms() {
  return (
    <>
      <Navbar />
      <Flex mt="8" justifyContent="center">
        <Flex w="85%" direction="column"> 
          <Tabs>
            <TabList>
              <Tab>Syarat dan Ketentuan</Tab>
              <Tab>Kebijakan Privasi</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Text mt="3" fontSize="xl" fontWeight="semibold">Syarat dan Ketentuan</Text>
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
              </TabPanel>
              <TabPanel>
                <Text mt="3" fontSize="xl" fontWeight="semibold">Kebijakan Privasi</Text>
                <Text mt="6">
                  Adanya Kebijakan Privasi ini adalah komitmen nyata dari Rekrut untuk menghargai dan melindungi setiap data atau informasi pribadi Pengguna Situs Rekrut.
                </Text>
                <Text mt="2">
                  Kebijakan Privasi ini (beserta syarat-syarat penggunaan dari situs Rekrut sebagaimana tercantum dalam Ketentuan Penggunaan Rekrut dan informasi lain yang tercantum di Situs) menetapkan dasar atas perolehan, pengumpulan, pengolahan, penganalisisan, penampilan, pengiriman, pembukaan, penyimpanan, perubahan, penghapusan dan/atau segala bentuk pengelolaan yang terkait dengan data atau informasi yang mengidentifikasikan atau dapat digunakan untuk mengidentifikasi Pengguna yang Pengguna berikan kepada Rekrut atau yang Rekrut kumpulkan dari Pengguna maupun pihak ketiga (selanjutnya disebut sebagai "Data Pribadi").
                </Text>
                <Text mt="2">
                Dengan mengklik “Daftar” (Register) atau pernyataan serupa yang tersedia di laman pendaftaran Situs, Pengguna menyatakan bahwa setiap Data Pribadi Pengguna merupakan data yang benar dan sah, Pengguna mengakui bahwa ia telah diberitahukan dan memahami ketentuan Kebijakan Privasi ini serta Pengguna memberikan persetujuan kepada Rekrut untuk memperoleh, mengumpulkan, mengolah, menganalisis, menampilkan, mengirimkan, membuka, menyimpan, mengubah, menghapus, mengelola dan/atau mempergunakan data tersebut untuk tujuan sebagaimana tercantum dalam Kebijakan Privasi.
                </Text>
                <Accordion mt="6" w="100%" allowToggle>
                  {
                    pp.map((chap, idx) => {
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
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
