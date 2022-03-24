import React, { useState } from "react"

import { useToast } from "@chakra-ui/react"
import { InputGroup, Input, Button, FormLabel, Text } from "@chakra-ui/react"

export default function FileUpload({ file, setFile }) {
  const toast = useToast({
    position: "top",
    variant: "solid",
    isClosable: true
  })

  const [ isLoading, setIsLoading ] = useState(false)

  const getBase64 = (file) => {
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const image = reader.result.split(',')[1]
      const form = new FormData()
      form.append("image",image)
      fetch("https://api.imgbb.com/1/upload?key=1f7342009732d86b66bfab298a07677d", {
        method: "POST",
        headers: { },
        body: form
      })
      .then(resp => resp.json())
      .then(json => {
        if (!json.success) throw new Error("Gagal mengunggah foto profil")
        setIsLoading(false)
        setFile(json.data.url)
        toast({
          title: "Berhasil mengunggah foto profil",
          status: "success"
        })
      })
      .catch((err) => {
        setIsLoading(false)
        toast({
          title: err.message,
          status: "error"
        })
      })
    }
    reader.onerror = () => toast({
      title: "Gagal mengubah foto profil",
      status: "error"
    })
  }

  const handleFileChanges = (e) => {
    try {
      if (e.target.files[0].type != "image/jpeg" && e.target.files[0].type != "image/png") throw new Error("Foto profil harus berbentuk jpg atau png")
      if (e.target.files[0].size > 16*1024*1024) throw new Error("Foto profil tidak boleh lebih dari 16 MB")
      setFile(e.target.files[0])
    }
    catch (err) {
      toast({
        title: err.message,
        status: "error"
      })
    }
  }

  return (
    <>
      <FormLabel>
        <Text fontSize="1xl" fontWeight="bold">Foto Profil</Text>
      </FormLabel>
      {/*FIXME: Value of the input */}
      <InputGroup>
        <Input p="1" type="file" variant="unstyled"
          onChange={handleFileChanges} />
        <Button size="sm" borderRadius="50" isLoading={isLoading} onClick={() => {
          setIsLoading(true)
          getBase64(file)
        }}>
          Unggah
        </Button>
      </InputGroup>
    </>
  )
}
