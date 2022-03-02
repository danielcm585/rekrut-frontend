import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MdLocationOn, MdWork } from "react-icons/md"
import { FaMoneyBillWave } from "react-icons/fa"

import { JobList, JobButton, JobBadges } from "../components/job"
import { ProfileList } from "../components/profile"
import { Navbar, Footer } from "../components"

import { useDisclosure } from "@chakra-ui/react"
import { Box, Flex, HStack, Image, Link, Spacer, Text, Icon, SimpleGrid } from "@chakra-ui/react"
import { Star } from "../components/review"

export default function Job() {
  const { id } = useParams()

  // TODO: Get user from localStorage
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

  
  // TODO: Fetch job data from api
  const job = {
    id: 1,
    title: "Backend Engineer",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    responsibilities: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    qualifications: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Web Developer",
    salary: 5000000,
    location: "Jakarta",
    type: "Full Time",
    status: "hiring",
    // status: "hired",
    // status: "in review",
    // status: "done",
    company: {
      id: 1,
      name: "BukaPedia",
      rating: 4.2,
      photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    registrants: [
      {
        id: 9,
        photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        name: "Obiwan Kenobi",
        category: "Web Developer",
        rating: 4.3,
        reviews: ["ada"],
        email: "email@gmail.com",
        phone: "+62123213123"
      },
      {
        id: 10,
        photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        name: "Anakin Skywalker",
        category: "Web Developer",
        rating: 2.1,
        reviews: ["ada"],
        email: "email@gmail.com",
        phone: "+62123213123"
      },
      {
        id: 11,
        photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        name: "C3PO",
        category: "Web Developer",
        rating: 4.9,
        reviews: ["ada"],
        email: "email@gmail.com",
        phone: "+62123213123"
      }
    ],
    chosen: "C3PO"
  }
    
  const [ otherJobs, setOtherJobs ] = useState()
  useEffect(() => {
    document.title = job.title+" | "+job.company.name
    
    setOtherJobs([
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

    setOtherJobs(jobs => jobs.slice(0,3))
  }, [])
  
  const [ isConfirmOpen, setIsConfirmOpen ] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const parseAmount = (amount) => {
    return "IDR "+amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")+",00";
  }
  
  // FIXME: Can we review?
  const canReview = true
  
  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Flex mt="100" w="85%" direction="column">
          <Flex>
            <Flex>
              <Flex p="2" pl="0">
                <Image src={job.company.photo} h="95" borderRadius="md" />
              </Flex>
              <Box ml="2" mt="1">
                <HStack>
                  <Text fontSize="xl" fontWeight="semibold">{job.title}</Text>
                  <JobBadges job={job} />
                </HStack>
                <Flex>
                  <Link href={"/profile/"+job.company.id}>
                    <Text color="gray.600">{job.company.name}</Text>
                  </Link>
                </Flex>
                {
                  (job.company.rating != null) && <Star rate={job.company.rating} />
                }
                <Text fontSize="sm" color="gray.600">
                  {job.registrants.length+" Pelamar"}
                </Text>
              </Box>
            </Flex>
            <Spacer></Spacer>
            <JobButton user={user} job={job} 
              isOpen={isOpen} onOpen={onOpen} onClose={onClose}
              isConfirmOpen={isConfirmOpen} setIsConfirmOpen={setIsConfirmOpen} />
          </Flex>
          <Flex>
            <SimpleGrid columns="2" spacing="4">
              <HStack mt="8">
                <Icon as={MdLocationOn} color="gray.600" />
                <Text color="gray.600">Lokasi</Text>
              </HStack>
              <Text mt="8" fontWeight="semibold">{job.location}</Text>
              <HStack>
                <Icon as={MdWork} color="gray.600" />
                <Text color="gray.600">Job Type</Text>
              </HStack>
              <Text fontWeight="semibold">{job.type}</Text>
              <HStack>
                <Icon as={FaMoneyBillWave} color="gray.600" />
                <Text color="gray.600">Salary</Text>
              </HStack>
              <Text fontWeight="semibold">{parseAmount(job.salary)}</Text>
            </SimpleGrid>
          </Flex>
          {
            (job.detail != null) && (
              <>
                <Text mt="8" fontWeight="bold">Detail</Text>
                <Text mt="2">{job.detail}</Text>
              </>
            )
          }
          {
            (job.responsibilities != null) && (
              <>
                <Text mt="8" fontWeight="bold">Responsibilities</Text>
                <Text mt="2">{job.responsibilities}</Text>
              </>
            )
          }
          {
            (job.qualifications != null) && (
              <>
                <Text mt="8" fontWeight="bold">Qualifications</Text>
                <Text mt="2">{job.qualifications}</Text>
              </>
            )
          }
          {
            (user.role == "client" && canReview) && (
              <>
                <Text mt="8" fontWeight="bold">Top Registrants</Text>
                <Flex mt="2">
                  <ProfileList profiles={job.registrants} />
                </Flex>
              </>
            )
          }
          <Text mt="8" fontWeight="bold">Other Job</Text>
          <Flex mt="2">
            {
              (otherJobs != null) && <JobList jobs={otherJobs} />
            }
          </Flex>
        </Flex>
      </Flex>
      <Footer /> 
    </>
  )
}
