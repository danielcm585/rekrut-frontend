import React, { useEffect, useState } from "react"

import { Navbar, Footer } from "../components"
import { ProfileDetails } from "../components/profile"
import { WorkerJobs, ClientJobs } from "../components/job"

import { useToast, useMediaQuery } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"

export default function MyProfile() {
  const user = JSON.parse(localStorage.getItem("user"))

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ profile, setProfile ] = useState(null)

  useEffect(() => {
    document.title = "Rekrut.id | Profil Saya"

    fetch("https://protected-castle-75235.herokuapp.com/user/"+user._id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.statusCode >= 400) throw new Error(json.message)
      json.role = (json.worker != null ? "worker" : "client")
      json.bank = json.bankAccount
      localStorage.setItem("user", JSON.stringify(json))
      setProfile(json)
    })
    .catch((err) => {
      toast({
        title: err.message,
        status: "error"
      })
    })
  }, [])

  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")
  
  if (profile == null) return <></>
  return (
    <>
      <Navbar />
      <Flex>
        <Flex w="100%" justifyContent="center">
          <Flex w="80%" pt={isBigScreen ? "10" : "5"} pb="10">
            <ProfileDetails user={profile} me={true} />
          </Flex>
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Flex w="85%" direction="column">
          {
            (profile.role == "worker") ? 
              <WorkerJobs user={profile} /> :
              <ClientJobs user={profile} />
          }
        </Flex>
      </Flex>
      <Footer />
    </>
  )
}
