import React from "react"
import { useParams } from "react-router-dom"

import { Footer, Navbar } from "../components"
import { ProfileDetails } from "../components/profile"
import { ReviewList } from "../components/review"

import { Box, Flex, Spacer, Button, Text } from "@chakra-ui/react"

export default function Profile() {
  const { id } = useParams()

  // TODO: Fetch user data
  const user = {
    id: 2,
    photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Mace Windu",
    bio: "Hello , I am energetic UX Designer and currently studies computer science, skilled in Figma and UX research. Have completed several projects, including design of an event web, mobile app for study group and redesign mobile bank app.",
    email: "mace.windu@gmail.com",
    phone: "+628123456789",
    role: "worker",
    cv: "",
    category: "UI/UX Designer",
    rating: 4.33,
    reviews: [
      {
        user: {
          id: 6,
          name: "BukaPedia",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        rating: 4,
        body: "Good work!"
      },
      {
        user: {
          id: 7,
          name: "MicroHard",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        rating: 4,
        body: "Good work!"
      },
      {
        user: {
          id: 8,
          name: "TokoLapak",
          photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        },
        rating: 5,
        body: "Good work!"
      },
    ]
  }

  return (
    <>
      <Navbar />
      <Flex>
        <Flex mt="66" justifyContent="center">
          <Flex w="80%" pt="10" pb="10">
            <ProfileDetails user={user} client={true} />
          </Flex>
        </Flex>
      </Flex>
      {
        (user.reviews != null && user.reviews.length != 0) && (
          <>
            <Flex justifyContent="center">
              <Box w="85%">
                <Flex>
                  <Text fontSize="xl" fontWeight="semibold">Reviews</Text>
                  <Spacer></Spacer>
                  <Button variant="ghost" borderRadius="50" onClick={() => window.location.href=""}>Lihat semua</Button> {/*TODO: Add Lihat semua */}
                </Flex>
                <ReviewList reviews={user.reviews} />
              </Box>
            </Flex>
          </>
        )
      }
      <Footer />
    </>
  )
}
