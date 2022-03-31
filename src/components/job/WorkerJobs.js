import React, { useState, useEffect } from "react"

import { SearchBar } from ".."
import { JobList } from "."

import { useToast, useMediaQuery } from "@chakra-ui/react"
import { Text, Flex } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function WorkerJobs({ user }) {
  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ data, setData ] = useState({
    applying: [],
    accepted: [],
    ongoing: [],
    finished: []
  })

  // const [ pending, setPending ] = useState(null)
  // const [ accepted, setAccepted ] = useState(null)
  // const [ onProgress, setOnProgress ] = useState(null)
  // const [ history, setHistory ] = useState(null)
  useEffect(() => {
    fetch("https://protected-castle-75235.herokuapp.com/user/"+user._id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.statusCode >= 400) throw new Error(json.message)
      setData(prev => ({
        ...prev,
        applying: json.worker.applying,
        aceepted: json.worker.aceepted,
        ongoing: json.worker.ongoing,
        finished: json.worker.finished
      }))
      // setPending(json.worker.applying)   // pending
      // setAccepted(json.worker.accepted)  // accepted
      // setOnProgress(json.worker.ongoing) // OnProgress
      // setHistory(json.worker.finished)   // history
    })
    .catch((err) => {
      toast({
        title: err.message,
        status: "error"
      })
    })
    // console.log("FETCH API")
  }, [])

  const [ filter, setFilter ] = useState({
    keyword: "",
    location: "Semua lokasi",
    type: "Semua tipe pekerjaan",
    salary: "Semua range upah"
  })

  // const [ keyword, setKeyword ] = useState("")
  // const [ location, setLocation ] = useState("Semua lokasi")
  // const [ type, setType ] = useState("Semua tipe pekerjaan")
  // const [ salary, setSalary ] = useState("Semua range upah")
  const filterJobs = (job) => {
    return ((job.location == filter.location || filter.location == "Semua lokasi") &&
            (job.jobType == filter.type || filter.type == "Semua tipe pekerjaan") &&
            (parseInt(job.salary) >= parseInt(filter.salary) || filter.salary == "Semua range upah") && 
            (job.title.toLowerCase().includes(filter.keyword.toLowerCase()) ||
            job.author.name.toLowerCase().includes(filter.keyword.toLowerCase())))
  }

  const [ filtered, setFiltered ] = useState({
    applying: [],
    accepted: [],
    ongoing: [],
    finished: []
  })

  // const [ filteredAccepted, setFilteredAccepted] = useState(null)
  // const [ filteredPending, setFilteredPending] = useState(null)
  // const [ filteredOnProgress, setFilteredOnProgress] = useState(null)
  // const [ filteredHistory, setFilteredHistory] = useState(null)
  useEffect(() => {
    setFiltered(prev => ({
      ...prev,
      applying: [...data.applying].filter(filterJobs),
      accepted: [...data.accepted].filter(filterJobs),
      ongoing: [...data.ongoing].filter(filterJobs),
      finished: [...data.finished].filter(filterJobs)
    }))
    // if (pending != null) setFilteredPending(pending.filter(filterJobs))
    // if (accepted != null) setFilteredAccepted(accepted.filter(filterJobs))
    // if (onProgress != null) setFilteredOnProgress(onProgress.filter(filterJobs))
    // if (history != null) setFilteredHistory(history.filter(filterJobs))
  }, [ filter, data ])

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Tabs mt={isBigScreen ? "5" : "0"} isFitted>
        <TabList>
          <Tab>Lamaran dikirim</Tab>
          <Tab>Lamaran diterima</Tab>
          <Tab>Dalam pengerjaan</Tab>
          <Tab>Riwayat</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {
              (filtered.applying != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar filter={filter} setFilter={setFilter} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filtered.applying.length+" lamaran dikirim"}</Text>
                  <JobList jobs={filtered.applying} />
                </>
              )
            }
          </TabPanel>
          <TabPanel>
            {
              (filtered.accepted != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar filter={filter} setFilter={setFilter} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filtered.accepted.length+" lamaran diterima"}</Text>
                  <JobList jobs={filtered.accepted} />
                </>
              )
            }
          </TabPanel>
          <TabPanel>
            {
              (filtered.ongoing != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar filter={filter} setFilter={setFilter} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filtered.ongoing.length+" pekerjaan dalam pengerjaan"}</Text>
                  <JobList jobs={filtered.ongoing} />
                </>
              )
            }
          </TabPanel>
          <TabPanel>
            {
              (filtered.finished != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar filter={filter} setFilter={setFilter} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filtered.finished.length+" pekerjaan selesai"}</Text>
                  <JobList jobs={filtered.finished} />
                </>
              )
            }
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
