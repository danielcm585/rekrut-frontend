import React from "react";

import { Box, Button, Divider, HStack, Image, Link, Spacer, Text, Flex } from "@chakra-ui/react";

export default function JobCard({ job }) {
  return (
    <>
      <Box p="3" border="1px" borderColor="gray.300" borderRadius="md">
        <HStack mb="2">
          <Flex p="2">
            <Image src={job.company.photo} h="55" borderRadius="md" />
          </Flex>
          <Box>
            <Link href={"/profile/"+job.company.id}>
              <Text fontSize="sm" color="gray.600">{job.company.name}</Text>
            </Link>
            <Text fontSize="xl" fontWeight="bold">{job.title}</Text>
          </Box>
          <Spacer></Spacer>
          <Button size="sm" onClick={() => window.location.href="/job/"+job.id}>Details</Button>
        </HStack>
      </Box>
    </>
  );
}
