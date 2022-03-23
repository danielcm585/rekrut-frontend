import React, { useState } from "react"

import { BiShow, BiHide } from "react-icons/bi"

import { IconButton } from "@chakra-ui/react"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react"

export default function PasswordInput({ password, setPassword, placeholder }) {
  const handlePasswordChanges = (e) => setPassword(e.target.value)

  const [ show, setShow ] = useState()

  return (
    <>
      <InputGroup>
        <Input type={show ? "text" : "password"} placeholder={placeholder ? placeholder : "password"} 
          borderColor="black" value={password} onChange={handlePasswordChanges} />
        <InputRightElement>
          <IconButton icon={show ? <BiHide /> : <BiShow />} variant="ghost" size="sm" borderRadius="50" 
            onClick={() => setShow(prev => !prev)}>
            {show ? "Hide" : "Show"}
          </IconButton>
        </InputRightElement>
      </InputGroup>
    </>
  )
}
