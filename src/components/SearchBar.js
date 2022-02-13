import React from "react";

import { HStack, Input, Button, Text } from "@chakra-ui/react";

export default function SearchBar({ keyword, setKeyword }) {
  // console.log(keyword);
  const handleChanges = (e) => setKeyword(e.target.value);

  return (
    <>
      <HStack w="100%">
        <Input variant="outline" borderRadius="50" borderColor="black"
          placeholder="Search for a job" value={keyword} onChange={handleChanges}>
        </Input>
        <Button pl="10" pr="10" borderRadius="50" bgColor="#FF8450">
          <Text fontSize="sm" fontWeight="bold">Search</Text>
        </Button> 
      </HStack>
    </>
  );
}
