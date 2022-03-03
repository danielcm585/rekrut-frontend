import React from "react"

import { Star } from "../review"

import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react"

export default function ProfileList({ worker }) {  
  return (
    <>
      <Box p="2" mb="2" shadow="md" borderRadius="md"
        _hover={{ bgColor:"gray.50" }}
        onClick={() => window.location.href="/profile/"+worker.id}>
        <HStack>
          <Flex p="2">
            <Image src={worker.photo} h="55" borderRadius="md" />
          </Flex>
          <Box>
            <Link href={"/profile/"+worker.id}>
              <Text fontSize="lg" fontWeight="semibold">{worker.name}</Text>
            </Link>
            {
              (worker.reviews != null && worker.reviews.length > 0) && 
                <Star rating={worker.rating} />
            }
          </Box>
        </HStack>
      </Box>
    </>
  )
}
