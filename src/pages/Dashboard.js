import React, { useEffect, useState } from "react"

import { JobCard, Navbar, SearchBar, JobList } from "../components"

import { Flex, Text, Box, Grid, Link, Button, Spacer } from "@chakra-ui/react"

export default function Dashboard() {
  // TODO: Get user from localStorage
  // const user = null
  const user = {
    id: 3,
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Luke Skywalker",
    email: "luke.skywalker@gmail.com",
    role: "worker",
    category: "Web Developer"
  }

  // TODO: Fetch jobs data from api
  const [ bestOffer, setBestOffer ] = useState()
  const [ recentJobs, setRecentJobs ] = useState()
  useEffect(() => {
    setBestOffer([
      {
        id: 1,
        title: "Backend Engineer",
        desc: "Do backend work in developing our app.",
        category: "Web Developer",
        fee: 5000000,
        type: "Full Time",
        location: "Jakarta",
        company: {
          id: 1,
          name: "BukaPedia",
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
        fee: 6000000,
        type: "Full Time",
        location: "Jakarta",
        company: {
          id: 1,
          name: "BukaPedia",
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
        fee: 4000000,
        type: "Full Time",
        location: "Jakarta",
        company: {
          id: 2,
          name: "TokoLapak",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        registrants: []
      }
    ])
    setRecentJobs([
      {
        id: 1,
        title: "Backend Engineer",
        desc: "Do backend work in developing our app.",
        category: "Web Developer",
        fee: 5000000,
        type: "Full Time",
        location: "Jakarta",
        company: {
          id: 1,
          name: "BukaPedia",
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
        fee: 6000000,
        type: "Full Time",
        location: "Jakarta",
        company: {
          id: 1,
          name: "BukaPedia",
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
        fee: 4000000,
        type: "Full Time",
        location: "Jakarta",
        company: {
          id: 2,
          name: "TokoLapak",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        registrants: []
      }
    ])
    
    console.log("FETCH API")
  }, [])

  const [ keyword, setKeyword ] = useState("")
  const [ filteredRecentJobs, setFilteredRecentJobs ] = useState()
  const [ filteredBestOffer, setFilteredBestOffer ] = useState()
  useEffect(() => {
    if (recentJobs != null) {
      setFilteredRecentJobs(recentJobs
        .filter(job => job.category == user.category)
        .filter(job => job.title.toLowerCase().includes(keyword.toLowerCase())))
    }
    if (bestOffer != null) {
      setFilteredBestOffer(bestOffer
        .filter(job => job.category == user.category)
        .filter(job => job.title.toLowerCase().includes(keyword.toLowerCase()))
        .sort((jobA, jobB) => jobB.fee-jobA.fee)) // FIXME: To be confirmed
    }
    console.log("REFRESH")
  }, [ keyword, recentJobs, bestOffer ])

  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Flex mt="100" w="85%" direction="column">
          <Text mb="6" fontSize="2xl" fontWeight="semibold">Job Portal</Text>
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
        </Flex>
      </Flex>
      {
        (filteredBestOffer != null) && (
          <>
            <Flex justifyContent="center">
              <Box mt="10" w="85%">
                <Flex>
                  <Text fontSize="xl" fontWeight="semibold">
                    Best Offer
                  </Text>
                  <Spacer></Spacer>
                  <Button variant="ghost" onClick={() => window.location.href="/jobs/best-offer"}>See all</Button>
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
              <Box mt="10" w="85%">
                <Flex>
                  <Text fontSize="xl" fontWeight="semibold">
                    Recently Added
                  </Text>
                  <Spacer></Spacer>
                  <Button variant="ghost" onClick={() => window.location.href="/jobs/best-offer"}>See all</Button>
                </Flex>
                <JobList jobs={filteredRecentJobs} />
              </Box>
            </Flex>
          </>
        )
      }
    </>
  )
}
