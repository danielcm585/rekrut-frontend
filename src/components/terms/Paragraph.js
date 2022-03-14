import { Flex } from "@chakra-ui/react"
import React from "react"

import { List } from "."

export default function Paragraph({ data, depth }) {
  if (data == null) return <></>
  return (
    <>
      {
        data.map((section, idx) => {
          if (!Array.isArray(section)) return <Flex mt="2">{section}</Flex>
          return <List key={idx} data={section} depth={depth+1} />
        })
      }
    </>
  )
}
