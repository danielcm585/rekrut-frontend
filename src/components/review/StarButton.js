import React from "react"
import { ImStarEmpty, ImStarFull } from "react-icons/im"

import { Flex, HStack, Icon, Text } from "@chakra-ui/react"

export default function StarButton({ rating, setRating }) {
  const stars = [1,2,3,4,5]

  return (
    <>
      <Flex w="100%">
        <HStack w="100%" spacing="1">
          {
            stars.map((cur) => {
              if (rating >= cur) return <Icon boxSize="7" as={ImStarFull} color="#FF8450" onClick={() => setRating(cur)} />
              return <Icon boxSize="7" as={ImStarEmpty} color="#FF8450" onClick={() => setRating(cur)} />
            })
          }
          <Text fontSize="2xl">{"("+(rating == null ? "-" : rating)+")"}</Text>
        </HStack>
      </Flex>
    </>
  )
}
