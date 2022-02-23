import React from "react"

import { Button, ButtonGroup, Text } from "@chakra-ui/react"
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor } from "@chakra-ui/react"

export default function ApplyButton({ isOpen, setIsOpen }) {
  return (
    <>
      <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} placement="bottom" returnFocusOnClose={false} closeOnBlur={false}>
        <PopoverTrigger>
          <Button pl="10" pr="10" borderRadius="50" bgColor="#FF8450" 
            onClick={() => setIsOpen(prev => !prev)}>
            <Text fontSize="sm" fontWeight="bold">Apply</Text>
          </Button> 
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to apply to this job?
          </PopoverBody>
          <PopoverFooter d="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button borderRadius="50" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button borderRadius="50" bgColor="#FF8450">Apply</Button> {/*TODO: Add onClick func*/}
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  )
}
