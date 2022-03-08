import React from "react"

import { ProfileCard } from "."

import { SimpleGrid } from "@chakra-ui/react"

export default function ProfileList({ profiles, job }) {  
  return (
    <>
      <SimpleGrid mt="4" columns="2" spacing="3">
        {
          (profiles != null) &&
            profiles.map((worker, idx) => <ProfileCard worker={worker} job={job} />)
        }
      </SimpleGrid>
    </>
  )
}
