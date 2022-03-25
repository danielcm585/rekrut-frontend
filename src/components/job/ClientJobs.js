import React, { useState, useEffect } from "react"

import { SearchBar } from ".."
import { JobList } from "."

import { useToast, useMediaQuery } from "@chakra-ui/react"
import { Text, Flex } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function ClientJobs({ user }) {
  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ mine, setMine ] = useState(null)
  const [ waitingConf, setWaitingConf ] = useState(null)
  const [ onProgress, setOnProgress ] = useState(null)
  const [ inReview, setInReview ] = useState(null)
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
      setMine(json.client.hiring)         // mine
      setWaitingConf(json.client.waiting) // waitingConf
      setOnProgress(json.client.ongoing)  // onProgress
      setInReview(json.client.reviewing)  // inReview
      setHistory(json.client.done)        // history
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
            job.title.toLowerCase().includes(keyword.toLowerCase()))
  }

  const [ filteredWaitingConf, setFilteredWaitingConf] = useState(null)
  const [ filteredMine, setFilteredMine] = useState(null)
  const [ filteredOnProgress, setFilteredOnProgress] = useState(null)
  const [ filteredInReview, setFilteredInReview] = useState(null)
  const [ filteredHistory, setFilteredHistory] = useState(null)
  useEffect(() => {
    if (mine != null) setFilteredMine(mine.filter(filterJobs))
    if (waitingConf != null) setFilteredWaitingConf(waitingConf.filter(filterJobs))
    if (onProgress != null) setFilteredOnProgress(onProgress.filter(filterJobs))
    if (inReview != null) setFilteredInReview(inReview.filter(filterJobs))
    if (history != null) setFilteredHistory(history.filter(filterJobs))
  }, [ keyword, location, type, salary, waitingConf, mine, onProgress, inReview, history ])

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Tabs mt={isBigScreen ? "5" : "0"} isFitted>
        <TabList>
          <Tab>Mencari pekerja</Tab>
          <Tab>Menunggu konfirmasi</Tab>
          <Tab>Dalam pengerjaan</Tab>
          <Tab>Dalam pengecekkan</Tab>
          <Tab>Riwayat</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {
              (filteredMine != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar keyword={keyword} setKeyword={setKeyword}
                      location={location} setLocation={setLocation}
                      type={type} setType={setType}
                      salary={salary} setSalary={setSalary} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filteredMine.length+" lapangan pekerjaan terbuka"}</Text>
                  <JobList jobs={filteredMine} />
                </>
              )
            }
          </TabPanel>
          <TabPanel>
            {
              (filteredWaitingConf != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar keyword={keyword} setKeyword={setKeyword}
                      location={location} setLocation={setLocation}
                      type={type} setType={setType}
                      salary={salary} setSalary={setSalary} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filteredWaitingConf.length+" pekerjaan menunggu konfirmasi pekerja"}</Text>
                  <JobList jobs={filteredWaitingConf} />
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
              (filteredInReview != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar keyword={keyword} setKeyword={setKeyword}
                      location={location} setLocation={setLocation}
                      type={type} setType={setType}
                      salary={salary} setSalary={setSalary} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filteredInReview.length+" pekerjaan dalam pengecekkan"}</Text>
                  <JobList jobs={filteredInReview} />
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
