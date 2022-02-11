import React from "react";

import { Flex, HStack, Input, Button } from "@chakra-ui/react";

export default function SearchBar({ keyword, setKeyword }) {
  // console.log(keyword);
  const handleChanges = (e) => setKeyword(e.target.value);

  return (
    <>
      <Flex justifyContent="center">
        <Flex mt="100px" w="95%">
          <HStack w="100%">
            <Input variant="outline" borderRadius="50" borderColor="black"
              placeholder="Search for a job" value={keyword} onChange={handleChanges}>
            </Input>
            <Button>Search</Button> 
          </HStack>
        </Flex>
      </Flex>
    </>
  );
}
