import React from "react";
import "./global.css";
import { Header } from "./components/Header/Header";
import { TicketForm } from "./components/Form/Form"

function App() {
  return (
    <>
      <Header />
      <TicketForm />
    </>
  );
}

export default App;
