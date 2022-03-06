import React from "react"

import { PasswordInput } from ".."
import { LoginImg } from "../../images"

import { useToast } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/react"
import { Flex, Text, Input, Button, Link, Image } from "@chakra-ui/react"

export default function AboutUser({ setPage, email, setEmail, password, setPassword, confPassword, setConfPassword }) {
  const handleEmailChanges = (e) => setEmail(e.target.value)

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

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
            <PasswordInput password={password} setPassword={setPassword} />
          </FormControl>
          <FormControl mt="3">
            <FormLabel>
              <Text fontSize="1xl" fontWeight="bold">Konfirmasi Password</Text>
            </FormLabel>
            <PasswordInput password={confPassword} setPassword={setConfPassword} />
          </FormControl>
          <Button mt="8" borderRadius="50" borderColor="black" bgColor="#FF8450"
            onClick={() => {
              if (email == null || email.length == 0) {
                toast({
                  title: "Email tidak boleh kosong",
                  status: "error"
                })
                return
              }
              if (email.length < 4 || !email.includes('@')) {
                toast({
                  title: "Email tidak valid",
                  status: "error"
                })
                return
              }
              if (password == null || password.length == 0) {
                toast({
                  title: "Password tidak boleh kosong",
                  status: "error"
                })
                return
              }
              if (password.length < 6) {
                toast({
                  title: "Password minimal terdiri dari 6 karakter",
                  status: "error"
                })
                return
              }
              if (password != confPassword) {
                toast({
                  title: "Password tidak cocok",
                  status: "error"
                })
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
