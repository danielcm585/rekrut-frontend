import React from "react"

import { Star } from "."

import { Box, Flex, Link, Text, Avatar } from "@chakra-ui/react"

export default function ReviewCard({ review }) {
  console.log(review)
  return (
    <>
      <Box p="3" mt="2" mb="2" shadow="md" borderRadius="md" 
        _hover={{ bgColor:"gray.50" }}>
        <Flex>
          <Flex p="2">
            <Avatar h="95px" w="95px" borderRadius="md" src={review.author.profPic} />
          </Flex>
          <Box ml="2" mt="2">
            <Flex>
              <Link href={"/profile/"+review.author.id}>
                <Text fontSize="xl" fontWeight="semibold">{review.author.name}</Text>
              </Link>
            </Flex>
            <Star rating={review.rating} />
            <Text>{review.body}</Text>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
