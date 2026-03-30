import {useState} from "react";
import useAddBoard from "@/hooks/useAddBoard";
import {useQueryClient} from "@tanstack/react-query";

const backendURL = "/api/ticketing/boards"

export default function BoardInput() {
    const addBoard = useAddBoard()
    const [inputValue, setInputValue] = useState<string>("")
    const queryClient = useQueryClient();

    const onAdd = () => {
        addBoard.mutateAsync(inputValue).then(() => {
            queryClient.invalidateQueries({queryKey: ["boards"]})
        }).then(() =>{
            setInputValue("")
        })
    }

    return(
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border-black border-2"
            />
            <button onClick={onAdd}>
                {addBoard.isPending ? "Loading..." : "Add"}
            </button>
        </div>
    )
}