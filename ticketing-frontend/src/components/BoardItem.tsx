import { Board } from "@/types/board";
import axios from "axios";
import { useState } from "react";

interface BoardItemProps {
  board: Board,
  getBoards: () => void
}

export default function BoardItem (props: BoardItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [editInput, setEditInput] = useState<string>(props.board.title)

  const editBoard = () => {
    axios.patch(`/api/ticketing/boards/${props.board.id}`, {
      title: editInput
    }).then(() => {
      console.log("Edited board with id " + props.board.id + ": " + props.board)
      props.getBoards()
    })
  }

  const deleteBoard = () => {
    axios.delete(`/api/ticketing/boards/${props.board.id}`).then(() => {
      console.log("Deleted board with id " + props.board.id + ": " + props.board)
      props.getData()
    })
  }

  const handleEdit = () => {
    if (isEditing){
      editBoard()
    }
    setIsEditing(!isEditing)
  }

  return(
    <div className="flex rounded-lg p-4 bg-slate-500 mt-5 gap-4">
      {isEditing ? (
        <input value={editInput} onChange={(e) => setEditInput(e.target.value)} className="bg-white max-h-10 rounded-lg border-black border-2" />
      ) : (
        <span>{props.board.title}</span>
      )}
      <div className="ml-auto flex flex-col gap-2">
        <button className="bg-green-500 px-4 rounded-md" onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button className="bg-red-500 px-4 rounded-md" onClick={deleteBoard}>Delete</button>
      </div>
    </div>
  )
}