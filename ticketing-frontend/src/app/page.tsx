'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import { Board } from "@/types/board";
import BoardItem from "@/components/BoardItem";

const backendURL = "/api/ticketing/boards"

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
    })
  }

  const getBoards = () => {
    axios.get(backendURL).then((res) => setBoards(res.data))
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
        {boards.map((board) => (
            <BoardItem board={board} key={board.id} />
        ))}
      </div>
    </div>
  );
}
