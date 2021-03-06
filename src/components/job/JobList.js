import React from "react"

import { JobCard } from "."

import { Flex, Skeleton } from "@chakra-ui/react"

export default function JobList({ jobs, preview, worker }) {
  return (
    <>
      <Flex mt="2" w="100%" direction="column">
        {
          jobs.map((job, idx) => <JobCard key={idx} job={job} preview={preview} worker={worker} />)
        }
      </Flex>
    </>
  )
}
