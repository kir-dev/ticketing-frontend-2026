import { Board } from "@/types/boards"

export function BoardItem({ board }: { board: Board }) {
    return (
        <div 
            className="mt-2 bg-slate-500 rounded-2xl p-4"
        >
            {board.title}
        </div>
    )
}