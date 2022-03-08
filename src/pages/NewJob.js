import React, { useState } from "react"

import { Navbar } from "../components"
import { Page1, Page2 } from "../components/newJob"

export default function NewJob() {
  const [ page, setPage ] = useState(1)
  
  const [ title, setTitle ] = useState()
  const [ category, setCategory] = useState("-")
  const [ location, setLocation ] = useState()
  const [ type, setType ] = useState("-")
  const [ salary, setSalary ] = useState()

  const [ responsibility, setResponsibility ] = useState()
  const [ qualifications, setQualifications ] = useState()

  return (
    <>
      <Navbar register={true} />
      {
        (page == 1) && <Page1 setPage={setPage}
          title={title} setTitle={setTitle}
          category={category} setCategory={setCategory}
          location={location} setLocation={setLocation}
          type={type} setType={setType}
          salary={salary} setSalary={setSalary} />
      }
      {
        (page == 2) && <Page2 setPage={setPage}
          title={title} setTitle={setTitle}
          category={category} setCategory={setCategory}
          location={location} setLocation={setLocation}
          type={type} setType={setType}
          salary={salary} setSalary={setSalary}
          responsibility={responsibility} setResponsibility={setResponsibility}
          qualifications={qualifications} setQualifications={setQualifications} />
      }
    </>
  )
}
