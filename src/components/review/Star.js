import React from "react"
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im"

import { HStack, Icon, Text } from "@chakra-ui/react"

export default function Star({ rate }) {
  const stars = [1,2,3,4,5]

  return (
    <>
      <HStack spacing="1">
        {
          stars.map((cur) => {
            if (rate >= cur) return <Icon as={ImStarFull} color="#FF8450" />
            if (rate <= cur-1) return <Icon as={ImStarEmpty} color="#FF8450" />
            return <Icon as={ImStarHalf} color="#FF8450" />
          })
        }
        <Text>{"("+rate+")"}</Text>
      </HStack>
    </>
  )
}
