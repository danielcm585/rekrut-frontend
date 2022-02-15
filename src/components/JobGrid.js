import React from "react"

import { JobCard } from "."

import { Grid, Flex } from "@chakra-ui/react"

export default function JobGrid({ jobs }) {
  return (
    <>
      <Flex mt="3" direction="column">
      {/* <Grid mt="3" templateColumns="repeat(4, 1fr)" gap="3"> */}
        {
          jobs.map((job, idx) => <JobCard key={idx} job={job} />)
        }
      {/* </Grid> */}
      </Flex>
    </>
  )
}
