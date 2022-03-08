import React, { useEffect } from "react"

import { Navbar, Footer } from "../components"
import { ProfileDetails } from "../components/profile"
import { WorkerJobs, ClientJobs } from "../components/job"

import { Flex } from "@chakra-ui/react"

export default function MyProfile() {
  // TODO: Fetch user from api based on id
  const user = JSON.parse(localStorage.getItem("user"))
  // const user = null
  // const user = {
  //   id: 3,
  //   photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  //   name: "Luke Skywalker",
  //   bio: "Hello , I am energetic UX Designer and currently studies computer science, skilled in Figma and UX research. Have completed several projects, including design of an event web, mobile app for study group and redesign mobile bank app.",
  //   email: "luke.skywalker@gmail.com",
  //   phone: "+628123456789",
  //   role: "worker",
  //   // role: "client",
  //   cv: "",
  //   category: "UI/UX Designer",
  //   rating: 4.33,
  //   reviews: ["ada"]
  // }

  useEffect(() => {
    document.title = user.name + " | " + user.category
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
