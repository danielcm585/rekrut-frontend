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
                <ConfirmButton action="Apply" isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen} 
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
                              <ChooseWorker isOpen={isOpen} onClose={onClose} /> 
                              <Button pl="10" pr="10" borderRadius="50" bgColor="#FF8450"
                                onClick={() => onOpen()}> {/*TODO: Add onClick func */}
                                <Text fontSize="sm" fontWeight="bold">Hire</Text>
                              </Button> 
                            </>
                          ) : (
                            <Button pl="10" pr="10" borderRadius="50" bgColor="#FF8450" isDisabled>
                              <Text fontSize="sm" fontWeight="bold">Hire</Text>
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
        (job.status == "hired" && canReview) && (
          <>
            {
              (user.role == "worker") ? (
                <>
                  <ConfirmButton action="Done" isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
                    onClick={() => {
                      // TODO: Send request to api
                      console.log("DONE")
                    }} />
                </>
              ) : (
                <ConfirmButton action="Approve" isDisabled={true} />
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
                <ConfirmButton  action="Approve" isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
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
