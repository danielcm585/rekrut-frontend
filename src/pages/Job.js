import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { MdLocationOn, MdWork } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"

import { Navbar, Footer, SearchBar } from "../components"
import { JobButton, JobBadges } from "../components/job"
import { ProfileList } from "../components/profile"
import { Star } from "../components/review"

import { useToast, useMediaQuery } from "@chakra-ui/react"
import { Avatar, Box, Flex, HStack, Link, Spacer, Text, Icon, SimpleGrid } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function Job() {
  const { id } = useParams()
  
  const user = JSON.parse(localStorage.getItem("user"))
  
  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })
  
  const [ job, setJob ] = useState(null)

  useEffect(() => {
    fetch("https://protected-castle-75235.herokuapp.com/job/"+id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.statusCode >= 400) throw new Error(json.message)
      setJob(json)
    })
    .catch((err) => {
      toast({
        title: err.message,
        status: "error"
      })
    })
  }, [])
  
  const [ canReview, setCanReview ] = useState(false)
  const [ registrants, setRegistrants ] = useState(null)
  useEffect(() => {
    if (job == null) return
    document.title = job.title+" | "+job.author.name
    
    setRegistrants(job.registrants)
    setCanReview(user != null && (user._id == job.author._id || job.chosen != null && user._id == job.chosen))
  }, [ job ])

  const parseAmount = (amount) => {
    return "IDR "+amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")+",00";
  }

  const [ keyword, setKeyword ] = useState("")

  const [ category, setCategory ] = useState("Semua kategori pekerjaan")
  const [ experience, setExperience ] = useState("Semua range pengalaman")
  const filterWorkers = (worker) => {
    return ((worker.category == category || category == "Semua kategori pekerjaan") && 
            (worker.review.length >= experience || experience == "Semua range pengalaman") && 
            (worker.name.toLowerCase().includes(keyword.toLowerCase())))
  }

  const [ filteredRegistrants, setFilteredRegistrants ] = useState()
  useEffect(() => {
    if (user != null && user.role != "client") return
    if (registrants != null) setFilteredRegistrants(registrants.filter(filterWorkers))
  }, [ keyword, category, experience, registrants ])

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")
  
  if (job == null) return <></>
  return (
    <>
      <Navbar />
      <Flex mt="10" justifyContent="center">
        <Flex w="85%" direction="column">
          <Flex>
            <Flex>
              <Flex p="2" pl="0">
                <Avatar h="115px" w="115px" borderRadius="md" src={job.author.profPic} />
              </Flex>
              <Box ml="2" mt={isBigScreen ? "1" : "2"}>
                {
                  !isBigScreen &&
                    <JobBadges job={job} />
                }
                <HStack>
                  <Text fontSize="xl" fontWeight="semibold">{job.title}</Text>
                  {
                    isBigScreen &&
                      <JobBadges job={job} />
                  }
                </HStack>
                <Flex>
                  <Link href={"/profile/"+job.author._id}>
                    <Text color="gray.600">{job.author.name}</Text>
                  </Link>
                </Flex>
                {
                  (job.author.rating != null && job.author.rating > 0) && 
                    <Star rating={job.author.rating} />
                }
                <Text fontSize="sm" color="gray.600">
                  {job.registrants.length+" Pelamar"}
                </Text>
              </Box>
            </Flex>
            <Spacer></Spacer>
            <JobButton user={user} job={job} canReview={canReview} />
          </Flex>
          <Flex>
            <SimpleGrid columns="2" spacing="4">
              <HStack mt="8">
                <Icon as={MdLocationOn} color="gray.600" />
                <Text color="gray.600">Lokasi</Text>
              </HStack>
              <Text mt="8" fontWeight="semibold">{job.location}</Text>
              <HStack>
                <Icon as={MdWork} color="gray.600" />
                <Text color="gray.600">Job Type</Text>
              </HStack>
              <Text fontWeight="semibold">{job.jobType}</Text>
              <HStack>
                <Icon as={FaMoneyBillWave} color="gray.600" />
                <Text color="gray.600">Salary</Text>
              </HStack>
              <Text fontWeight="semibold">{parseAmount(job.salary)}</Text>
            </SimpleGrid>
          </Flex>
          {
            (user == null || user.role == "worker") ? (
              <>
                {
                  (job.detail != null) && (
                    <>
                      <Text mt="8" fontWeight="bold">Detail</Text>
                      <Text mt="2">{job.detail}</Text>
                    </>
                  )
                }
                {
                  (job.responsibility != null) && (
                    <>
                      <Text mt="8" fontWeight="bold">Responsibilities</Text>
                      {
                        job.responsibility.split('\n').map((par, idx) => 
                          <Text key={idx} mt="2">{par}</Text>
                        )
                      }
                    </>
                  )
                }
                {
                  (job.qualification != null) && (
                    <>
                      <Text mt="8" fontWeight="bold">Qualifications</Text>
                      {
                        job.qualification.split('\n').map((par, idx) => 
                          <Text key={idx} mt="2">{par}</Text>
                        )
                      }
                    </>
                  )
                }
              </>
            ) : (
              <>
              <Tabs mt="5" isFitted>
                <TabList>
                  <Tab>Rincian</Tab>
                  <Tab>Lamaran Masuk</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {
                      (job.detail != null) && (
                        <>
                          <Text mt="3" fontWeight="bold">Detail</Text>
                          <Text mt="2">{job.detail}</Text>
                        </>
                      )
                    }
                    {
                      (job.responsibility != null) && (
                        <>
                          <Text mt="8" fontWeight="bold">Responsibilities</Text>
                          {
                            job.responsibility.split('\n').map((par, idx) => 
                              <Text key={idx} mt="1">{par}</Text>
                            )
                          }
                        </>
                      )
                    }
                    {
                      (job.qualification != null) && (
                        <>
                          <Text mt="8" fontWeight="bold">Qualifications</Text>
                          {
                            job.qualification.split('\n').map((par, idx) => 
                              <Text key={idx} mt="2">{par}</Text>
                            )
                          }
                        </>
                      )
                    }
                  </TabPanel>
                  <TabPanel>
                    <Flex mt="3">
                      <SearchBar workers={true} keyword={keyword} setKeyword={setKeyword}
                        category={category} setCategory={setCategory}
                        experience={experience} setExperience={setExperience} />
                    </Flex>
                    {
                      (filteredRegistrants != null) && 
                        <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filteredRegistrants.length+" orang pelamar"}</Text>
                    }
                    <ProfileList profiles={filteredRegistrants} job={job} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </>
            )
          }
        </Flex>
      </Flex>
      <Footer /> 
    </>
  )
}
