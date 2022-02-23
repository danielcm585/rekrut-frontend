import React from "react"

import { ReviewCard } from "."

import { Flex } from "@chakra-ui/react"

export default function ReviewList({ reviews }) {
  return (
    <>
      <Flex w="100%" direction="column">
        {
          reviews.map((review, idx) => <ReviewCard key={idx} review={review} />)
        }
      </Flex>
    </>
  )
}
