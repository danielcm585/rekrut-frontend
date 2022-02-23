import React, { useEffect } from "react"
import { ImStarEmpty, ImStarFull } from "react-icons/im"

import { HStack, Icon, Text } from "@chakra-ui/react"

export default function StarButton({ rate, setRate }) {
  const stars = [1,2,3,4,5]

  useEffect(() => {
    console.log("RELOAD")
  }, [ rate ])

  return (
    <>
      <HStack spacing="1">
        {
          stars.map((cur) => {
            if (rate >= cur) return <Icon as={ImStarFull} color="#FF8450" onClick={() => setRate(cur)} />
            return <Icon as={ImStarEmpty} color="#FF8450" onClick={() => setRate(cur)} />
          })
        }
        <Text>{"("+rate+")"}</Text>
      </HStack>
    </>
  )
}
