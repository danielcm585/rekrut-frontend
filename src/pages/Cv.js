import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { MdEmail, MdPhone } from "react-icons/md"
import { IoMdGlobe } from "react-icons/io"

import { Navbar } from "../components"

import { useToast, useMediaQuery } from "@chakra-ui/react"
import { Link, HStack, Icon, Spacer, Text, Divider, Avatar, Box, Flex } from "@chakra-ui/react"

export default function Cv() {
  const { id } = useParams()

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    console.log("HERE")
    fetch("https://protected-castle-75235.herokuapp.com/user/"+id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.statusCode >= 400) throw new Error(json.message)
      json.role = (json.worker != null ? "worker" : "client")
      console.log(json)
      setUser(json)
    })
    .catch((err) => {
      toast({
        title: err.message,
        status: "error"
      })
    })
  }, [])

  useEffect(() => {
    if (user == null) return
    document.title = "CV "+user.name
  }, [ user ])

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  if (user == null || user.role != "worker") return <></>
  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Flex border="1px" mt="5" w="1000px">
          <Flex w="30%" pb="20" justifyContent="center" bg="#404040"> 
            <Flex mt="10" w="70%" direction="column">
              <Flex justifyContent="center">
                <Avatar h={isBigScreen ? "170px" : "100px"} w={isBigScreen ? "170px" : "100px"} src={user.profPic} />
              </Flex>
              <Box>
                <Text mt="9" fontSize="xl" fontWeight="semibold" color="white">
                  ABOUT ME
                </Text>
                {
                  user.bio.split('\n').map((par, idx) => 
                    <Text key={idx} mt="1" color="white">{par}</Text>
                  )
                }
              </Box>
              {
                (user.award != null && user.award.length > 0) && (
                  <>
                    <Divider mt="6" orientation="horizontal" />
                    <Box>
                      <Text mt="9" fontSize="xl" fontWeight="semibold" color="white">
                        AWARDS
                      </Text>
                      {
                        user.award.split('\n').map((par, idx) => 
                          <Text key={idx} mt="1" color="white">{par}</Text>
                        )
                      }
                    </Box>
                  </>
                )
              }
            </Flex>
          </Flex>
          <Flex w="70%" pb="20" justifyContent="center">
            <Flex w="90%" mt={isBigScreen ? "79" : "39"} direction="column">
              <Flex w="100%">
                <Box>
                  <Text fontSize={isBigScreen ? "4xl" : "2xl"} fontWeight="bold" color="#404040">{user.name.toUpperCase()}</Text>
                  <Text fontSize="xl" color="#404040">{user.skill}</Text>
                </Box>
                <Spacer></Spacer>
                <Box mt={isBigScreen ? "3" : "2"}>
                  <Link href={"mailto:"+user.email} isExternal>
                    <HStack>
                      <Icon as={MdEmail} color="#404040" />
                      <Text>{user.email}</Text>
                    </HStack>
                  </Link>
                  <Link href={"https://wa.me/"+user.phone} isExternal>
                    <HStack mt="2">
                      <Icon as={MdPhone} color="#404040" />
                      <Text>{user.phone}</Text>
                    </HStack>
                  </Link>
                  {
                    (user.website != null) && (
                      <Link href={user.website} isExternal>
                        <HStack mt="2">
                          <Icon as={IoMdGlobe} color="#404040" />
                          <Text>My Personal Web</Text>
                        </HStack>
                      </Link>
                    )
                  }
                </Box>
              </Flex>
              {
                (user.experience != null && user.experience.length > 0) && (
                  <>
                    <Divider mt="10" orientation="horizontal" />
                    <Box>
                      <Text mt="9" fontSize="xl" fontWeight="semibold" color="#404040">
                        EXPERIENCE
                      </Text>
                      {
                        user.experience.split('\n').map((par, idx) => 
                          <Text key={idx} mt="1" color="#404040">{par}</Text>
                        )
                      }
                    </Box>
                  </>
                )
              }
              {
                (user.education != null && user.education.length > 0) && (
                  <>
                    <Divider mt="6" orientation="horizontal" />
                    <Box>
                      <Text mt="9" fontSize="xl" fontWeight="semibold" color="#404040">
                        EDUCATION
                      </Text>
                      {
                        user.education.split('\n').map((par, idx) => 
                          <Text key={idx} mt="1" color="#404040">{par}</Text>
                        )
                      }
                    </Box>
                  </>
                )
              }
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
