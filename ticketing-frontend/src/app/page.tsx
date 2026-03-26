'use client'

import axios from "axios";
import { useState } from "react";

const backendURL = "/api/ticketing/boards"

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("")

  const onAdd = () => {
    axios.post(backendURL, {
      title: inputValue
    }).then((res) => {
      setInputValue("")
      console.log(res.data)
    }).catch((err) => {
      console.error("Error adding board:", err)
    })
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center">
      <div className="mt-10">
        <input
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          className="border-black border-2"
        />
        <button onClick={onAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
