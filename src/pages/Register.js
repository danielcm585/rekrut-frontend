import React, { useState } from "react";

import { Navbar } from "../components";
import { RegisterPage0, RegisterPage1, RegisterPage2, RegisterPage3, RegisterPage4 } from "../components/register";

export default function Register() {
  const [ role, setRole ] = useState();
  const [ page, setPage ] = useState(0);

  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();
  const [ confPassword, setConfPassword ] = useState();

  const [ name, setName ] = useState();
  const [ phone, setPhone ] = useState();
  const [ bank, setBank ] = useState();

  const [ category, setCategory ] = useState();

  const postRequest = () => {
    // TODO: Post request to API 
    return {
      success: true
    }
  };

  return (
    <>
      <Navbar />
      {
        (page == 0) && <RegisterPage0 setRole={setRole} setPage={setPage} />
      }
      {
        (page == 1) && <RegisterPage1 role={role} setPage={setPage}
          email={email} setEmail={setEmail}
          password={password} setPassword={setPassword}
          confPassword={confPassword} setConfPassword={setConfPassword} />
      }
      {
        (page == 2) && <RegisterPage2 role={role} setPage={setPage}
          name={name} setName={setName}
          phone={phone} setPhone={setPhone}
          bank={bank} setBank={setBank} />
      }
      {
        (page == 3) && <RegisterPage3 role={role} setPage={setPage} 
          category={category} setCategory={setCategory} />
      }
      {
        (page == 4) && <RegisterPage4 role={role} setPage={setPage}
          postRequest={postRequest} />
      }
    </>
  );
}
