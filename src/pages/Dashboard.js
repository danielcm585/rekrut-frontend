import React, { useEffect, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"

import { Navbar, SearchBar, Footer } from "../components"
import { ProfileList } from "../components/profile"
import { JobList } from "../components/job"

import { Flex, Text, Box, Button, Spacer, IconButton, Icon } from "@chakra-ui/react"

export default function Dashboard() {
  // TODO: Get user from localStorage??
  // const user = JSON.parse(localStorage.getItem("user"))
  // console.log(user)
  
  // const user = null
  const user = {
    id: 3,
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Luke Skywalker",
    email: "luke.skywalker@gmail.com",
    // role: "worker",
    role: "client",
    category: "Web Developer"
  }

  const [ bestOffer, setBestOffer ] = useState()
  const [ recentJobs, setRecentJobs ] = useState()
  
  const [ popularTalents, setPopularTalents ] = useState()
  const [ offeredTalents, setOfferedTalents ] = useState()
  
  // TODO: Fetch jobs data from api
  useEffect(() => {
    if (user.role == "worker") {
      setBestOffer([
        {
          id: 1,
          title: "Backend Engineer",
          desc: "Do backend work in developing our app.",
          category: "Web Developer",
          salary: 5000000,
          type: "Full-time",
          location: "Semarang",
          company: {
            id: 1,
            name: "BukaPedia",
            rating: 4.2,
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          },
          registrants: [
            {
              photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
              name: "Obiwan Kenobi",
            },
            {
              photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
              name: "Anakin Skywalker",
            },
            {
              photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
              name: "C3PO",
            }
          ]
        },
        {
          id: 2,
          title: "Frontend Engineer",
          category: "Web Developer",
          desc: "Do frontend work in developing our app.",
          salary: 6000000,
          type: "Full-project",
          location: "Surabaya",
          company: {
            id: 1,
            name: "BukaPedia",
            rating: 4.2,
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          },
          registrants: [
            {
              photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
              name: "Mace Windu",
            },
            {
              photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
              name: "Din Djarin",
            },
            "ada",
            "ada",
          ]
        },
        {
          id: 3,
          title: "Web Developer",
          category: "Web Developer",
          desc: "Develop a great website for our company",
          salary: 4000000,
          type: "Full-time",
          location: "Jakarta",
          company: {
            id: 2,
            name: "TokoLapak",
            rating: 2.1,
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          },
          registrants: [
            "ada",
            "ada",
            "ada",
            "ada",
            "ada",
            "ada",
          ]
        }
      ])
      setRecentJobs([
        {
          id: 1,
          title: "Backend Engineer",
          desc: "Do backend work in developing our app.",
          category: "Web Developer",
          salary: 5000000,
          type: "Full-time",
          location: "Jakarta",
          company: {
            id: 1,
            name: "BukaPedia",
            rating: 4.2,
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          },
          registrants: [
            {
              photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
              name: "Obiwan Kenobi",
            },
            {
              photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
              name: "Anakin Skywalker",
            },
            {
              photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
              name: "C3PO",
            }
          ]
        },
        {
          id: 2,
          title: "Frontend Engineer",
          category: "Web Developer",
          desc: "Do frontend work in developing our app.",
          salary: 6000000,
          type: "Part-time",
          location: "Surabaya",
          company: {
            id: 1,
            name: "BukaPedia",
            rating: 4.2,
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          },
          registrants: [
            {
              photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
              name: "Mace Windu",
            },
            {
              photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
              name: "Din Djarin",
            }
          ]
        },
        {
          id: 3,
          title: "Web Developer",
          category: "Web Developer",
          desc: "Develop a great website for our company",
          salary: 4000000,
          type: "Contract",
          location: "Semarang",
          company: {
            id: 2,
            name: "TokoLapak",
            rating: 2.1,
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          },
          registrants: [
            "ada",
            "ada",
            "ada",
            "ada",
            "ada",
            "ada",
          ]
        }
      ])
    }
    else {
      setPopularTalents([
        {
          id: 11,
          name: "Hera Syndulla",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          category: "Frontend Developer",
          rating: 4.33,
          jobDone: ["ada","ada","ada","ada","ada"]
        },
        {
          id: 11,
          name: "Ahsoka Tano",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          category: "Frontend Developer",
          rating: 4.33,
          jobDone: ["ada","ada","ada","ada","ada"]
        },
        {
          id: 11,
          name: "Darth Vader",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          category: "Frontend Developer",
          rating: 4.33,
          jobDone: ["ada","ada","ada","ada","ada"]
        },
      ])
      setOfferedTalents([
        {
          id: 11,
          name: "Hera Syndulla",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          category: "Frontend Developer",
          rating: 4.33,
          jobDone: ["ada","ada","ada","ada","ada"]
        },
        {
          id: 11,
          name: "Ahsoka Tano",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          category: "Frontend Developer",
          rating: 4.33,
          jobDone: ["ada","ada","ada","ada","ada"]
        },
        {
          id: 11,
          name: "Darth Vader",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          category: "Frontend Developer",
          rating: 4.33,
          jobDone: ["ada","ada","ada","ada","ada"]
        },
      ])
    }
    
    console.log("FETCH API")

    document.title = "Rekrut.id"
  }, [])

  const [ keyword, setKeyword ] = useState("")

  const [ location, setLocation ] = useState("Semua lokasi")
  const [ type, setType ] = useState("Semua tipe pekerjaan")
  const [ salary, setSalary ] = useState("Semua range upah")
  const filterJobs = (job) => {
    return ((job.location == location || location == "Semua lokasi") &&
            (job.type == type || type == "Semua tipe pekerjaan") &&
            (job.salary >= salary || salary == "Semua range upah") && 
            (job.category == user.category || user.category == null) && 
            (job.title.toLowerCase().includes(keyword.toLowerCase()) ||
            job.company.name.toLowerCase().includes(keyword.toLowerCase())))
  }

  const [ category, setCategory ] = useState("Semua kategori pekerjaan")
  const [ experience, setExperience ] = useState("Semua range pengalaman")
  const filterWorkers = (worker) => {
    return ((worker.category == category || category == "Semua kategori pekerjaan") && 
            (worker.jobDone.length >= experience || experience == "Semua range pengalaman") && 
            (worker.name.toLowerCase().includes(keyword.toLowerCase())))
  }

  const [ filteredRecentJobs, setFilteredRecentJobs ] = useState()
  const [ filteredBestOffer, setFilteredBestOffer ] = useState()
  useEffect(() => {
    if (user.role != "worker") return
    if (recentJobs != null) setFilteredRecentJobs(recentJobs.filter(filterJobs))
    if (bestOffer != null) {setFilteredBestOffer(bestOffer.filter(filterJobs)
                                                          .sort((jobA, jobB) => jobB.salary-jobA.salary)) 
      // FIXME: To be confirmed
    }
  }, [ keyword, location, type, salary, recentJobs, bestOffer ])
  
  const [ filteredPopularTalents, setFilteredPopularTalents ] = useState()
  const [ filteredOfferedTalents, setFilteredOfferedTalents ] = useState()
  useEffect(() => {
    if (user.role != "client") return
    if (popularTalents != null) setFilteredPopularTalents(popularTalents.filter(filterWorkers))
    if (offeredTalents != null) setFilteredOfferedTalents(offeredTalents.filter(filterWorkers))
  }, [ keyword, category, experience, popularTalents, offeredTalents ])

  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Flex mt="100" w="85%" direction="column">
          <Flex mb="5">
            <Text mb="3" fontSize="2xl" fontWeight="semibold">
              {
                (user.role == "worker") ? 
                  "Portal Pekerjaan" : 
                  "Portal Talent"
              }
            </Text>
            {
              (user.role == "client") && (
                <>
                  <Spacer></Spacer>
                  {/* <IconButton size="lg" isRound bgColor="#FF8450" icon={<AiOutlinePlus />} /> */}
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
            (user.role == "worker") ? (
              <SearchBar keyword={keyword} setKeyword={setKeyword}
                location={location} setLocation={setLocation}
                type={type} setType={setType}
                salary={salary} setSalary={setSalary} />
            ) : (
              <SearchBar workers={true} keyword={keyword} setKeyword={setKeyword}
                category={category} setCategory={setCategory}
                experience={experience} setExperience={setExperience} />
            )
          }
        </Flex>
      </Flex>
      {
        (user.role == "worker") ? (
          <>
            {
              (filteredBestOffer != null) && (
                <>
                  <Flex justifyContent="center">
                    <Box mt="8" w="85%">
                      <Flex>
                        <Text fontSize="xl" fontWeight="semibold">Penawaran terbaik</Text>
                        <Spacer></Spacer>
                        <Button variant="ghost" borderRadius="50" onClick={() => window.location.href="/jobs/best-offer"}>Lihat semua</Button>
                      </Flex>
                      <JobList jobs={filteredBestOffer} />
                    </Box>
                  </Flex>
                </>
              )
            }
            {
              (filteredRecentJobs != null) && (
                <>
                  <Flex justifyContent="center">
                    <Box mt="8" w="85%">
                      <Flex>
                        <Text fontSize="xl" fontWeight="semibold">Baru ditambahkan</Text>
                        <Spacer></Spacer>
                        <Button variant="ghost" borderRadius="50" onClick={() => window.location.href="/jobs/best-offer"}>Lihat semua</Button>
                      </Flex>
                      <JobList jobs={filteredRecentJobs} />
                    </Box>
                  </Flex>
                </>
              )
            }
          </>
        ) : (
          <>
            {
              (filteredPopularTalents != null) && (
                <>
                  <Flex justifyContent="center">
                    <Box mt="8" w="85%">
                      <Flex>
                        <Text fontSize="xl" fontWeight="semibold">Talent Popular</Text>
                        <Spacer></Spacer>
                        <Button variant="ghost" borderRadius="50" onClick={() => window.location.href="/worker/popular-talents"}>Lihat semua</Button>
                      </Flex>
                      <ProfileList profiles={filteredPopularTalents} />
                    </Box>
                  </Flex>
                </>
              )
            }
            {
              (filteredOfferedTalents != null) && (
                <>
                  <Flex justifyContent="center">
                    <Box mt="8" w="85%">
                      <Flex>
                        <Text fontSize="xl" fontWeight="semibold">Talent yang Sesuai</Text>
                        <Spacer></Spacer>
                        <Button variant="ghost" borderRadius="50" onClick={() => window.location.href="/worker/offered-talents"}>Lihat semua</Button>
                      </Flex>
                      <ProfileList profiles={filteredOfferedTalents} />
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
