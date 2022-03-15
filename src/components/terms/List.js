import React from "react"

import { Paragraph } from "."

import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react"

export default function List({ data, depth }) {
  if (data == null) return <></>
  return (
    <>
      {
        (depth%2 == 1) ? (
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
        ) : (
          <UnorderedList>
            {
              data.map((section, idx) => {
                return (
                  <ListItem key={idx} mt="2">
                    <Paragraph data={section} depth={depth} />
                  </ListItem>
                )
              })
            }
          </UnorderedList>
        )
      }
    </>
  )
}
