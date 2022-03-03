import React, { useState } from "react"

import { ProfileDetails } from "../profile"
import { ConfirmButton } from "../job"
import { Payment } from ".."

import { useDisclosure } from "@chakra-ui/react"
import { Box, Flex, Spacer } from "@chakra-ui/react"

export default function ProfileCard({ worker, job, preview }) {
  const [ isConfrimOpen, setIsConfirmOpen ] = useState()

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Payment worker={worker} job={job} isOpen={isOpen} onClose={onClose} />
      <Box p="4" mb="2" shadow={!preview && "md"} borderRadius="md"
        _hover={!preview && { bgColor:"gray.50" }}>
        <Flex>
          <ProfileDetails user={worker}  />
          <Spacer></Spacer>
          {
            !preview && (
              <ConfirmButton action="Pilih" isOpen={isConfrimOpen} setIsOpen={setIsConfirmOpen} 
                onClick={() => {
                  console.log("HIRE NOW")
                  onOpen()
                }} 
              />
            )
          }
        </Flex>
      </Box>
    </>
  )
}
