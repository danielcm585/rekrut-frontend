import React, { useState } from "react"

import { ChooseWorker, ConfirmButton } from "."
import { ReviewForm } from "../review"

import { useDisclosure } from "@chakra-ui/react"
import { Button, Flex, Text } from "@chakra-ui/react"

export default function JobButton({ user, job, canReview }) {
  const [ isConfirmOpen, setIsConfirmOpen ] = useState(false)
  const [ isConfirm2Open, setIsConfirm2Open ] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {
        (job.status == "hiring") && (
          <>
            {
              (user.role == "worker") ? (
                <ConfirmButton action="Daftar" isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen} 
                  onClick={() => {
                    // TODO: Send request to api
                    console.log("APPLY")
                  }} />
              ) : (
                <>
                  {
                    canReview && (
                      <>
                        {/* <ChooseWorker job={job} isOpen={isOpen} onClose={onClose} />  */}
                        <Flex>
                          <ConfirmButton action="Hapus" second={true} isOpen={isConfirm2Open} setIsOpen={setIsConfirm2Open}
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
                    <ConfirmButton action="Tolak" second={true} isOpen={isConfirm2Open} setIsOpen={setIsConfirm2Open}
                      onClick={() => {
                        // TODO: Set job to "hiring" again
                        console.log("REJECT")
                      }} />
                    <ConfirmButton action="Konfirmasi" isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
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
                  <ConfirmButton action="Selesai" isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
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
                    <ConfirmButton  action="Tolak" second={true} isOpen={isConfirm2Open} setIsOpen={setIsConfirm2Open}
                      onClick={() => {
                        // TODO: Set job status back to "on progress"
                        console.log("UN-APPROVE")
                      }} />
                    <ConfirmButton  action="Terima" isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
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
