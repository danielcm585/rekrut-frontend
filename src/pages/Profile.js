import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

import { Navbar, ProfileCard, SearchBar } from "../components";

import { Flex, Box, Divider } from "@chakra-ui/react";

export default function Profile() {
  // TODO: Fetch user from api based on id
  const { id } = useParams();
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

  const [ keyword, setKeyword ] = useState("");
  
  return (
    <>
      <Navbar />
      <Flex justifyContent="center">
        <Flex w="95%" mt="100" direction="column">
          <ProfileCard user={user} />
          <Flex mt="9">
            <SearchBar keyword={keyword} setKeyword={setKeyword} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
