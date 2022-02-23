import React from "react"
import { MdWork, MdLocationOn, MdAttachMoney } from "react-icons/md"

import { Box, HStack, Image, Link, Spacer, Text, Flex, Icon } from "@chakra-ui/react"

export default function JobCard({ job }) {
  return (
    <>
      <Box p="3" pr="6" mt="2" mb="2" shadow="md" borderRadius="md"
        _hover={{ bgColor:"gray.50" }}
        onClick={() => window.location.href="/job/"+job.id}>
        <HStack mb="2">
          <Flex p="2">
            <Image src={job.company.photo} h="55" borderRadius="md" />
          </Flex>
          <Box>
            <Text fontSize="xl" fontWeight="semibold">{job.title}</Text>
            <Flex>
              <Link href={"/profile/"+job.company.id}>
                <Text color="gray.600">{job.company.name}</Text>
              </Link>
            </Flex>
          </Box>
          {/*FIXME: use grid maybe? */}
          <Spacer></Spacer><Spacer></Spacer><Spacer></Spacer><Spacer></Spacer><Spacer></Spacer><Spacer></Spacer><Spacer></Spacer><Spacer></Spacer><Spacer></Spacer><Spacer></Spacer><Spacer></Spacer><Spacer></Spacer><Spacer></Spacer><Spacer></Spacer>
          <Flex direction="column">
            <Flex justifyContent="center">
              <HStack>
                <Icon as={MdLocationOn} color="gray.600" />
                <Text color="gray.600">Lokasi</Text>
              </HStack>
            </Flex>
            <Flex justifyContent="center">
              <Text fontWeight="semibold">{job.location}</Text>
            </Flex>
          </Flex>
          <Spacer></Spacer>
          <Flex direction="column">
            <Flex justifyContent="center">
              <HStack>
                <Icon as={MdWork} color="gray.600" />
                <Text color="gray.600">Job Type</Text>
              </HStack>
            </Flex>
            <Flex justifyContent="center">
              <Text fontWeight="semibold">{job.type}</Text>
            </Flex>
          </Flex>
          <Spacer></Spacer>
          <Flex direction="column">
            <Flex justifyContent="center">
              <HStack>
                <Icon as={MdAttachMoney} color="gray.600" />
                <Text color="gray.600">Salary</Text>
              </HStack>
            </Flex>
            <Flex justifyContent="center">
              <Text fontWeight="semibold">{"IDR "+job.salary}</Text>
            </Flex>
          </Flex>
        </HStack>
      </Box>
    </>
  )
}
