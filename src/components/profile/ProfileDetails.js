import React, { useState } from "react"
import { IoMdMail, IoMdDocument } from "react-icons/io"
import { MdPhone } from "react-icons/md"

import { ChooseJob, ConfirmButton } from "../job";
import { Star } from "../review"
import { ProfileForm } from "./";

import { useDisclosure } from "@chakra-ui/react";
import { Avatar, Box, Text, HStack, Spacer, Link, Icon, Button, Flex } from "@chakra-ui/react"

export default function ProfileDetails({ user, me, client }) {
  const [ isConfirmOpen, setIsConfirmOpen ] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [ isLoading, setIsLoading ] = useState(false)

  return (
    <>
      <Flex w="100%">
        <Flex direction="column">
          <Flex>
            <Avatar mr="5" h="165px" w="165px" src={user.photo} borderRadius="lg" />
            <Box>
              <Link href={"/profile/"+user.id} isExternal>
                <Text fontSize="2xl" fontWeight="semibold">{user.name}</Text>
              </Link>
              {
                (user.category != "-") &&
                  <Text fontSize="lg">{user.category}</Text> 
              }
              {
                (user.rating != null && user.rating > 0) && 
                  <Star rating={user.rating} />
              }
              <Link href={"mailto:"+user.email} isExternal>
                <HStack>
                  <Icon as={IoMdMail} color="#FF8450" />
                  <Text>{user.email}</Text>
                </HStack>
              </Link>
              <Link href={"https://wa.me/"+user.phone} isExternal>
                <HStack>
                  <Icon as={MdPhone} color="#FF8450" />
                  <Text>{user.phone}</Text>
                </HStack>
              </Link>
              {
                (user.role == "worker") && (
                  <Link href={user.cv} isExternal>
                    <HStack>
                      <Icon as={IoMdDocument} color="#FF8450" />
                      <Text>{"CV "+user.name}</Text>
                    </HStack>
                  </Link>
                )
              }
            </Box>
            <Spacer></Spacer>
          </Flex>
          {
            (user.bio != null) && <Text mt="5">{user.bio}</Text>
          }
        </Flex>
        {
          me && (
            <>
              <ProfileForm isOpen={isOpen} onClose={onClose} user={user} />
              <Spacer></Spacer>
              <Button pl="8" pr="8" variant="ghost" borderRadius="50"
                onClick={() => onOpen()}>
                Edit Profil
              </Button>
            </>
          )
        }
        {/* FIXME: duh */}
        {
          (client && user.role == "worker") && (
            <>
              <ChooseJob isOpen={isOpen} onClose={onClose} worker={user} />
              <Spacer></Spacer>
              <Button ml="2" pl="10" pr="10" borderRadius="50" bgColor="#FF8450"
                onClick={() => onOpen()}>
                <Text fontSize="sm" fontWeight="bold">Undang</Text>
              </Button> 
            </>
          )
        }
      </Flex>
    </>
  )
}
