import React from "react"

import { BiStar, BiTimeFive, BiLike } from "react-icons/bi"

import { useMediaQuery } from "@chakra-ui/react"
import { Icon, Badge, Flex } from "@chakra-ui/react"

export default function JobBadges({ job }) {
  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Flex direction={!isBigScreen && "column"}>
        {
          (job.salary > 5000000) && (
            <Flex>
              <Badge size="sm" colorScheme="orange">
                <Icon mr="1" as={BiLike} />
                Best Offer
              </Badge>
            </Flex>
          )
        }
        {
          (job.author.rating != null && job.author.rating > 4) && (
            <Flex>
              <Badge ml={isBigScreen && "1"} mt={!isBigScreen && "1"} size="sm" colorScheme="green">
                <Icon mr="1" as={BiStar} />
                Great Company
              </Badge>
            </Flex>
          )
        }
        {
          (job.registrants.length > 5) && (
            <Flex>
              <Badge ml={isBigScreen && "1"} mt={!isBigScreen && "1"} size="sm" colorScheme="red">
                <Icon mr="1" as={BiTimeFive} />
                Limited Time
              </Badge>
            </Flex>
          )
        }
      </Flex>
    </>
  )
}
