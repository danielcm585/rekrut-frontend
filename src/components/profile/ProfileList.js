import React from "react"

import { Star } from "../review"
import { ProfileBadges } from "."

import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react"

export default function ProfileList({ profiles }) {  
  return (
    <>
      <Flex mt="2" direction="column">
      {
        profiles.map((worker, idx) => {
          return (
            <>
              <Box p="2" pr="4" mb="2" shadow="md" borderRadius="md"
                _hover={{ bgColor:"gray.50" }}
                onClick={() => window.location.href="/profile/"+worker.id}>
                <Flex>
                  <Flex p="2">
                    <Image src={worker.photo} h="95" borderRadius="md" />
                  </Flex>
                  <Box ml="2" mt="2">
                    <HStack>
                      <Link href={"/profile/"+worker.id}>
                        <Text fontSize="lg" fontWeight="semibold">{worker.name}</Text>
                      </Link>
                      <ProfileBadges profile={worker} />
                    </HStack>
                    <Text fontSize="md" color="gray.600">{worker.category}</Text>
                    {
                      (worker.reviews != null && worker.reviews.length > 0) && 
                        <Star rate={worker.rating} />
                    }
                    {/*TODO: Add the number of job done */}
                  </Box>
                </Flex>
              </Box>
            </>
          )
        })
      }
      </Flex>
    </>
  )
}
