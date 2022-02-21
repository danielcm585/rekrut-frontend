import React, { useEffect, useState } from "react"

import { Navbar, ProfileCard, SearchBar, JobList } from "../components"

import { Flex, Text } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function Profile() {
  // TODO: Fetch user from api based on id
  // const user = null
  const user = {
    id: 3,
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Luke Skywalker",
    bio: "Hello , I am energetic UX Designer and currently studies computer science, skilled in Figma and UX research. Have completed several projects, including design of an event web, mobile app for study group and redesign mobile bank app.",
    email: "luke.skywalker@gmail.com",
    phone: "628123456789",
    role: "worker",
    cv: "",
    category: "UI/UX Designer"
  }
  
  // TODO: Fetch pending, accepted, rejected from api
  const [ pending, setPending ] = useState()
  const [ accepted, setAccepted ] = useState()
  const [ rejected, setRejected ] = useState()
  useEffect(() => {
    setAccepted([
      {
        id: 1,
        title: "Backend Engineer",
        desc: "Do backend work in developing our app.",
        category: "Web Developer",
        fee: 5000000,
        location: "Jakarta",
        type: "Full Time",
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
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Luke Skywalker",
          }
        ],
      }
    ])
    setPending([
      {
        id: 2,
        title: "Frontend Engineer",
        category: "Web Developer",
        desc: "Do frontend work in developing our app.",
        fee: 6000000,
        location: "Jakarta",
        type: "Full Time",
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
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Luke Skywalker",
          }
        ],
        chosen: "Mace Windu"
      }
    ])
    setRejected([
      {
        id: 3,
        title: "Web Developer",
        category: "Web Developer",
        desc: "Develop a great website for our company",
        fee: 4000000,
        location: "Jakarta",
        type: "Full Time",
        company: {
          id: 2,
          name: "TokoLapak",
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
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Luke Skywalker",
          }
        ],
        chosen: "Luke Skywalker"
      }
    ])
    console.log("FETCH API")

    document.title = user.name + " | " + user.category
  }, [])
  
  const [ keyword, setKeyword ] = useState("")
  const [ filteredAccepted, setFilteredAccepted] = useState()
  const [ filteredPending, setFilteredPending] = useState()
  const [ filteredRejected, setFilteredRejected] = useState()
  useEffect(() => {
    if (accepted != null) {
      setFilteredAccepted(accepted
        .filter(job => job.title.toLowerCase().includes(keyword.toLowerCase())))
    }
    if (pending != null) {
      setFilteredPending(pending
        .filter(job => job.title.toLowerCase().includes(keyword.toLowerCase())))
    }
    if (rejected != null) {
      setFilteredRejected(rejected
        .filter(job => job.title.toLowerCase().includes(keyword.toLowerCase())))
    }
  }, [ keyword, accepted, pending, rejected ])
  
  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Flex w="85%" mt="100" direction="column">
          <ProfileCard user={user} />
          <Flex mt="9">
            <SearchBar keyword={keyword} setKeyword={setKeyword} />
          </Flex>
          <Tabs mt="5" isFitted>
            <TabList>
              <Tab>Lamaran dikirim</Tab>
              <Tab>Lamaran diterima</Tab>
              <Tab>Lamaran ditolak</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {
                  (filteredPending != null) && (
                    <>
                      <Text mt="3" mb="2" fontWeight="semibold">{"Anda memiliki "+filteredPending.length+" lamaran dikirim"}</Text>
                      <JobList jobs={filteredPending} />
                    </>
                  )
                }
              </TabPanel>
              <TabPanel>
                {
                  (filteredAccepted != null) && (
                    <>
                      <Text mt="3" mb="2" fontWeight="semibold">{"Anda memiliki "+filteredAccepted.length+" lamaran diterima"}</Text>
                      <JobList jobs={filteredAccepted} />
                    </>
                  )
                }
              </TabPanel>
              <TabPanel>
                {
                  (filteredRejected != null) && (
                    <>
                      <Text mt="3" mb="2" fontWeight="semibold">{"Anda memiliki "+filteredRejected.length+" lamaran ditolak"}</Text>
                      <JobList jobs={filteredRejected} />
                    </>
                  )
                }
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  )
}
