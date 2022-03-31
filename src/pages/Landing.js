import React, { useState, useEffect } from "react"

import { JobList } from "../components/job"
import { ProfileList } from "../components/profile"
import { Navbar, Footer, SearchBar, Welcome } from "../components"

import { useToast } from "@chakra-ui/react"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { Box, Flex } from "@chakra-ui/react"

export default function Landing() {
  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ data, setData ] = useState({
    jobs: [],
    workers: []
  })

  useEffect(() => {
    document.title = "Rekrut.id | Kerja atau rekrut sekarang!"

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
  }, [])

  const [ filter, setFilter ] = useState({
    keyword: "",
    category: "Semua kategori pekerjaan",
    experience: "Semua range pengalaman",
    location: "Semua lokasi",
    type: "Semua tipe pekerjaan",
    salary: "Semua range upah"
  })

  const filterJobs = (job) => {
    return ((job.location == filter.location || filter.location == "Semua lokasi") &&
            (job.jobType == filter.type || filter.type == "Semua tipe pekerjaan") &&
            (parseInt(job.salary) >= parseInt(filter.salary) || filter.salary == "Semua range upah") && 
            (job.title != null && job.title.toLowerCase().includes(filter.keyword.toLowerCase()) ||
            job.author.name != null && job.author.name.toLowerCase().includes(filter.keyword.toLowerCase())))
  }

  const filterWorkers = (worker) => {
    return ((worker.category == filter.category || filter.category == "Semua kategori pekerjaan") && 
            (worker.review.length >= parseInt(filter.experience) || filter.experience == "Semua range pengalaman") && 
            (worker.name != null && worker.name.toLowerCase().includes(filter.keyword.toLowerCase()) || 
            worker.skill != null && worker.skill.toLowerCase().includes(filter.keyword.toLowerCase())))
  }

  const [ filtered, setFiltered ] = useState({
    jobs: [],
    workers: []
  })

  const sortJobs = (jobA, jobB) => jobB.salary-jobA.salary

  useEffect(() => {
    setFiltered(prev => ({
      ...prev,
      jobs: [...data.jobs].filter(filterJobs).sort(sortJobs),
      workers: [...data.workers].filter(filterWorkers)
    }))
  }, [ data, filter ])

  return (
    <>
      <Navbar />
      <Flex>
        <Welcome />
      </Flex>
      <Flex w="100%" mt="10" justifyContent="center">
        <Flex w="85%">
          <Tabs w="100%" isFitted>
            <TabList>
              <Tab>Worker</Tab>
              <Tab>Client</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex w="100%" mt="3" direction="column">
                  <SearchBar filter={filter} setFilter={setFilter} />
                  <Box w="100%" mt="3">
                    <JobList jobs={filtered.jobs} />
                  </Box>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex w="100%" mt="3" direction="column">
                  <SearchBar workers={true} filter={filter} setFilter={setFilter} />
                  <Box w="100%" mt="3">
                    <ProfileList profiles={filtered.workers} />
                  </Box>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
      {/* <Flex mt="90" justifyContent="center">
        <Text fontSize="3xl" fontWeight="bold">Ribuan Bidang Pekerjaan</Text>
      </Flex>
      <Flex mt="10" justifyContent="center">
        <SimpleGrid w="60%" columns="4" spacing="10">
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Guru</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Desainer</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Fotografer</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Web Developer</Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex mt="8" justifyContent="center">
        <SimpleGrid w="45%" columns="3" spacing="10">
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Translator</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Helper</Text>
            </Flex>
          </Box>
          <Box p="1" border="2px" borderColor="#FF8450" borderRadius="50">
            <Flex justifyContent="center">
              <Text fontSize="xl" fontWeight="semibold">Driver</Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
      <Flex mt="90" justifyContent="center">
        <Text fontSize="3xl" fontWeight="bold">Cara Kerja di Rekrut.id</Text>
      </Flex>
      <Flex mt="8" justifyContent="center">
        <SimpleGrid w="85%" columns="3" spacing="10">
          <Box p="2" pb="3" borderRadius="md" shadow="lg">
            <Image src={Procedure1Img} borderRadius="md" />
            <Flex mt="2" justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">1. Jelaskan Kebutuhanmu</Text>
            </Flex>
            <Flex mt="2" justifyContent="center">
              <Text align="center" fontSize="lg">
                Informasikan jasa yang Anda butuhkan. Dapatkan lebih dari 10+ penawaran dalam hitungan jam
              </Text>
            </Flex>
          </Box>
          <Box p="2" pb="3" borderRadius="md" shadow="lg">
            <Image src={Procedure1Img} borderRadius="md" />
            <Flex mt="2" justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">2. Bandingkan Setiap Jasa</Text>
            </Flex>
            <Flex mt="2" justifyContent="center">
              <Text align="center" fontSize="lg">
                Bandingkan profil untuk menemukan pilihan yang sesuai
              </Text>
            </Flex>
          </Box>
          <Box p="2" pb="3" borderRadius="md" shadow="lg">
            <Image src={Procedure1Img} borderRadius="md" />
            <Flex mt="2" justifyContent="center">
              <Text fontSize="xl" fontWeight="bold">3. Rekrut Pekerja</Text>
            </Flex>
            <Flex mt="2" justifyContent="center">
              <Text align="center" fontSize="lg">
                Rekrut pekerja yang paling tepat untuk Anda. Bekerja melalui workspace kami hingga tuntas.
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex> */}
      <Footer />
    </>
  )
}
