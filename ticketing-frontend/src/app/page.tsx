'use client'

import { BoardItem } from "@/components/BoardItem";
import { Board } from "@/types/boards";
import axios from "axios";
import { useEffect, useState } from "react";

const backendURL = "/api/ticketing"

export default function Home() {
  const [boards, setBoards] = useState<Board[]>([])
  const [inputValue, setInputValue] = useState<string>("")

  const onAdd = () => {
    axios.post('/api/ticketing/boards', {
      title: inputValue
    }).then(() => {
      setInputValue("")
      console.log()
    })
  }

  const getBoards = () => {
    axios.get<Board[]>(`/api/ticketing/boards`).then((res) => {
      console.log(res.data)
      setBoards(res.data)
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
      </div>
      <div>
        {boards.map((board) => 
          <BoardItem key={board.id} board={board} />
        )}
      </div>
    </div>
  );
}
