import React from "react"

import { Star } from "."

import { Box, HStack, Flex, Image, Link, Text } from "@chakra-ui/react"

export default function ReviewCard({ review }) {
  return (
    <>
      <Box p="3" mt="2" mb="2" shadow="md" borderRadius="md" 
        _hover={{ bgColor:"gray.50" }}>
        <Flex>
          <Flex p="2">
            <Image src={review.user.photo} h="95" borderRadius="md" />
          </Flex>
          <Box ml="2" mt="2">
            <Flex>
              <Link href={"/profile/"+review.user.id}>
                <Text fontSize="xl" fontWeight="semibold">{review.user.name}</Text>
              </Link>
            </Flex>
            <Star rate={review.rate} />
            <Text>{review.body}</Text>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
