import React, { useState } from "react"

import { StarButton } from "."

import { useToast } from "@chakra-ui/react"
import { Button, Text, Textarea } from "@chakra-ui/react"
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"

export default function ReviewForm({ isOpen, onClose, job }) {
  const user = JSON.parse(localStorage.getItem("user"))

  const [ rating, setRating ] = useState()
  const [ body, setBody ] = useState()
  const handleBodyChange = (e) => setBody(e.target.value)

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ isLoading, setIsLoading ] = useState(false)

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <StarButton rating={rating} setRating={setRating} />
            <Textarea mt="3" variant="outline" borderColor="black" placeholder="Review saya" 
              value={body} onChange={handleBodyChange} />
          </ModalBody>
          <ModalFooter>
            <Button borderRadius="50" onClick={() => onClose()}>
              <Text fontSize="sm" fontWeight="bold">Cancel</Text>
            </Button> 
            <Button ml="2" borderRadius="50" bgColor="#FF8450" isLoading={isLoading}
              onClick={() => {
                if (rating == null) {
                  toast({
                    title: "Anda belum memberi bintang",
                    status: "error"
                  })
                  return;
                }
                setIsLoading(true)
                fetch("https://protected-castle-75235.herokuapp.com/review/"+job._id, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                  body: JSON.stringify({
                    body: body,
                    rating: rating,
                    author: user._id
                  })
                })
                .then(resp => resp.json())
                .then(json => {
                  if (json.statusCode >= 400) throw new Error(json.message)
                  setIsLoading(false)
                  onClose()
                  toast({
                    title: "Berhasil menyimpan review",
                    status: "success"
                  })
                })
                .catch((err) => {
                  setIsLoading(false)
                  onClose()
                  toast({
                    title: err.message,
                    status: "error"
                  })
                })
              }}>
              <Text fontSize="sm" fontWeight="bold">Submit</Text>
            </Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
