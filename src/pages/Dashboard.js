import React, { useEffect, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"

import { Navbar, SearchBar, Footer } from "../components"
import { ProfileList } from "../components/profile"
import { JobList } from "../components/job"

import { useToast } from "@chakra-ui/react"
import { Flex, Text, Box, Button, Spacer, Icon } from "@chakra-ui/react"

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"))
  
  const [ jobs, setJobs ] = useState(null)
  const [ workers, setWorkers ] = useState(null)

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  useEffect(() => {
    if (user == null || user.role == "worker") {
      fetch("https://protected-castle-75235.herokuapp.com/job", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })
      .then(resp => resp.json())
      .then(json => {
        if (json.statusCode >= 400) throw new Error(json.message)
        setJobs(json)
      })
      .catch((err) => {
        toast({
          title: err.message,
          status: "error"
        })
      })
      console.log("FETCH GENERAL API")
    }
    
    if (user != null && user.role == "client") {
      setWorkers([
        {
          _id: "6227688cfea1f57345e41c18",
          name: "Hera Syndulla",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          category: "Frontend Developer",
          rating: 4.33,
          review: ["ada","ada","ada","ada","ada"]
        },
        {
          _id: "6227688cfea1f57345e41c18",
          name: "Ahsoka Tano",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          category: "Frontend Developer",
          rating: 4.33,
          review: ["ada","ada","ada","ada","ada"]
        },
        {
          _id: "6227688cfea1f57345e41c18",
          name: "Darth Vader",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          category: "Frontend Developer",
          rating: 4.33,
          review: ["ada","ada","ada","ada","ada"]
        },
      ])
      console.log("FETCH CLIENT API")
    }
    
    document.title = "Rekrut.id"
  }, [])

  const [ keyword, setKeyword ] = useState("")

  const [ location, setLocation ] = useState("Semua lokasi")
  const [ type, setType ] = useState("Semua tipe pekerjaan")
  const [ salary, setSalary ] = useState("Semua range upah")
  const filterJobs = (job) => {
    return ((job.location == location || location == "Semua lokasi") &&
            (job.jobType == type || type == "Semua tipe pekerjaan") &&
            (job.salary >= salary || salary == "Semua range upah") && 
            // (user.category == null || job.category == user.category) && 
            (job.title.toLowerCase().includes(keyword.toLowerCase()) ||
            job.author.name.toLowerCase().includes(keyword.toLowerCase())))
  }
  const sortJobs = (jobA, jobB) => jobB.salary-jobA.salary

  const [ category, setCategory ] = useState("Semua kategori pekerjaan")
  const [ experience, setExperience ] = useState("Semua range pengalaman")
  const filterWorkers = (worker) => {
    return ((worker.category == category || category == "Semua kategori pekerjaan") && 
            (worker.review.length >= experience || experience == "Semua range pengalaman") && 
            (worker.name.toLowerCase().includes(keyword.toLowerCase())))
  }

  const [ filteredJobs, setFilteredJobs ] = useState(null)
  useEffect(() => {
    if (jobs != null) setFilteredJobs(jobs.filter(filterJobs).sort(sortJobs))
  }, [ keyword, location, type, salary, jobs ])
  
  const [ filteredWorkers, setFilteredWorkers ] = useState(null)
  useEffect(() => {
    if (user == null || user.role != "client") return
    if (workers != null) setFilteredWorkers(workers.filter(filterWorkers))
  }, [ keyword, category, experience, workers ])

  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Flex mt="100" w="85%" direction="column">
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
                  <Button pl="10" pr="10" bgColor="#FF8450" borderRadius="full"
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
              <SearchBar workers={true} keyword={keyword} setKeyword={setKeyword}
                category={category} setCategory={setCategory}
                experience={experience} setExperience={setExperience} />
            ) : (
              <SearchBar keyword={keyword} setKeyword={setKeyword}
                location={location} setLocation={setLocation}
                type={type} setType={setType}
                salary={salary} setSalary={setSalary} />
            )
          }
        </Flex>
      </Flex>
        {
          (user != null && user.role == "client") ? (
            <>
              {
                (filteredWorkers != null) && (
                  <>
                    <Flex justifyContent="center">
                      <Box mt="8" w="85%">
                        <Text fontSize="xl" fontWeight="semibold">Talent Terbaik</Text>
                        <ProfileList profiles={filteredWorkers} />
                      </Box>
                    </Flex>
                  </>
                )
              }
            </>
          ) : (
            <>
              {
                (filteredJobs != null) && (
                  <>
                    <Flex justifyContent="center">
                      <Box mt="8" w="85%">
                        <Text fontSize="xl" fontWeight="semibold">Penawaran terbaik</Text>
                        <JobList jobs={filteredJobs} />
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
