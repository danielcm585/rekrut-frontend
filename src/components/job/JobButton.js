import React from "react"

import { ChooseWorker, ConfirmButton } from "."
import { ReviewForm } from "../review"

import { Button, Text } from "@chakra-ui/react"

export default function JobButton({ user, job, isOpen, onOpen, onClose, isConfirmOpen, setIsConfirmOpen }) {
  // FIXME: Can we review?
  const canReview = true

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
                        {
                          (job.registrants != null && job.registrants.length > 0) ? (
                            <>
                              <ChooseWorker job={job} isOpen={isOpen} onClose={onClose} /> 
                              <Button pl="10" pr="10" borderRadius="50" bgColor="#FF8450"
                                onClick={() => onOpen()}> {/*TODO: Add onClick func */}
                                <Text fontSize="sm" fontWeight="bold">Pilih</Text>
                              </Button> 
                            </>
                          ) : (
                            <Button pl="10" pr="10" borderRadius="50" bgColor="#FF8450" isDisabled>
                              <Text fontSize="sm" fontWeight="bold">Pilih</Text>
                            </Button> 
                          )
                        }
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
        (job.statur == "waiting confirmation" && canReview) && (
          <>
            {
              (user.role == "worker") ? (
                <ConfirmButton action="Konfirmasi" isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
                  onClick={() => {
                    // TODO: Send request to api
                    console.log("CONFIRM")
                  }} />
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
                      // TODO: Send request to api
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
                <ConfirmButton  action="Selesai" isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
                  onClick={() => {
                    // TODO: Send request to api
                    console.log("APPROVE")
                  }} />
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
