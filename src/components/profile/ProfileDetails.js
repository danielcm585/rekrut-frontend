import React from "react"
import { IoMdMail, IoMdDocument } from "react-icons/io"
import { MdPhone } from "react-icons/md"

import { ProfileForm } from "./";
import { Star } from "../review"

import { useDisclosure } from "@chakra-ui/react";
import { Image, Box, Text, HStack, Spacer, Link, Icon, Button, Flex } from "@chakra-ui/react"

export default function ProfileDetails({ user, me }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {/* <Box bg="#2A2A30"> */}
      <Flex>
        <Flex direction="column">
          <Flex>
            <Image mr="5" h="165px" src={user.photo} borderRadius="lg" />
            <Box>
              <Link href={"/profile/"+user.id}>
                {/* <Text fontSize="2xl" fontWeight="semibold" color="white">{user.name}</Text> */}
                <Text fontSize="2xl" fontWeight="semibold">{user.name}</Text>
              </Link>
              {/* <Text fontSize="lg" color="white">{user.category}</Text>  */}
              <Text fontSize="lg">{user.category}</Text> 
              {
                (user.reviews != null && user.reviews.length > 0) && <Star rate={user.rate} />
              }
              <Link href={"mailto:"+user.email} isExternal>
                <HStack>
                  <Icon as={IoMdMail} color="#FF8450" />
                  {/* <Text color="white">{user.email}</Text> */}
                  <Text>{user.email}</Text>
                </HStack>
              </Link>
              <Link href={"https://wa.me/"+user.phone} isExternal>
                <HStack>
                  <Icon as={MdPhone} color="#FF8450" />
                  {/* <Text color="white">{"+"+user.phone}</Text> */}
                  <Text>{user.phone}</Text>
                </HStack>
              </Link>
              <Link href={user.cv} isExternal>
                <HStack>
                  <Icon as={IoMdDocument} color="#FF8450" />
                  {/* <Text color="white">{user.name+"'s CV"}</Text> */}
                  <Text>{"CV "+user.name}</Text>
                </HStack>
              </Link>
            </Box>
            <Spacer></Spacer>
          </Flex>
          {/* <Text mt="5" color="white">{user.bio}</Text> */}
          {
            (user.bio != null) && <Text mt="5">{user.bio}</Text>
          }
        </Flex>
        {
          me && (
            <>
              {/* <Button variant="ghost" color="white">Edit Profil</Button> */}
              <ProfileForm isOpen={isOpen} onClose={onClose} user={user} />
              <Button pl="8" pr="8" variant="ghost" borderRadius="50"
                onClick={() => onOpen()}>
                Edit Profil
              </Button>
            </>
          )
        }
      </Flex>
    </>
  )
}
