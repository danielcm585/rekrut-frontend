import React, { useEffect, useState } from "react"

import { Navbar } from "../components"
import { ChooseRole, AboutUser, AboutMe, AboutProfile, AboutJob, TermsCondition } from "../components/register"

export default function Register() {
  const [ role, setRole ] = useState()
  const [ page, setPage ] = useState(0)

  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()
  const [ confPassword, setConfPassword ] = useState()

  const [ name, setName ] = useState()
  const [ phone, setPhone ] = useState()
  const [ bank, setBank ] = useState()

  const [ bio, setBio ] = useState()
  const [ profPic, setProfPic ] = useState(null)

  const [ category, setCategory ] = useState("-")
  const [ cv, setCv ] = useState(null)

  useEffect(() => {
    document.title = "Rekrut.id | Register"
  }, [])
  
  return (
    <>
      <Navbar register={true} />
      {
        (page == 0) && <ChooseRole setRole={setRole} setPage={setPage} />
      }
      {
        (page == 1) && <AboutUser setPage={setPage}
          email={email} setEmail={setEmail}
          password={password} setPassword={setPassword}
          confPassword={confPassword} setConfPassword={setConfPassword} />
      }
      {
        (page == 2) && <AboutMe role={role} setPage={setPage}
          name={name} setName={setName}
          phone={phone} setPhone={setPhone}
          bank={bank} setBank={setBank} />
      }
      {
        (page == 3) && <AboutProfile role={role} setPage={setPage}
          bio={bio} setBio={setBio}
          profPic={profPic} setProfPic={setProfPic} />
      }
      {
        (page == 4) && <AboutJob role={role} setPage={setPage} 
          category={category} setCategory={setCategory}
          cv={cv} setCv={setCv} />
      }
      {
        (page == 5) && <TermsCondition role={role} setPage={setPage}
          email={email} password={password} name={name}
          phone={phone} bank={bank} bio={bio} category={category} />
      }
    </>
  )
}
