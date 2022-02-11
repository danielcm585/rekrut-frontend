import React from "react";

import { Box, Button, Divider, HStack, Image, Link, Spacer, Text } from "@chakra-ui/react";

export default function JobCard({ job }) {
  return (
    <>
      <Box p="3" borderColor="black" borderRadius="lg" bg="gray.200">
        <HStack mb="2">
          <Image src={job.company.photo} h="35" borderRadius="full" />
          <Box>
            <Text fontSize="md" fontWeight="semibold">{job.title}</Text>
            <Link href={"/profile/"+job.company.id}>
              <Text fontSize="sm" color="gray.600">{job.company.name}</Text>
            </Link>
          </Box>
          <Spacer></Spacer>
          <Button size="sm" onClick={() => window.location.href="/job/"+job.id}>Details</Button>
        </HStack>
        <Divider orientation="horizontal" />
        <Text mt="2" fontsize="3xs" color="gray.700">{job.desc}</Text>
        {/* {job.fee} */}
      </Box>
    </>
  );
}
