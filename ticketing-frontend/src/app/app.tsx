import BoardInput from "@/components/BoardInput";
import BoardItem from "@/components/BoardItem";
import {useBoards} from "@/hooks/useBoards";

export default function App () {
    const {data, isFetching} = useBoards()

    return (
        <div className="min-h-screen bg-white text-black flex flex-col items-center">
            <div className="mt-10">
                <BoardInput />
                {isFetching ? "Loading..." : (
                    <div className="overflow-auto">
                        {data?.map((board) => (
                            <BoardItem board={board} key={board.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}