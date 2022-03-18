import React, { useEffect, useState } from "react"

import { Navbar } from "../components"
import { ChooseRole, AboutUser, AboutMe, AboutProfile, AboutJob, TermsCondition } from "../components/register"

export default function Register() {
  const [ page, setPage ] = useState(0)
  
  const [ role, setRole ] = useState()

  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()
  const [ confPassword, setConfPassword ] = useState()

  const [ name, setName ] = useState()
  const [ phone, setPhone ] = useState()
  const [ bank, setBank ] = useState()
  const [ website, setWebsite ] = useState()

  const [ category, setCategory ] = useState("-")
  const [ skill, setSkill ] = useState()
  const [ bio, setBio ] = useState()
  const [ profPic, setProfPic ] = useState(null)

  const [ experience, setExperience ] = useState()
  const [ education, setEducation ] = useState()
  const [ award, setAward ] = useState()

  useEffect(() => {
    document.title = "Rekrut.id | Daftar"
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
          bank={bank} setBank={setBank}
          website={website} setWebsite={setWebsite} />
      }
      {
        (page == 3) && <AboutProfile role={role} setPage={setPage}
          category={category} setCategory={setCategory}
          skill={skill} setSkill={setSkill}
          bio={bio} setBio={setBio}
          profPic={profPic} setProfPic={setProfPic} />
      }
      {
        (page == 4) && <AboutJob setPage={setPage} 
          experience={experience} setExperience={setExperience}
          education={education} setEducation={setEducation}
          award={award} setAward={setAward} />
      }
      {
        (page == 5) && <TermsCondition role={role} setPage={setPage}
          email={email} password={password} 
          name={name} phone={phone} bank={bank} website={website} 
          category={category} skill={skill} bio={bio} profPic={profPic}
          experience={experience} education={education} award={award} />
      }
    </>
  )
}
