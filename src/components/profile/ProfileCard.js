import React, { useState } from "react"

import { ProfileDetails } from "../profile"
import { ConfirmButton } from "../job"

import { Box, Flex, Spacer } from "@chakra-ui/react"

export default function ProfileCard({ profile, setError }) {
  const [ isConfrimOpen, setIsConfirmOpen ] = useState()

  return (
    <>
      <Box p="4" mb="2" shadow="md" borderRadius="md"
        _hover={{ bgColor:"gray.50" }}>
        <Flex>
          <ProfileDetails user={profile} />
          <Spacer></Spacer>
          <ConfirmButton action="Hire" isOpen={isConfrimOpen} setIsOpen={setIsConfirmOpen} 
            onClick={() => {
              // TODO: Send request to api
              console.log("HIRE NOW")
            }} />
        </Flex>
      </Box>
    </>
  )
}
