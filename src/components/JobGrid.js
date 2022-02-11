import React from "react";

import { JobCard } from ".";

import { Grid } from "@chakra-ui/react";

export default function JobGrid({ jobs }) {
  return (
    <>
      <Grid mt="3" templateColumns="repeat(4, 1fr)" gap="3">
        {
          jobs.map((job, idx) => <JobCard key={idx} job={job} />)
        }
      </Grid>
    </>
  );
}
