import React from "react"

import { Paragraph } from "."

import { ListItem, OrderedList } from "@chakra-ui/react"

export default function List({ data, depth }) {
  if (data == null) return <></>
  return (
    <>
      <OrderedList>
        {
          data.map((section, idx) => {
            return (
              <ListItem key={idx} mt="2">
                <Paragraph data={section} depth={depth} />
              </ListItem>
            )
          })
        }
      </OrderedList>
    </>
  )
}
