import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Footer, Navbar } from "../components"
import { ProfileDetails } from "../components/profile"
import { ReviewList } from "../components/review"

import { useToast, useMediaQuery } from "@chakra-ui/react"
import { Box, Flex, Text } from "@chakra-ui/react"

export default function Profile() {
  const me = JSON.parse(localStorage.getItem("user"))
  
  const { id } = useParams()

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    fetch("https://protected-castle-75235.herokuapp.com/user/"+id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.statusCode >= 400) throw new Error(json.message)
      json.role = (json.worker != null ? "worker" : "client")
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
    if (user.role == "worker") document.title = user.name+" | "+user.category
    else document.title = user.name
  }, [ user ])

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  if (user == null) return <></>
  return (
    <>
      <Navbar />
      <Flex w="100%">
        <Flex w="100%" justifyContent="center">
          <Flex w="80%" pt={isBigScreen ? "10" : "5"} pb="10">
            <ProfileDetails user={user} client={me != null && me.role == "client"} />
          </Flex>
        </Flex>
      </Flex>
      {
        (user.review != null && user.review.length != 0) && (
          <>
            <Flex w="100%" justifyContent="center">
              <Box w="85%">
                <Flex>
                  <Text fontSize="xl" fontWeight="semibold">Reviews</Text>
                </Flex>
                <ReviewList reviews={user.review} />
              </Box>
            </Flex>
          </>
        )
      }
      <Footer />
    </>
  )
}
