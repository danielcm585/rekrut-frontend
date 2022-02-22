import React, { useState } from "react"

import { LoginImg } from "../../images"

import { Flex, Text, Input, Button, Link, Image } from "@chakra-ui/react"
import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"

export default function RegisterPage1({ role, setPage, email, setEmail, password, setPassword, confPassword, setConfPassword }) {
  const handleEmailChanges = (e) => setEmail(e.target.value)
  const handlePasswordChanges = (e) => setPassword(e.target.value)
  const handleConfPasswordChanges = (e) => setConfPassword(e.target.value)

  const [ error, setError ] = useState()

  return (
    <>
      <Flex justifyContent="center">
        <Image mt="9%" mr="20" w="30%" src={LoginImg} />
        <Flex w="30%" p="10" mt="9%" direction="column">
          <Text fontSize="3xl" fontWeight="bold">Halo, pengguna baru</Text>
          <Text mt="2" fontSize="1xl">Cukup 5 menit saja untuk membuat akun</Text>
          <FormControl mt="3">
            <FormLabel>
              <Text fontSize="1xl" fontWeight="bold">Email</Text>
            </FormLabel>           
            <Input type="email" placeholder="email@gmail.com" value={email}
              borderColor="black" onChange={handleEmailChanges} />
          </FormControl>
          <FormControl mt="3">
            <FormLabel>
              <Text fontSize="1xl" fontWeight="bold">Password</Text>
            </FormLabel>
            <Input type="password" placeholder="password" value={password} 
              borderColor="black" onChange={handlePasswordChanges} />
          </FormControl>
          <FormControl mt="3">
            <FormLabel>
              <Text fontSize="1xl" fontWeight="bold">Ketik Ulang Password</Text>
            </FormLabel>
            <Input type="password" placeholder="password" value={confPassword} 
              borderColor="black" onChange={handleConfPasswordChanges} />
          </FormControl>
          {
            (error != null) && (
              <Alert mt="5" status="error" borderRadius="lg">
                <AlertIcon />
                {error}
              </Alert>
            )
          }
          <Button mt="8" borderRadius="50" borderColor="black" bgColor="#FF8450"
            onClick={() => {
              if (email == null || email.length < 3) {
                setError("Email tidak valid")
                return
              }
              if (password == null || password.length < 6) {
                setError("Password minimal terdiri dari 6 karakter")
                return
              }
              if (password != confPassword) {
                setError("Password tidak cocok")
                return
              }
              setPage(prev => prev+1)
            }}>
              <Text fontSize="sm" fontWeight="bold">Buat Akun</Text>
            </Button>
          <Flex mt="7">
            <Text fontWeight="semibold">
              Sudah memiliki akun? 
            </Text>
            <Link href="/login">
              <Text ml="2" fontWeight="semibold" color="#FF8450" as="ins">
                Login
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
