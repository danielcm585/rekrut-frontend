import React from "react"

import { useMediaQuery } from "@chakra-ui/react"
import { Button, ButtonGroup, Text } from "@chakra-ui/react"
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor } from "@chakra-ui/react"

export default function ConfirmButton({ action, second, isOpen, setIsOpen, isDisabled, isLoading, onClick }) {
  const [ isBigScreen ] = useMediaQuery("(min-width:600px)")

  return (
    <>
      <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} placement="bottom" returnFocusOnClose={false} closeOnBlur={false}>
        <PopoverTrigger>
          {
            isDisabled ? (
              <Button w={!isBigScreen && "100%"} ml="2" pl="10" pr="10" borderRadius="50" isDisabled
                bgColor={!second && "#FF8450"}>
                <Text fontSize="sm" fontWeight="bold">{action}</Text>
              </Button> 
            ) : (
              <Button w={!isBigScreen && "100%"} ml="2" pl="10" pr="10" borderRadius="50" bgColor={!second && "#FF8450"} 
                onClick={() => setIsOpen(prev => !prev)}>
                <Text fontSize="sm" fontWeight="bold">{action}</Text>
              </Button> 
            )
          }
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Konfirmasi</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Tindakan ini tidak dapat diubah kembali. Apakah anda yakin?
          </PopoverBody>
          <PopoverFooter d="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button borderRadius="50" onClick={() => setIsOpen(false)}>Batal</Button>
              <Button borderRadius="50" bgColor="#FF8450" isLoading={isLoading} onClick={onClick}>{action}</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  )
}
