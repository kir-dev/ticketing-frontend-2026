import { Board } from "@/types/board";

export default function BoardItem ({board}: {board: Board}) {
    return(
      <div className="rounded-lg p-4 bg-slate-500 mt-5">{board.title}</div>
    )
}