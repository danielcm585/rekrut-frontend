import React from "react"
import { BiLinkExternal } from "react-icons/bi"
import { IoMdMail, IoMdDocument } from "react-icons/io"
import { MdPhone } from "react-icons/md"

import { Image, Box, Text, HStack, Spacer, Link, Icon, Button, Flex } from "@chakra-ui/react"

export default function ProfileCard({ user }) {
  return (
    <>
      <Box bg="#2A2A30">
        <Flex>
          <Image mr="5" h="145px" src={user.photo} borderRadius="lg" />
          <Box>
            <Text fontSize="2xl" fontWeight="semibold" color="white">{user.name}</Text>
            <Text fontSize="lg" color="white">{user.category}</Text> 
            <Link href={"mailto:"+user.email} isExternal>
              <HStack>
                <Icon as={IoMdMail} color="#FF8450" />
                <Text color="white">{user.email}</Text>
              </HStack>
            </Link>
            <Link href={"https://wa.me/"+user.phone} isExternal>
              <HStack>
                <Icon as={MdPhone} color="#FF8450" />
                <Text color="white">{"+"+user.phone}</Text>
              </HStack>
            </Link>
            <Link href={user.cv}>
              <HStack>
                <Icon as={IoMdDocument} color="#FF8450" />
                <Text color="white">{user.name+"'s CV"}</Text>
              </HStack>
            </Link>
          </Box>
          <Spacer></Spacer>
          <Button variant="ghost" color="white">Edit Profil</Button> {/*FIXME: Add onClick func*/}
        </Flex>
        <Text mt="5" color="white">{user.bio}</Text>
      </Box>
    </>
  )
}
