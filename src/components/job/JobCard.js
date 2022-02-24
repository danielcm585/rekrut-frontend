import React from "react"
import { MdWork, MdLocationOn, MdAttachMoney } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"

import { Box, HStack, Image, Link, Spacer, Text, Flex, Icon } from "@chakra-ui/react"

export default function JobCard({ job }) {
  const parseAmount = (amount) => {
    return "IDR "+amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")+",00";
  }

  return (
    <>
      <Box p="2" mb="2" shadow="md" borderRadius="md"
        _hover={{ bgColor:"gray.50" }}
        onClick={() => window.location.href="/job/"+job.id}>
        <HStack w="100%">
          <HStack w="50%">
            <Flex p="2">
              <Image src={job.company.photo} h="55" borderRadius="md" />
            </Flex>
            <Box>
              <Text fontSize="lg" fontWeight="semibold">{job.title}</Text>
              <Flex>
                <Link href={"/profile/"+job.company.id}>
                  <Text color="gray.600">{job.company.name}</Text>
                </Link>
              </Flex>
            </Box>
          </HStack>
          <Box w="16%" pl="3">
              <HStack>
                <Icon as={MdLocationOn} color="gray.600" />
                <Text color="gray.600">Lokasi</Text>
              </HStack>
              <Text fontWeight="semibold">{job.location}</Text>
          </Box>
          <Spacer></Spacer>
          <Box w="16%" pl="2">
              <HStack>
                <Icon as={MdWork} color="gray.600" />
                <Text color="gray.600">Tipe pekerjaan</Text>
              </HStack>
              <Text fontWeight="semibold">{job.type}</Text>
          </Box>
          <Spacer></Spacer>
          <Box w="16%" pl="2">
              <HStack>
                <Icon as={FaMoneyBillWave} color="gray.600" />
                <Text color="gray.600">Upah</Text>
              </HStack>
              <Text fontWeight="semibold">{parseAmount(job.salary)}</Text>
          </Box>
        </HStack>
      </Box>
    </>
  )
}
