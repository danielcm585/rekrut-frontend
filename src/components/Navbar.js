import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { BiLogOut, BiUser } from "react-icons/bi";

import { Button, Flex, HStack, Spacer, Text, Image, Link } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, MenuDivider } from "@chakra-ui/react";

export default function Navbar() {
  // const user = null;
  const user = {
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Luke Skywalker",
    email: "luke.skywalker@gmail.com",
    role: "worker"
  };
  // TODO: Get user from localStorage

  return (
    <>
      <Flex w="100%" as="header" position="fixed">
        <Flex p="3" w="100%" bg="gray.500" justifyContent="center">
          <HStack w="95%">
            <Link href="/">
              <Text fontSize="2xl" fontWeight="semibold">Rekrut.id</Text>
            </Link>
            <Spacer></Spacer>
            {
              (user != null) ? (
                <>
                  <Menu>
                    <MenuButton as={Button} rightIcon={<IoChevronDown />}>
                    <HStack>
                      <Image src={user.photo} h="7" borderRadius="full" />
                      <Text fontSize="1xl" fontWeight="semibold">{user.name}</Text>
                    </HStack>
                    </MenuButton>
                    <MenuList>
                      <MenuItem icon={<BiUser />}>My Profile</MenuItem>
                      <MenuDivider />
                      <MenuItem icon={<BiLogOut />}>Logout</MenuItem>
                  </MenuList>
                  </Menu>
                </>
              ) : (
                <>
                  <Button onClick={() => window.location.href="/login"}>Login</Button>
                  <Button onClick={() => window.location.href="/register"}>Register</Button>
                </>
              )
            }
          </HStack>
        </Flex>
      </Flex>
    </>
  );
}
