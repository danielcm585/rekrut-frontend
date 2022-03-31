import React, { useState, useEffect } from "react"

import { SearchBar } from ".."
import { JobList } from "."

import { useToast, useMediaQuery, useColorMode } from "@chakra-ui/react"
import { Text, Flex } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function ClientJobs({ user }) {
  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = (colorMode == "dark")

  const [ data, setData ] = useState({
    hiring: [],
    waiting: [],
    ongoing: [],
    reviewing: [],
    done: []
  })

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
        hiring: json.client.hiring,
        waiting: json.client.waiting,
        ongoing: json.client.ongoing,
        reviewing: json.client.reviewing,
        done: json.client.done
      }))
    })
    .catch((err) => {
      toast({
        title: err.message,
        status: "error"
      })
    })
  }, [])

  const [ filter, setFilter ] = useState({
    keyword: "",
    location: "Semua lokasi",
    type: "Semua tipe pekerjaan",
    salary: "Semua range upah"
  })

  const filterJobs = (job) => {
    return ((job.location == filter.location || filter.location == "Semua lokasi") &&
            (job.jobType == filter.type || filter.type == "Semua tipe pekerjaan") &&
            (parseInt(job.salary) >= parseInt(filter.salary) || filter.salary == "Semua range upah") && 
            job.title.toLowerCase().includes(filter.keyword.toLowerCase()))
  }

  const [ filtered, setFiltered ] = useState({
    hiring: [],
    waiting: [],
    ongoing: [],
    reviewing: [],
    done: []
  })

  useEffect(() => {
    setFiltered(prev => ({
      ...prev,
      hiring: [...data.hiring].filter(filterJobs),
      waiting: [...data.waiting].filter(filterJobs),
      ongoing: [...data.ongoing].filter(filterJobs),
      reviewing: [...data.reviewing].filter(filterJobs),
      done: [...data.done].filter(filterJobs),
    }))
  }, [ filter, data ])

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
              (filtered.hiring != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar filter={filter} setFilter={setFilter} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filtered.hiring.length+" lapangan pekerjaan terbuka"}</Text>
                  <JobList jobs={filtered.hiring} />
                </>
              )
            }
          </TabPanel>
          <TabPanel>
            {
              (filtered.waiting != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar filter={filter} setFilter={setFilter} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filtered.waiting.length+" pekerjaan menunggu konfirmasi pekerja"}</Text>
                  <JobList jobs={filtered.waiting} />
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
              (filtered.reviewing != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar filter={filter} setFilter={setFilter} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filtered.reviewing.length+" pekerjaan dalam pengecekkan"}</Text>
                  <JobList jobs={filtered.reviewing} />
                </>
              )
            }
          </TabPanel>
          <TabPanel>
            {
              (filtered.done != null) && (
                <>
                  <Flex mt="3">
                    <SearchBar filter={filter} setFilter={setFilter} />
                  </Flex>
                  <Text mt="5" mb="2" fontWeight="semibold">{"Anda memiliki "+filtered.done.length+" pekerjaan selesai"}</Text>
                  <JobList jobs={filtered.done} />
                </>
              )
            }
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
