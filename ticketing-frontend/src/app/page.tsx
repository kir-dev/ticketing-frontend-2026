'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import { Board } from "@/types/board";
import BoardItem from "@/components/BoardItem";
import BoardInput from "@/components/BoardInput";

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
        <BoardInput inputValue={inputValue} setInputValue={setInputValue} onAdd={onAdd} />
        <div className="overflow-auto">
          {boards.map((board) => (
              <BoardItem board={board} getData={getBoards} key={board.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
