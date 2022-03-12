import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Footer, Navbar } from "../components"
import { ProfileDetails } from "../components/profile"
import { ReviewList } from "../components/review"

import { useToast } from "@chakra-ui/react"
import { Box, Flex, Spacer, Button, Text } from "@chakra-ui/react"

export default function Profile() {
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
      setUser(json)
    })
    .catch((err) => {
      toast({
        title: err.message,
        status: "error"
      })
    })
  }, [])

  if (user == null) return <></>
  return (
    <>
      <Navbar />
      <Flex w="100%">
        <Flex w="100%" mt="66" justifyContent="center">
          <Flex w="80%" pt="10" pb="10">
            <ProfileDetails user={user} client={true} />
          </Flex>
        </Flex>
      </Flex>
      {
        (user.reviews != null && user.reviews.length != 0) && (
          <>
            <Flex w="100%" justifyContent="center">
              <Box w="85%">
                <Flex>
                  <Text fontSize="xl" fontWeight="semibold">Reviews</Text>
                  {/* <Button variant="ghost" borderRadius="50" onClick={() => window.location.href=""}>Lihat semua</Button> 
                  <Spacer></Spacer> */}
                  {/*TODO: Add Lihat semua */}
                </Flex>
                <ReviewList reviews={user.reviews} />
              </Box>
            </Flex>
          </>
        )
      }
      <Footer />
    </>
  )
}
