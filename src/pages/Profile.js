import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Navbar, ProfileCard, SearchBar } from "../components";

import { Flex } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function Profile() {
  // TODO: Fetch user from api based on id
  const { id } = useParams();
  console.log(id);
  // const user = null;
  const user = {
    id: 3,
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Luke Skywalker",
    email: "luke.skywalker@gmail.com",
    phone: "628123456789",
    role: "worker",
    cv: "",
    category: "Web Developer"
  };

  // TODO: Fetch my jobs from api
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
  
  // TODO: Parse pending, accepted, rejected from api
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
        <Flex w="95%" mt="100" direction="column">
          <ProfileCard user={user} />
          <Flex mt="9">
            <SearchBar keyword={keyword} setKeyword={setKeyword} />
          </Flex>
          <Tabs mt="5" isFitted>
            <TabList>
              <Tab>PENDING</Tab>
              <Tab>ACCEPTED</Tab>
              <Tab>REJECTED</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                Halo
              </TabPanel>
              <TabPanel>
                Halo
              </TabPanel>
              <TabPanel>
                Halo
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
}
