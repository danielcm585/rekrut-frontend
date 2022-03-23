import React from "react"

import { BiStar, BiTimeFive, BiLike } from "react-icons/bi"

import { Icon, Badge } from "@chakra-ui/react"

export default function ProfileBadges({ profile }) {
  return (
    <>
      {
        (profile.review.length > 5) && (
          <Badge size="sm" colorScheme="orange">
            <Icon mr="1" as={BiLike} />
            Experienced
          </Badge>
        )
      }
      {
        (profile.rating > 4) && (
          <Badge size="sm" colorScheme="green">
            <Icon mr="1" as={BiStar} />
            Professional
          </Badge>
        )
      }
    </>
  )
}
