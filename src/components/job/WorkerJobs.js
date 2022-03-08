import React, { useState, useEffect } from "react"

import { SearchBar } from ".."
import { JobList } from "."

import { Text, Flex } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function WorkerJobs({ user }) {
  // TODO: Fetch pending, accepted, rejected from api
  const [ pending, setPending ] = useState()
  const [ accepted, setAccepted ] = useState()
  const [ onProgress, setOnProgress ] = useState()
  const [ history, setHistory ] = useState()
  useEffect(() => {
    setAccepted([
      {
        id: 1,
        title: "Backend Engineer",
        desc: "Do backend work in developing our app.",
        category: "Web Developer",
        salary: 5000000,
        location: "Jakarta",
        type: "Full-time",
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
        salary: 6000000,
        location: "Semarang",
        type: "Contract",
        company: {
          id: 1,
          name: "BukaPedia",
          rating: 4.2,
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        registrants: [
          "ada","ada","ada","ada","ada"
        ],
        chosen: "Mace Windu"
      }
    ])
    setOnProgress([
      {
        id: 3,
        title: "Web Developer",
        category: "Web Developer",
        desc: "Develop a great website for our company",
        salary: 4000000,
        location: "Surabaya",
        type: "Full-project",
        company: {
          id: 2,
          name: "TokoLapak",
          rating: 2.3,
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        registrants: [
          "ada","ada","ada","ada"
        ],
        chosen: "Luke Skywalker"
      }
    ])
    setHistory([
      {
        id: 3,
        title: "Web Developer",
        category: "Web Developer",
        desc: "Develop a great website for our company",
        salary: 4000000,
        location: "Surabaya",
        type: "Full-project",
        company: {
          id: 2,
          name: "TokoLapak",
          rating: 2.3,
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        registrants: [
          "ada", "ada", "ada","ada","ada","ada",
        ],
        chosen: "Luke Skywalker"
      }
    ])
    console.log("FETCH API")
  }, [])

  const [ keyword, setKeyword ] = useState("")
  const [ location, setLocation ] = useState("Semua lokasi")
  const [ type, setType ] = useState("Semua tipe pekerjaan")
  const [ salary, setSalary ] = useState("Semua range upah")
  const filterJobs = (job) => {
    return ((job.location == location || location == "Semua lokasi") &&
            (job.type == type || type == "Semua tipe pekerjaan") &&
            (job.salary >= salary || salary == "Semua range upah") && 
            (job.title.toLowerCase().includes(keyword.toLowerCase()) ||
            job.company.name.toLowerCase().includes(keyword.toLowerCase())))
  }

  const [ filteredAccepted, setFilteredAccepted] = useState()
  const [ filteredPending, setFilteredPending] = useState()
  const [ filteredOnProgress, setFilteredOnProgress] = useState()
  const [ filteredHistory, setFilteredHistory] = useState()
  useEffect(() => {
    if (pending != null) setFilteredPending(pending.filter(filterJobs))
    if (accepted != null) setFilteredAccepted(accepted.filter(filterJobs))
    if (onProgress != null) setFilteredOnProgress(onProgress.filter(filterJobs))
    if (history != null) setFilteredHistory(history.filter(filterJobs))
  }, [ keyword, location, type, salary, accepted, pending, onProgress, history ])

  return (
    <>
      <Tabs mt="5" isFitted>
        <TabList>
          <Tab>Lamaran dikirim</Tab>
          <Tab>Lamaran diterima</Tab>
          <Tab>Dalam pengerjaan</Tab>
          <Tab>Riwayat</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {
              (filteredPending != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar keyword={keyword} setKeyword={setKeyword}
                      location={location} setLocation={setLocation}
                      type={type} setType={setType}
                      salary={salary} setSalary={setSalary} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filteredPending.length+" lamaran dikirim"}</Text>
                  <JobList jobs={filteredPending} />
                </>
              )
            }
          </TabPanel>
          <TabPanel>
            {
              (filteredAccepted != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar keyword={keyword} setKeyword={setKeyword}
                      location={location} setLocation={setLocation}
                      type={type} setType={setType}
                      salary={salary} setSalary={setSalary} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filteredAccepted.length+" lamaran diterima"}</Text>
                  <JobList jobs={filteredAccepted} />
                </>
              )
            }
          </TabPanel>
          <TabPanel>
            {
              (filteredOnProgress != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar keyword={keyword} setKeyword={setKeyword}
                      location={location} setLocation={setLocation}
                      type={type} setType={setType}
                      salary={salary} setSalary={setSalary} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filteredOnProgress.length+" pekerjaan dalam pengerjaan"}</Text>
                  <JobList jobs={filteredOnProgress} />
                </>
              )
            }
          </TabPanel>
          <TabPanel>
            {
              (filteredHistory != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar keyword={keyword} setKeyword={setKeyword}
                      location={location} setLocation={setLocation}
                      type={type} setType={setType}
                      salary={salary} setSalary={setSalary} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filteredHistory.length+" pekerjaan selesai"}</Text>
                  <JobList jobs={filteredHistory} />
                </>
              )
            }
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
