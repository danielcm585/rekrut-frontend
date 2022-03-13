import React, { useState, useEffect } from "react"

import { SearchBar } from ".."
import { JobList } from "."

import { useToast } from "@chakra-ui/react"
import { Text, Flex } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function WorkerJobs({ user }) {
  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ pending, setPending ] = useState(null)
  const [ accepted, setAccepted ] = useState(null)
  const [ onProgress, setOnProgress ] = useState(null)
  const [ history, setHistory ] = useState(null)
  useEffect(() => {
    fetch("https://protected-castle-75235.herokuapp.com/user/"+user._id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.statusCode >= 400) throw new Error(json.message)
      setPending(json.worker.applying)   // pending
      setAccepted(json.worker.accepted)  // accepted
      setOnProgress(json.worker.ongoing) // OnProgress
      setHistory(json.worker.done)       // history
    })
    .catch((err) => {
      toast({
        title: err.message,
        status: "error"
      })
    })
    console.log("FETCH API")
  }, [])

  const [ keyword, setKeyword ] = useState("")
  const [ location, setLocation ] = useState("Semua lokasi")
  const [ type, setType ] = useState("Semua tipe pekerjaan")
  const [ salary, setSalary ] = useState("Semua range upah")
  const filterJobs = (job) => {
    return ((job.location == location || location == "Semua lokasi") &&
            (job.jobType == type || type == "Semua tipe pekerjaan") &&
            (parseInt(job.salary) >= parseInt(salary) || salary == "Semua range upah") && 
            (job.title.toLowerCase().includes(keyword.toLowerCase()) ||
            job.author.name.toLowerCase().includes(keyword.toLowerCase())))
  }

  const [ filteredAccepted, setFilteredAccepted] = useState(null)
  const [ filteredPending, setFilteredPending] = useState(null)
  const [ filteredOnProgress, setFilteredOnProgress] = useState(null)
  const [ filteredHistory, setFilteredHistory] = useState(null)
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
