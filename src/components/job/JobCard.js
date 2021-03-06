import React, { useState } from "react"

import { MdWork, MdLocationOn } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"

import { JobBadges } from "."
import { Star } from "../review"

import { useToast, useMediaQuery, useColorMode } from "@chakra-ui/react"
import { Box, Button, HStack, Link, Spacer, Text, Flex, Icon, Avatar, SimpleGrid } from "@chakra-ui/react"

export default function JobCard({ job, preview, worker }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode == "dark")

  const parseAmount = (amount) => {
    return "IDR "+amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")+",00";
  }

  const [ isLoading, setIsLoading ] = useState(false)
  
  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  if (!isBigScreen) return (
    <>
      <Box p="2" mb="2" shadow="lg" borderRadius="md"
        _hover={{ bgColor: (isDark ? "#1D2330" : "gray.50") }}
        onClick={() => window.location.href="/job/"+job._id}>
        <Flex>
          <Flex p="2">
            <Avatar h="115px" w="115px" borderRadius="md" src={job.author.profPic} />
          </Flex>
          <Box ml="2" mt="2">
            {
              (!preview) && 
                <JobBadges job={job} />
            }
            <HStack spacing="2">
              <Text fontSize="lg" fontWeight="semibold">{job.title}</Text>
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
        {
          (!preview) ? (
            <>
              <HStack mt="1">
                <Box ml="2">
                  <HStack>
                    <Icon as={MdLocationOn} color="gray.600" />
                    <Text color="gray.600">Lokasi</Text>
                  </HStack>
                  <HStack mt="1">
                    <Icon as={MdWork} color="gray.600" />
                    <Text color="gray.600">Job Type</Text>
                  </HStack>
                  <HStack mt="1">
                    <Icon as={FaMoneyBillWave} color="gray.600" />
                    <Text color="gray.600">Salary</Text>
                  </HStack>
                </Box>
                <Box pl="38px">
                  <Text fontWeight="semibold">{job.location}</Text>
                  <Text mt="1" fontWeight="semibold">{job.jobType}</Text>
                  <Text mt="1" fontWeight="semibold">{parseAmount(job.salary)}</Text>
                </Box>
              </HStack>
            </>
          ) : (
            <>
              {/* FIXME: Maybe need some fix */}
              <Spacer></Spacer>
              <Button pl="10" pr="10" borderRadius="50" bgColor="#FF8450" isLoading={isLoading}
                onClick={() => {
                  setIsLoading(true)
                  fetch("https://protected-castle-75235.herokuapp.com/client/offer", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: JSON.stringify({
                      worker: worker._id,
                      job: job._id
                    })
                  })
                  .then(resp => resp.json())
                  .then(json => {
                    if (json.statusCode >= 400) throw new Error(json.message)
                    setIsLoading(false)
                    toast({
                      title: "Undangan berhasil dikirim",
                      status: "success"
                    })
                  })
                  .catch((err) => {
                    setIsLoading(false)
                    toast({
                      title: err.message,
                      status: "error"
                    })
                  })
                }}>
                Undang
              </Button>
            </>
          )
        }
      </Box>
    </>
  )
  return (
    <>
      <Box p="2" mb="2" shadow="lg" borderRadius="md"
        _hover={{ bgColor: (isDark ? "#1D2330" : "gray.50") }}
        onClick={() => window.location.href="/job/"+job._id}>
        <HStack w="100%">
          <Flex w="50%">
            <Flex p="2">
              <Avatar h="95px" w="95px" borderRadius="md" src={job.author.profPic} />
            </Flex>
            <Box ml="2" mt="2">
              <HStack spacing="2">
                <Text fontSize="lg" fontWeight="semibold">{job.title}</Text>
                {
                  (!preview) && 
                    <JobBadges job={job} />
                }
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
          {
            (!preview) ? (
              <>
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
                  <Text fontWeight="semibold">{job.jobType}</Text>
                </Box>
                <Spacer></Spacer>
                <Box w="16%" pl="2">
                    <HStack>
                      <Icon as={FaMoneyBillWave} color="gray.600" />
                      <Text color="gray.600">Upah</Text>
                    </HStack>
                    <Text fontWeight="semibold">{parseAmount(job.salary)}</Text>
                </Box>
              </>
            ) : (
              <>
                <Spacer></Spacer>
                <Button pl="10" pr="10" borderRadius="50" bgColor="#FF8450" isLoading={isLoading}
                  onClick={() => {
                    setIsLoading(true)
                    fetch("https://protected-castle-75235.herokuapp.com/client/offer", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      credentials: "include",
                      body: JSON.stringify({
                        worker: worker._id,
                        job: job._id
                      })
                    })
                    .then(resp => resp.json())
                    .then(json => {
                      if (json.statusCode >= 400) throw new Error(json.message)
                      setIsLoading(false)
                      toast({
                        title: "Undangan berhasil dikirim",
                        status: "success"
                      })
                    })
                    .catch((err) => {
                      setIsLoading(false)
                      toast({
                        title: err.message,
                        status: "error"
                      })
                    })
                  }}>
                  Undang
                </Button>
              </>
            )
          }
        </HStack>
      </Box>
    </>
  )
}
