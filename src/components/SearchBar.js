import React from "react"
import { BiSearch } from "react-icons/bi"

import { HStack, Button, Text, Icon } from "@chakra-ui/react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

export default function SearchBar({ keyword, setKeyword }) {
  const handleChanges = (e) => setKeyword(e.target.value)

  return (
    <>
      <HStack w="100%">
        <InputGroup>
          <InputLeftElement children={<Icon ml="2" as={BiSearch} />} />
          <Input variant="outline" borderRadius="50" borderColor="black"
            placeholder="Search for a job" value={keyword} onChange={handleChanges}>
          </Input>
        </InputGroup>
        <Button pl="10" pr="10" borderRadius="50" bgColor="#FF8450">
          <Text fontSize="sm" fontWeight="bold">Search</Text>
        </Button> 
      </HStack>
    </>
  )
}
