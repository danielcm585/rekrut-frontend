import React from "react"

export default function Currency({ amount }) {
  const parseAmount = (amount) => {
    return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <>
      
    </>
  )
}
