'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0)

  console.log("render")

  return (
    <div className="min-h-screen bg-white flex flex-col flex-1 items-center justify-center">
      <button 
        className="flex flex-row font-sans text-3xl text-black bg-slate-400 rounded-full p-20 justify-center items-center hover:scale-105"
        onClick={() => setCounter(counter + 1)}
      >
        <Image src={"/Kir-Dev.png"} width={200} height={200} alt="Kir-Dev" className="mr-4"/>
        {counter}++++
      </button>
    </div>
  );
}
