import React, { useEffect, useState } from "react";

import { JobCard, Navbar, SearchBar } from "../components";

import { Flex, Text, Box, Grid, Link, Button, Spacer } from "@chakra-ui/react";

export default function Dashboard() {
  // TODO: Get user from localStorage
  // const user = null;
  const user = {
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Luke Skywalker",
    email: "luke.skywalker@gmail.com",
    role: "worker",
    category: "Web Developer"
  };

  // TODO: Fetch jobs data from api
  const [ jobs, setJobs ] = useState();
  useEffect(() => {
    setJobs([
      {
        id: 1,
        title: "Backend Engineer",
        desc: "Do backend work in developing our app.",
        category: "Web Developer",
        fee: 5000000,
        company: {
          id: 1,
          name: "BukaPedia",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        registrants: [
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Obiwan Kenobi",
            email: "obiwan.kenobi@gmail.com",
            role: "worker"
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Anakin Skywalker",
            email: "anakin.skywalker@gmail.com",
            role: "worker"
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "C3PO",
            email: "c3po@gmail.com",
            role: "worker"
          }
        ]
      },
      {
        id: 2,
        title: "Frontend Engineer",
        category: "Web Developer",
        desc: "Do frontend work in developing our app.",
        fee: 6000000,
        company: {
          id: 1,
          name: "BukaPedia",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        registrants: [
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Mace Windu",
            email: "mace.windu@gmail.com",
            role: "worker"
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Din Djarin",
            email: "din.djarin@gmail.com",
            role: "worker"
          }
        ]
      },
      {
        id: 3,
        title: "Web Developer",
        category: "Web Developer",
        desc: "Develop a great website for our company",
        fee: 4000000,
        company: {
          id: 2,
          name: "TokoLapak",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        },
        registrants: []
      }
    ]);
    console.log("FETCH API");
  }, []);

  const [ keyword, setKeyword ] = useState("");
  
  // TODO: My jobs
  const [ bestOffer, setBestOffer ] = useState();
  const [ recentJob, setRecentJob ] = useState();
  useEffect(() => {
    if (jobs == null) return;
    jobs.filter(job => job.category == user.category);
    const searchedJobs = jobs.filter(job => job.title.includes(keyword));
    setRecentJob([...searchedJobs]);
    setBestOffer([...searchedJobs].sort((jobA, jobB) => jobB.fee-jobA.fee));
  }, [ keyword, jobs ]);

  return (
    <>
      <Navbar />
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      {
        (bestOffer != null) && (
          <>
            <Flex justifyContent="center">
              <Box mt="10" w="95%">
                <Flex>
                  <Text fontSize="2xl" fontWeight="semibold">
                    BEST OFFER
                  </Text>
                  <Spacer></Spacer>
                  <Button onClick={() => window.location.href="/jobs/best-offer"}>See all</Button>
                </Flex>
                <Grid mt="3" templateColumns="repeat(4, 1fr)" gap="3">
                  {
                    bestOffer.map((job, idx) => <JobCard key={idx} job={job} />)
                  }
                </Grid>
              </Box>
            </Flex>
          </>
        )
      }
      {
        (recentJob != null) && (
          <>
            <Flex justifyContent="center">
              <Box mt="10" w="95%">
                <Flex>
                  <Text fontSize="2xl" fontWeight="semibold">
                    RECENTLY ADDED
                  </Text>
                  <Spacer></Spacer>
                  <Button onClick={() => window.location.href="/jobs/best-offer"}>See all</Button>
                </Flex>
                <Grid mt="3" templateColumns="repeat(4, 1fr)" gap="3">
                  {
                    recentJob.map((job, idx) => <JobCard key={idx} job={job} />)
                  }
                </Grid>
              </Box>
            </Flex>
          </>
        )
      }
    </>
  );
}
