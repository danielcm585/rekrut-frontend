import React from "react"

import { Star } from "."

import { useColorMode } from "@chakra-ui/react"
import { Box, Flex, Link, Text, Avatar } from "@chakra-ui/react"

export default function ReviewCard({ review }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode == "dark")

  return (
    <>
      <Box p="3" mt="2" mb="2" shadow="lg" borderRadius="md" 
        _hover={{ bgColor:(isDark ? "#1D2330" : "gray.50") }}>
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
