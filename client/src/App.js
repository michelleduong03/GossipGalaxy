import React, { useState, useEffect } from "react";
import "./App.css";
//useState and useEffect from react module, useState- creates variable state message
// useEffect to call API when component mounts
import ChatComponent from "./components/chat";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  // calling the API using "fetch" and setting response to msg state variable

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App

