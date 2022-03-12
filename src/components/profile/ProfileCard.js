import React from "react"

import { Star } from "../review"
import { Payment } from ".." 
import { ProfileBadges } from "."

import { useDisclosure, useToast } from "@chakra-ui/react"
import { Box, Flex, Spacer, Image, HStack, Link, Text, Button } from "@chakra-ui/react"

export default function ProfileCard({ worker, job }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  return (
    <>
      <Payment worker={worker} job={job} isOpen={isOpen} onClose={onClose} />
      <Box p="2" pr="4" mb="2" shadow="md" borderRadius="md"
        _hover={{ bgColor:"gray.50" }}
        onClick={() => {
          if (job != null) return
          window.location.href = "/profile/"+worker._id
        }}>
        <Flex>
          <Flex p="2">
            <Image src={worker.photo} h="95" borderRadius="md" />
          </Flex>
          <Box ml="2" mt="2">
            <HStack>
              <Link href={"/profile/"+worker._id} isExternal>
                <Text fontSize="lg" fontWeight="semibold">{worker.name}</Text>
              </Link>
              <ProfileBadges profile={worker} />
            </HStack>
            <Text fontSize="md" color="gray.600">{worker.category}</Text>
            {
              (worker.rating != null && worker.rating > 0) && 
                <Star rating={worker.rating} />
            }
            <Text fontSize="sm" color="gray.600">{worker.jobDone.length+" Pekerjaan selesai"}</Text>
          </Box>
          {
            (job != null) && (
              <>
                <Spacer></Spacer>
                <Button mt="2" bgColor="#FF8450" borderRadius="50" 
                  onClick={() => {
                    console.log("HIRE NOW")
                    toast({
                      title: "Pembayaran akan diteruskan ke pekerja saat pekerjaan selesai",
                      status: "info"
                    })
                    onOpen()
                  }}>
                  Pilih
                </Button>
              </>
            )
          }
        </Flex>
      </Box>
    </>
  )
}
