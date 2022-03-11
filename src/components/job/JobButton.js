import React, { useState } from "react"

import { ChooseWorker, ConfirmButton } from "."
import { ReviewForm } from "../review"

import { useToast, useDisclosure } from "@chakra-ui/react"
import { Button, Flex, Text } from "@chakra-ui/react"

export default function JobButton({ user, job, canReview }) {
  const [ isConfirmOpen, setIsConfirmOpen ] = useState(false)
  const [ isConfirm2Open, setIsConfirm2Open ] = useState(false)
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const [ isLoading, setIsLoading ] = useState(false)

  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const sendRequest = (link, successMessage, json, setIsConfirmOpen) => {
    setIsLoading(true)
    fetch(link, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(json)
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.statusCode >= 400) throw new Error(json.message)
      toast({
        title: successMessage,
        status: "success"
      })
      setIsLoading(false)
      setIsConfirmOpen(false)
    })
    .catch((err) => {
      setIsLoading(false)
      setIsConfirmOpen(false)
      toast({
        title: err.message,
        status: "error"
      })
    })
  }

  return (
    <>
      {
        (job.status == "hiring") && (
          <>
            {
              (user.role == "worker") ? (
                <ConfirmButton action="Daftar" isLoading={isLoading}
                  isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen} 
                  onClick={() => sendRequest(
                    "https://protected-castle-75235.herokuapp.com/worker/apply", 
                    "Pendaftaran anda berhasil",
                    { job: job.id }, setIsConfirmOpen)
                  } />
              ) : (
                <>
                  {
                    canReview && (
                      <>
                        {/* <ChooseWorker job={job} isOpen={isOpen} onClose={onClose} />  */}
                        <Flex>
                          <ConfirmButton action="Hapus" second={true} isLoading={isLoading}
                            isOpen={isConfirm2Open} setIsOpen={setIsConfirm2Open}
                            onClick={() => {
                              // TODO: Set job to "hiring" again
                              console.log("DELETE")
                            }} />
                          <Button ml="2" pl="10" pr="10" borderRadius="50" bgColor="#FF8450"
                            onClick={() => {
                              {/*TODO: Edit job */}
                              console.log("EDIT")
                            }}> 
                            <Text fontSize="sm" fontWeight="bold">Edit</Text>
                          </Button> 
                        </Flex>
                      </>
                    )
                  }
                </>
              )
            }
          </>
        )
      }
      {
        (job.status == "waiting confirmation" && canReview) && (
          <>
            {
              (user.role == "worker") ? (
                <>
                  <Flex>
                    <ConfirmButton action="Tolak" second={true} isLoading={isLoading}
                      isOpen={isConfirm2Open} setIsOpen={setIsConfirm2Open}
                      onClick={() => {
                        // TODO: Set job to "hiring" again
                        console.log("REJECT")
                      }} />
                    <ConfirmButton action="Konfirmasi" isLoading={isLoading}
                      isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
                      onClick={() => {
                        // TODO: Set job to "on progress"
                        console.log("CONFIRM")
                      }} />
                  </Flex>
                </>
              ) : (
                <ConfirmButton action="Selesai" isDisabled={true} />
              )
            }
          </>
        )
      }
      {
        (job.status == "on progress" && canReview) && (
          <>
            {
              (user.role == "worker") ? (
                <>
                  <ConfirmButton action="Selesai" isLoading={isLoading}
                    isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
                    onClick={() => {
                      // TODO: Set job status to "in review"
                      console.log("DONE")
                    }} />
                </>
              ) : (
                <ConfirmButton action="Selesai" isDisabled={true} />
              )
            }
          </>
        )
      }
      {
        (job.status == "in review" && canReview) && (
          <>
            {
              (user.role == "worker") ? (
                <>
                  {
                    canReview && (
                      <Button pl="10" pr="10" borderRadius="50" bgColor="#FF8450" isDisabled>
                        <Text fontSize="sm" fontWeight="bold">Review</Text>
                      </Button>
                    )
                  }
                </>
              ) : (
                <>
                  <Flex>
                    <ConfirmButton  action="Tolak" second={true} isLoading={isLoading}
                      isOpen={isConfirm2Open} setIsOpen={setIsConfirm2Open}
                      onClick={() => {
                        // TODO: Set job status back to "on progress"
                        console.log("UN-APPROVE")
                      }} />
                    <ConfirmButton  action="Terima" isLoading={isLoading}
                      isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
                      onClick={() => {
                        // TODO: Set job status to "done"
                        console.log("APPROVE")
                      }} />
                  </Flex>
                </>
              )
            }
          </>
        )
      }
      {
        (job.status == "done" && canReview) && (
          <>
            <ReviewForm isOpen={isOpen} onClose={onClose} job={job} />
            <Button pl="10" pr="10" borderRadius="50" bgColor="#FF8450" 
              onClick={() => onOpen()}>
              <Text fontSize="sm" fontWeight="bold">Review</Text>
            </Button> 
          </>
        )
      }
    </>
  )
}
