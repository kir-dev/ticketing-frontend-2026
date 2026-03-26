import {useState} from "react";
import axios from "axios";

interface BoardInputProps {
    getBoards: () => void;
}

const backendURL = "/api/ticketing/boards"

export default function BoardInput(props: BoardInputProps) {
    const { getBoards } = props
    const [inputValue, setInputValue] = useState<string>("")

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

    return(
        <div>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border-black border-2"
            />
            <button onClick={onAdd}>
                Add
            </button>
        </div>
    )
}