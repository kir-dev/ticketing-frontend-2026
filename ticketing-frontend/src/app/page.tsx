'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import { Board } from "@/types/board";
import BoardItem from "@/components/BoardItem";
import BoardInput from "@/components/BoardInput";

const backendURL = "/api/ticketing/boards"

export default function Home() {
  const [boards, setBoards] = useState<Board[]>([])

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
        <BoardInput getBoards={getBoards} />
        <div className="overflow-auto">
          {boards.map((board) => (
              <BoardItem board={board} key={board.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
