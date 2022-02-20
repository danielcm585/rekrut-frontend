import React from "react"
import { MdWorkOutline, MdOutlineLocationOn, MdOutlineAttachMoney } from "react-icons/md"

import { Box, HStack, Image, Link, Spacer, Text, Flex, Icon } from "@chakra-ui/react"

export default function JobCard({ job }) {
  return (
    <>
      <Box p="3" pr="6" mt="2" mb="2" shadow="md" borderRadius="md"
        onClick={() => window.location.href="/job/"+job.id}>
        <HStack mb="2">
          <Flex p="2">
            <Image src={job.company.photo} h="55" borderRadius="md" />
          </Flex>
          <Box>
            <Link href={"/profile/"+job.company.id}>
              <Text color="gray.600">{job.company.name}</Text>
            </Link>
            <Text fontSize="xl" fontWeight="semibold">{job.title}</Text>
          </Box>
          <Spacer></Spacer> <Spacer></Spacer> <Spacer></Spacer> <Spacer></Spacer> <Spacer></Spacer> <Spacer></Spacer> <Spacer></Spacer> <Spacer></Spacer> <Spacer></Spacer>
          <Flex direction="column">
            <Flex justifyContent="center">
              <HStack>
                <Icon as={MdOutlineLocationOn} />
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
                <Icon as={MdWorkOutline} />
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
                <Icon as={MdOutlineAttachMoney} />
                <Text color="gray.600">Salary</Text>
              </HStack>
            </Flex>
            <Flex justifyContent="center">
              <Text fontWeight="semibold">{"IDR "+job.fee}</Text>
            </Flex>
          </Flex>
        </HStack>
      </Box>
    </>
  )
}
