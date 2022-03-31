import React, { useEffect, useState } from "react"

import { AiOutlinePlus } from "react-icons/ai"

import { Navbar, SearchBar, Footer } from "../components"
import { ProfileList } from "../components/profile"
import { JobList } from "../components/job"

import { useToast, useMediaQuery, useColorMode } from "@chakra-ui/react"
import { Flex, Text, Box, Button, Spacer, Icon } from "@chakra-ui/react"

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"))

  const [ data, setData ] = useState({
    jobs: [],
    workers: []
  })

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  useEffect(() => {
    if (user == null || user.role == "worker") {
      fetch("https://protected-castle-75235.herokuapp.com/worker/dashboard", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
      .then(resp => resp.json())
      .then(json => {
        if (json.statusCode >= 400) throw new Error(json.message)
        setData(prev => ({
          ...prev,
          jobs: json
        }))
      })
      .catch((err) => {
        toast({
          title: err.message,
          status: "error"
        })
      })
    }
    
    if (user != null && user.role == "client") {
      fetch("https://protected-castle-75235.herokuapp.com/client/dashboard", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
      .then(resp => resp.json())
      .then(json => {
        if (json.statusCode >= 400) throw new Error(json.message)
        setData(prev => ({
          ...prev,
          workers: json
        }))
      })
      .catch((err) => {
        toast({
          title: err.message,
          status: "error"
        })
      })
    }
    
    document.title = "Rekrut.id | Dashboard"
  }, [])

  const [ filter, setFilter ] = useState({
    keyword: "",
    location: "Semua lokasi",
    type: "Semua tipe pekerjaan",
    salary: "Semua range upah",
    category: "Semua kategori pekerjaan",
    experience: "Semua range pengalaman"
  })

  const filterJobs = (job) => {
    return ((job.location == filter.location || filter.location == "Semua lokasi") &&
            (job.jobType == filter.type || filter.type == "Semua tipe pekerjaan") &&
            (parseInt(job.salary) >= parseInt(filter.salary) || filter.salary == "Semua range upah") && 
            (job.title != null && job.title.toLowerCase().includes(filter.keyword.toLowerCase()) ||
            job.author.name != null &&  job.author.name.toLowerCase().includes(filter.keyword.toLowerCase())))
  }
  
  const filterWorkers = (worker) => {
    return ((worker.category == filter.category || filter.category == "Semua kategori pekerjaan") && 
            (worker.review.length >= parseInt(filter.experience) || filter.experience == "Semua range pengalaman") && 
            (worker.name != null && worker.name.toLowerCase().includes(filter.keyword.toLowerCase()) || 
            worker.skill != null && worker.skill.toLowerCase().includes(filter.keyword.toLowerCase())))
  }

  const sortJobs = (jobA, jobB) => jobB.salary-jobA.salary

  const [ filtered, setFiltered ] = useState({
    jobs: [],
    workers: []
  })

  useEffect(() => {
    setFiltered(prev => ({
      ...prev,
      jobs: [...data.jobs].filter(filterJobs).sort(sortJobs)
    }))
  }, [ filter, data.jobs ])

  useEffect(() => {
    setFiltered(prev => ({
      ...prev,
      workers: [...data.workers].filter(filterWorkers)
    }))
  })

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode == "dark")

  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Flex mt={isBigScreen ? "10" : "5"} w="85%" direction="column">
          <Flex mb="5">
            <Text mb="3" fontSize="2xl" fontWeight="semibold">
              {
                (user != null && user.role == "client") ? 
                  "Portal Talent" :
                  "Portal Pekerjaan"
              }
            </Text>
            {
              (user != null && user.role == "client") && (
                <>
                  <Spacer></Spacer>
                  <Button pl={isBigScreen && "10"} pr={isBigScreen && "10"} bgColor="#FF8450" borderRadius="full"
                    onClick={() => window.location.href="/job/new"}>
                    <Icon mr="2" as={AiOutlinePlus} />
                    <Text fontSize="sm" fontWeight="bold">Pekerjaan Baru</Text>
                  </Button>
                </>
              )
            }
          </Flex>
          {
            (user != null && user.role == "client") ? (
              <SearchBar workers={true} filter={filter} setFilter={setFilter} />
            ) : (
              <SearchBar filter={filter} setFilter={setFilter} />
            )
          }
        </Flex>
      </Flex>
      {
        (user != null && user.role == "client") ? (
          <>
            {
              (filtered.workers != null) && (
                <>
                  <Flex justifyContent="center">
                    <Box mt="8" w="85%">
                      <Text fontSize="xl" fontWeight="semibold">Talent Terbaik</Text>
                      <ProfileList profiles={filtered.workers} />
                    </Box>
                  </Flex>
                </>
              )
            }
          </>
        ) : (
          <>
            {
              (filtered.jobs != null) && (
                <>
                  <Flex justifyContent="center">
                    <Box mt="8" w="85%">
                      <Text fontSize="xl" fontWeight="semibold">Penawaran terbaik</Text>
                      <JobList jobs={filtered.jobs} />
                    </Box>
                  </Flex>
                </>
              )
            }
          </>
        )
      }
      <Footer />
    </>
  )
}
