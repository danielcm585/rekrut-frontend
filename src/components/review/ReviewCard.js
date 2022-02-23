import React from "react"

import { Star } from "."

import { Box, HStack, Flex, Image, Link, Text } from "@chakra-ui/react"

export default function ReviewCard({ review }) {
  return (
    <>
      <Box p="3" mt="2" mb="2" shadow="md" borderRadius="md" 
        _hover={{ bgColor:"gray.50" }}>
        <HStack mb="2">
          <Flex p="2">
            <Image src={review.user.photo} h="55" borderRadius="md" />
          </Flex>
          <Box>
            <Flex>
              <Link href={"/profile/"+review.user.id}>
                <Text fontSize="xl" fontWeight="semibold">{review.user.name}</Text>
              </Link>
            </Flex>
            <Star rate={review.rate} />
          </Box>
        </HStack>
        <Flex pl="2">
          <Text>{review.body}</Text>
        </Flex>
      </Box>
    </>
  )
}
