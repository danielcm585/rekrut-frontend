import React, { useEffect, useState } from "react";

import { JobCard, Navbar, SearchBar, JobGrid } from "../components";

import { Flex, Text, Box, Grid, Link, Button, Spacer } from "@chakra-ui/react";

export default function Dashboard() {
  // TODO: Get user from localStorage
  // const user = null;
  const user = {
    id: 3,
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
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Anakin Skywalker",
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "C3PO",
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
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Din Djarin",
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
      <Flex justifyContent="center">
        <Flex mt="100px" w="95%">
          <SearchBar keyword={keyword} setKeyword={setKeyword} />
        </Flex>
      </Flex>
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
                <JobGrid jobs={bestOffer} />
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
                <JobGrid jobs={recentJob} />
              </Box>
            </Flex>
          </>
        )
      }
    </>
  );
}
