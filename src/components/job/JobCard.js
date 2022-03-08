import React from "react"
import { MdWork, MdLocationOn } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"

import { Box, HStack, Image, Link, Spacer, Text, Flex, Icon, Badge } from "@chakra-ui/react"
import { Star } from "../review"
import { JobBadges } from "."

export default function JobCard({ job }) {
  const parseAmount = (amount) => {
    return "IDR "+amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")+",00";
  }

  return (
    <>
      <Box p="2" mb="2" shadow="md" borderRadius="md"
        _hover={{ bgColor: "gray.50" }}
        onClick={() => window.location.href="/job/"+job.id}>
        <HStack w="100%">
          <Flex w="50%">
            <Flex p="2">
              <Image src={job.company.photo} h="95" borderRadius="md" />
            </Flex>
            <Box ml="2" mt="2">
              <HStack spacing="2">
                <Text fontSize="lg" fontWeight="semibold">{job.title}</Text>
                <JobBadges job={job} />
              </HStack>
              <Flex>
                <Link href={"/profile/"+job.company.id}>
                  <Text fontSize="md" color="gray.600">{job.company.name}</Text>
                </Link>
              </Flex>
              {
                (job.company.rating != null && job.company.rating > 0) &&  
                  <Star rating={job.company.rating} />
              }
              <Text fontSize="sm" color="gray.600">
                {
                  (job.status == "hiring") ? job.registrants.length+" Pelamar" : (
                    (job.status == "waiting confirmation") ? "Menunggu Konfirmasi Pekerja" : (
                      (job.status == "on progress") ? "Dalam Pengerjaan" : (
                        (job.status == "in review") ? "Dalam Proses Review" : (
                          (job.status == "done") ? "Pekerjaan Selesai" : ""
                        )
                      )
                    )
                  )
                }
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
