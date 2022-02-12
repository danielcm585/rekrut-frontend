import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Navbar, ProfileCard, SearchBar, JobGrid } from "../components";

import { Divider, Flex, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function Profile() {
  // TODO: Fetch user from api based on id
  const { id } = useParams();
  // const user = null;
  const user = {
    id: 3,
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Luke Skywalker",
    bio: "I'm a tech enthusiast who always try to do my best in every project I create.",
    email: "luke.skywalker@gmail.com",
    phone: "628123456789",
    role: "worker",
    cv: "",
    category: "Web Developer"
  };

  // TODO: Fetch ONLY my jobs (the jobs I registered) from api
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
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Luke Skywalker",
          }
        ],
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
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Luke Skywalker",
          }
        ],
        chosen: "Mace Windu"
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
        registrants: [
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Mace Windu",
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Din Djarin",
          },
          {
            photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
            name: "Luke Skywalker",
          }
        ],
        chosen: "Luke Skywalker"
      }
    ]);
    console.log("FETCH API");
  }, []);
  
  const [ keyword, setKeyword ] = useState("");
  
  // TODO: Parse pending, accepted, rejected from api
  const [ pending, setPending ] = useState();
  const [ accepted, setAccepted ] = useState();
  const [ rejected, setRejected ] = useState();
  useEffect(() => {
    if (jobs == null) return;
    jobs.filter(job => job.category == user.category);
    const searchedJobs = jobs.filter(job => job.title.includes(keyword));
    setPending([...searchedJobs].filter(job => job.chosen == null));
    setAccepted([...searchedJobs].filter(job => job.chosen == user.name));
    setRejected([...searchedJobs]
      .filter(job => job.chosen != null)
      .filter(job => job.chosen != user.name));
  }, [ keyword, jobs ]);
  
  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Flex w="95%" mt="100" direction="column">
          <Flex justifyContent="center">
            <ProfileCard user={user} />
            <Divider orientation="vertical" />
            <Text>{user.bio}</Text>
          </Flex>
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
                {
                  (pending != null) && <JobGrid jobs={pending} />
                }
              </TabPanel>
              <TabPanel>
                {
                  (accepted != null) && <JobGrid jobs={accepted} />
                }
              </TabPanel>
              <TabPanel>
                {
                  (rejected != null) && <JobGrid jobs={rejected} />
                }
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </>
  );
}
