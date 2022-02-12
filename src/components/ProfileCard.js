import React from "react";
import { BiLinkExternal } from "react-icons/bi";

import { Image, Box, Text, HStack, Spacer, Link, Icon } from "@chakra-ui/react";

export default function ProfileCard({ user }) {
  return (
    <>
      <HStack>
        <Image mr="5" h="170px" borderRadius="full" src={user.photo} />
        <Box>
          <Text fontSize="30" fontWeight="semibold">{user.name}</Text>
          <Link href={"mailto:"+user.email} isExternal>
            <HStack>
              <Text fontSize="20" color="gray.600">{user.email}</Text>
              <Icon as={BiLinkExternal} />
            </HStack>
          </Link>
          <Link href={"https://wa.me/"+user.phone} isExternal>
            <HStack>
              <Text fontSize="18" color="gray.600">{"+"+user.phone}</Text>
              <Icon as={BiLinkExternal} />
            </HStack>
          </Link>
          <Link href={user.cv}>
            <HStack>
              <Text fontSize="15" color="gray.600">Get CV</Text>
              <Icon as={BiLinkExternal} />
            </HStack>
          </Link>
        </Box>
        <Spacer></Spacer>
      </HStack>
    </>
  );
}
