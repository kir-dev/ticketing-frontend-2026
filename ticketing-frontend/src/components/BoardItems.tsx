import { Board } from "@/types/board";
import BoardItem from "./BoardItem";

interface BoardItemsProps {
  boards: Board[],
  getData: () => void
}

export default function BoardItems (props: BoardItemsProps) {
    return(
        <div className="overflow-auto">
          {props.boards.map((board) => (
            <BoardItem key={board.id} board={board} getData={props.getData} />
          ))}
        </div>
    )
}