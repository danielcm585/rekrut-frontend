import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MdAttachMoney, MdLocationOn, MdWork } from "react-icons/md"

import { Navbar, JobList, ApplyButton, Footer } from "../components"

import { Box, Flex, HStack, Image, Link, Spacer, Text, Icon, SimpleGrid } from "@chakra-ui/react"

export default function Job() {
  const { id } = useParams()
  
  // TODO: Fetch job data from api
  // FIXME: Did we apply for the job?
  const job = {
    id: 1,
      title: "Backend Engineer",
      detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      requirement: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      benefit: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    ].slice(0,3))
  }, [])
  
  const [ isOpen, setIsOpen ] = useState(false)
  
  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Flex mt="100" w="85%" direction="column">
          <Flex>
            <HStack>
              <Flex p="2" pl="0">
                <Image src={job.company.photo} h="55" borderRadius="md" />
              </Flex>
              <Box>
                <Text fontSize="xl" fontWeight="semibold">{job.title}</Text>
                <Flex>
                  <Link href={"/profile/"+job.company.id}>
                    <Text color="gray.600">{job.company.name}</Text>
                  </Link>
                </Flex>
              </Box>
            </HStack>
            <Spacer></Spacer>
            <ApplyButton isOpen={isOpen} setIsOpen={setIsOpen} />
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
                <Icon as={MdAttachMoney} color="gray.600" />
                <Text color="gray.600">Salary</Text>
              </HStack>
              <Text fontWeight="semibold">{"IDR "+job.fee}</Text>
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
            (job.requirement != null) && (
              <>
                <Text mt="8" fontWeight="bold">Requirement</Text>
                <Text mt="2">{job.requirement}</Text>
              </>
            )
          }
          {
            (job.benefit != null) && (
              <>
                <Text mt="8" fontWeight="bold">Benefit</Text>
                <Text mt="2">{job.benefit}</Text>
              </>
            )
          }
          <Text mt="8" fontWeight="bold">Other Job</Text>
          {
            (otherJobs != null) && <JobList jobs={otherJobs} />
          }
        </Flex>
      </Flex>
      <Footer /> 
    </>
  )
}
