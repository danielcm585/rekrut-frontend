import React from "react"

import { JobCard } from "."

import { Flex } from "@chakra-ui/react"

export default function JobList({ jobs }) {
  return (
    <>
      <Flex w="100%" direction="column">
        {
          jobs.map((job, idx) => <JobCard key={idx} job={job} />)
        }
      </Flex>
    </>
  )
}
