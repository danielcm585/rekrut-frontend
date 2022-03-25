import React from "react"

import { ProfileCard } from "."

import { useMediaQuery } from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"

export default function ProfileList({ profiles, job }) {  
  const [ isBigScreen ] = useMediaQuery("(min-width:1200px)")

  return (
    <>
      <SimpleGrid mt="2" columns={isBigScreen ? "2" : "1"} spacing="3">
        {
          (profiles != null) &&
            profiles.map((worker, idx) => <ProfileCard key={idx} worker={worker} job={job} />)
        }
      </SimpleGrid>
    </>
  )
}
