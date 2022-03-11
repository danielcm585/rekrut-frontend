import React, { useEffect } from "react"

import { Navbar, Footer } from "../components"
import { ProfileDetails } from "../components/profile"
import { WorkerJobs, ClientJobs } from "../components/job"

import { Flex } from "@chakra-ui/react"

export default function MyProfile() {
  const user = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    if (user.role == "worker") document.title = user.name + " | " + user.category
    else document.title = user.name
  }, [])
  
  return (
    <>
      <Navbar />
      <Flex>
        {/* <Flex mt="66" justifyContent="center" bg="#2A2A30"> */}
        <Flex w="100%" mt="66" justifyContent="center">
          <Flex w="80%" pt="10" pb="10">
            <ProfileDetails user={user} me={true} />
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Flex w="85%" direction="column">
          {
            (user.role == "worker") ? (
              <WorkerJobs user={user} />
            ) : (
              <ClientJobs user={user} />
            )
          }
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
