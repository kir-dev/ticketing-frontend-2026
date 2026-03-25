import { Board } from "@/types/board";
import BoardItem from "./BoardItem";

export default function BoardItems ({boards}: {boards: Board[]}) {
    return(
        <div className="overflow-auto">
          {boards.map((board) => (
            <BoardItem key={board.id} board={board} />
          ))}
        </div>
    )
}