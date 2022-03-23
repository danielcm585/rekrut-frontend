import React from "react"

import { BiStar, BiTimeFive, BiLike } from "react-icons/bi"

import { Icon, Badge } from "@chakra-ui/react"

export default function JobBadges({ job }) {
  return (
    <>
      {
        (job.salary > 5000000) && (
          <Badge size="sm" colorScheme="orange">
            <Icon mr="1" as={BiLike} />
            Best Offer
          </Badge>
        )
      }
      {
        (job.author.rating != null && job.author.rating > 4) && (
          <Badge size="sm" colorScheme="green">
            <Icon mr="1" as={BiStar} />
            Great Company
          </Badge>
        )
      }
      {
        (job.registrants.length > 5) && (
          <Badge size="sm" colorScheme="red">
            <Icon mr="1" as={BiTimeFive} />
            Limited Time
          </Badge>
        )
      }
    </>
  )
}
