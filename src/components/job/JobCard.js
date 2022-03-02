import React from "react"
import { MdWork, MdLocationOn, MdAttachMoney } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"

import { Box, HStack, Image, Link, Spacer, Text, Flex, Icon, Badge } from "@chakra-ui/react"
import { Star } from "../review"

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
          <Flex w="50%">
            <Flex p="2">
              <Image src={job.company.photo} h="70" borderRadius="md" />
            </Flex>
            <Box ml="2">
              <HStack spacing="2">
                <Text fontSize="lg" fontWeight="semibold">{job.title}</Text>
                {
                  (job.salary > 5000000) && (
                    <Badge size="sm" colorScheme="orange">
                      Best Offer
                    </Badge>
                  )
                }
                {
                  (job.company.rating > 4) && (
                    <Badge size="sm" colorScheme="green">
                      Great Company
                    </Badge>
                  )
                }
                {
                  /*TODO: Limited Time */
                  (job.registrants.length > 5) && (
                    <Badge size="sm" colorScheme="red">
                      Limited Time
                    </Badge>
                  )
                }
              </HStack>
                <Flex>
                  <Link href={"/profile/"+job.company.id}>
                    <Text fontSize="md" color="gray.600">{job.company.name}</Text>
                  </Link>
                </Flex>
                {
                  (job.company.rating != null) && <Star rate={job.company.rating} />
                }
              <Text fontSize="sm" color="gray.600">
                {job.registrants.length+" Pelamar"}
              </Text>
            </Box>
          </Flex>
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
