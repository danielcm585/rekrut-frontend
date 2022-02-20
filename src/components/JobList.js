import React from "react"

import { JobCard } from "."

import { Grid, Flex } from "@chakra-ui/react"

export default function JobList({ jobs }) {
  return (
    <>
      <Flex direction="column">
        {
          jobs.map((job, idx) => <JobCard key={idx} job={job} />)
        }
      </Flex>
    </>
  )
}
