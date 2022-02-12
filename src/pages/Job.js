import React from "react";
import { useParams } from "react-router-dom";

import { Navbar } from "../components";

export default function Job() {
  const { id } = useParams();
  // TODO: Fetch job data from api
  const job = {
    id: 1,
    title: "Backend Engineer",
    desc: "Do backend work in developing our app.",
    category: "Web Developer",
    fee: 5000000,
    company: {
      id: 1,
      name: "BukaPedia",
      photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    registrants: [
      {
        photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        name: "Obiwan Kenobi",
      },
      {
        photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        name: "Anakin Skywalker",
      },
      {
        photo: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        name: "C3PO",
      }
    ],
    chosen: "C3PO"
  };

  return (
    <>
      <Navbar />
    </>
  );
}
