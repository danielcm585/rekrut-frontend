import React, { useEffect, useState } from "react";

import { Navbar, SearchBar } from "../components";

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
    // setJobs([
    //   {
    //     title: "Backend Engineer",
    //     desc: "Do backend work in developing our app.",
    //     category: "Web Developer",
    //     fee: 5000000,
    //     registrants: [
    //       {
    //         photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //         name: "Obiwan Kenobi",
    //         email: "obiwan.kenobi@gmail.com",
    //         role: "worker"
    //       },
    //       {
    //         photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //         name: "Anakin Skywalker",
    //         email: "anakin.skywalker@gmail.com",
    //         role: "worker"
    //       },
    //       {
    //         photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //         name: "C3PO",
    //         email: "c3po@gmail.com",
    //         role: "worker"
    //       }
    //     ]
    //   },
    //   {
    //     title: "Frontend Engineer",
    //     category: "Web Developer",
    //     desc: "Do frontend work in developing our app.",
    //     fee: 6000000,
    //     registrants: [
    //       {
    //         photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //         name: "Mace Windu",
    //         email: "mace.windu@gmail.com",
    //         role: "worker"
    //       },
    //       {
    //         photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    //         name: "Din Djarin",
    //         email: "din.djarin@gmail.com",
    //         role: "worker"
    //       }
    //     ]
    //   },
    //   {
    //     title: "Web Developer",
    //     category: "Web Developer",
    //     desc: "Develop a great website for our company",
    //     fee: 4000000,
    //     registrants: []
    //   }
    // ]);
    setJobs(12);
    console.log(jobs);
    console.log("FETCH API");
  }, []);

  const [ keyword, setKeyword ] = useState("");
  
  // TODO: Best offer, Top related, Added recently
  // useEffect(() => {
  //   console.log(jobs);
  //   const searchedJobs = jobs.filter(job => job.title.includes(keyword));
  // }, [ keyword ]);

  return (
    <>
      <Navbar />
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
    </>
  );
}
