import React from "react"
import { MdWork, MdLocationOn } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"

import { Box, HStack, Link, Spacer, Text, Flex, Icon, Avatar } from "@chakra-ui/react"
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
        onClick={() => window.location.href="/job/"+job._id}>
        <HStack w="100%">
          <Flex w="50%">
            <Flex p="2">
              {/* <Image src={job.company.photo} h="95" borderRadius="md" /> */}
              <Avatar h="95" w="95" borderRadius="md" src={job.author.photo} />
            </Flex>
            <Box ml="2" mt="2">
              <HStack spacing="2">
                <Text fontSize="lg" fontWeight="semibold">{job.title}</Text>
                <JobBadges job={job} />
              </HStack>
              <Flex>
                <Link href={"/profile/"+job.author._id}>
                  <Text fontSize="md" color="gray.600">{job.author.name}</Text>
                </Link>
              </Flex>
              {
                (job.author.rating != null && job.author.rating > 0) &&  
                  <Star rating={job.author.rating} />
              }
              <Text fontSize="sm" color="gray.600">
                {
                  (job.status == "HIRING") ? job.registrants.length+" Pelamar" : (
                    (job.status == "WAITING") ? "Menunggu Konfirmasi Pekerja" : (
                      (job.status == "ONGOING") ? "Dalam Pengerjaan" : (
                        (job.status == "REVIEWING") ? "Dalam Proses Review" : (
                          (job.status == "DONE") ? "Pekerjaan Selesai" : ""
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
