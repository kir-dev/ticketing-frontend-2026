'use client'

import axios from "axios";
import { useEffect, useState } from "react";

const backendURL = "/api/ticketing/boards"

type Board = {
  id: number;
  title: string;
  createdAt: string;
}

export default function Home() {
  const [inputValue, setInputValue] = useState<string>("")
  const [boards, setBoards] = useState<Board[]>([])

  const onAdd = () => {
    axios.post(backendURL, {
      title: inputValue
    }).then((res) => {
      setInputValue("")
      getBoards()
      console.log(res.data)
    }).catch((err) => {
      console.error("Error adding board:", err)
    })
  }

  const getBoards = () => {
    axios
        .get<Board[]>(backendURL)
        .then((res) => setBoards(res.data))
        .catch((err) => {
          console.error("Error loading boards:", err)
        })
  }

  useEffect(() => {
    getBoards()
  }, [])

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
        <div className="overflow-auto">
          {boards.map((board) => (
            <div className="rounded-lg p-4 bg-slate-500 mt-5" key={board.id}>{board.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
