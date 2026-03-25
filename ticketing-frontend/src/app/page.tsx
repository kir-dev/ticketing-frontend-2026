'use client'

import axios from "axios";
import { useState } from "react";

const backendURL = "/api/ticketing"

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("")

  const onAdd = () => {
    axios.post('/api/ticketing/boards', {
      title: inputValue
    }).then((res) => {
      setInputValue("")
      console.log(res.data)
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
