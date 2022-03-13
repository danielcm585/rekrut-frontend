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

  const sendRequest = (link, successMessage, method, json, setIsConfirmOpen) => {
    setIsLoading(true)
    fetch(link, {
      method: method,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(json)
    })
    .then(resp => resp.json())
    .then(json => {
      if (json.statusCode >= 400) throw new Error(json.message)
      setIsLoading(false)
      setIsConfirmOpen(false)
      window.location.reload()
      toast({
        title: successMessage,
        status: "success"
      })
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

  if (user == null) return <></>
  return (
    <>
      {
        (job.status == "HIRING") && (
          <>
            {
              (user.role == "worker") ? (
                <>
                  {
                    (job.registrants.filter(worker => worker._id == user._id).length > 0) ? (
                      <ConfirmButton action="Selesai" isDisabled={true} />
                    ) : (
                      <ConfirmButton action="Daftar" isLoading={isLoading}
                        isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen} 
                        onClick={() => sendRequest(
                          "https://protected-castle-75235.herokuapp.com/worker/apply", 
                          "Pendaftaran anda berhasil", "POST",
                          { job: job._id }, setIsConfirmOpen
                        )} />
                    )
                  }
                </>
              ) : (
                <>
                  {
                    canReview && (
                      <>
                        <Flex>
                          <ConfirmButton action="Hapus" second={true} isLoading={isLoading}
                            isOpen={isConfirm2Open} setIsOpen={setIsConfirm2Open}
                            onClick={() => sendRequest(
                              "https://protected-castle-75235.herokuapp.com/job/"+job._id, 
                              "Pekerjaan berhasil dihapus", "DELETE",
                              { job: job._id }, setIsConfirm2Open
                            )} />
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
        (job.status == "WAITING" && canReview) && (
          <>
            {
              (user.role == "worker") ? (
                <>
                  <Flex>
                    <ConfirmButton action="Tolak" second={true} isLoading={isLoading}
                      isOpen={isConfirm2Open} setIsOpen={setIsConfirm2Open}
                      onClick={() => sendRequest(
                        "https://protected-castle-75235.herokuapp.com/worker/decline", 
                        "Anda telah menolak pekerjaan ini", "POST",
                        { job: job._id }, setIsConfirmOpen
                      )} />
                    <ConfirmButton action="Konfirmasi" isLoading={isLoading}
                      isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
                      onClick={() => sendRequest(
                        "https://protected-castle-75235.herokuapp.com/worker/accept", 
                        "Selamat! Anda berhasil memperoleh pekerjaan ini", "POST",
                        { job: job._id }, setIsConfirm2Open
                      )} />
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
        (job.status == "ONGOING" && canReview) && (
          <>
            {
              (user.role == "worker") ? (
                <>
                  <ConfirmButton action="Selesai" isLoading={isLoading}
                    isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
                    onClick={() => sendRequest(
                      "https://protected-castle-75235.herokuapp.com/worker/finish", 
                      "Selamat! Anda telah menyelesaikan pekerjaan ini. Silakan tunggu persetujuan dari client.", "POST",
                      { job: job._id }, setIsConfirmOpen
                    )} />
                </>
              ) : (
                <ConfirmButton action="Selesai" isDisabled={true} />
              )
            }
          </>
        )
      }
      {
        (job.status == "REVIEWING" && canReview) && (
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
                      onClick={() => sendRequest(
                        "https://protected-castle-75235.herokuapp.com/client/review-bad", 
                        "Anda berhasil menolak hasil pekerjaan. Silakan tunggu revisi dari worker.", "POST",
                        { job: job._id }, setIsConfirm2Open
                      )} />
                    <ConfirmButton  action="Terima" isLoading={isLoading}
                      isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen}
                      onClick={() => sendRequest(
                        "https://protected-castle-75235.herokuapp.com/client/review-good", 
                        "Yey! pekerjaan anda selesai. Silakan beri review terhadap hasil pekerjaan ini.", "POST",
                        { job: job._id }, setIsConfirmOpen
                      )} />
                  </Flex>
                </>
              )
            }
          </>
        )
      }
      {
        (job.status == "DONE" && canReview) && (
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
