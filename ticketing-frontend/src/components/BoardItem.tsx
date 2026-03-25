import { Board } from "@/types/board";

interface BoardItemProps {
  board: Board
}

export default function BoardItem (props: BoardItemProps) {
    return(
      <div className="rounded-lg p-4 bg-slate-500 mt-5">{props.board.title}</div>
    )
}