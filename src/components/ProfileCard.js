import React from "react"
import { BiLinkExternal } from "react-icons/bi"
import { IoMdMail, IoMdDocument } from "react-icons/io"
import { MdPhone } from "react-icons/md"

import { Image, Box, Text, HStack, Spacer, Link, Icon, Button, Flex } from "@chakra-ui/react"

export default function ProfileCard({ user }) {
  return (
    <>
    <Box>
      <Flex>
        <Image mr="5" h="145px" src={user.photo} borderRadius="lg" />
        <Box>
          <Text fontSize="2xl" fontWeight="semibold">{user.name}</Text>
          <Text fontSize="lg" color="gray.600">{user.category}</Text> 
          <Link href={"mailto:"+user.email} isExternal>
            <HStack>
              <Icon as={IoMdMail} color="gray.600" />
              <Text color="gray.600">{user.email}</Text>
              {/* <Icon as={BiLinkExternal} color="gray.600" /> */}
            </HStack>
          </Link>
          <Link href={"https://wa.me/"+user.phone} isExternal>
            <HStack>
              <Icon as={MdPhone} color="gray.600" />
              <Text color="gray.600">{"+"+user.phone}</Text>
              {/* <Icon as={BiLinkExternal} color="gray.600" /> */}
            </HStack>
          </Link>
          <Link href={user.cv}>
            <HStack>
              <Icon as={IoMdDocument} color="gray.600" />
              <Text color="gray.600">{user.name+"'s CV"}</Text>
              {/* <Icon as={BiLinkExternal} color="gray.600" /> */}
            </HStack>
          </Link>
        </Box>
        <Spacer></Spacer>
        <Button variant="ghost">Edit Profil</Button> {/*FIXME: Add onClick func*/}
      </Flex>
      <Text mt="5">{user.bio}</Text>
    </Box>
    </>
  )
}
