import {useMutation} from "@tanstack/react-query";
import axios from "axios";

export default function useEditBoard() {
    return useMutation({
        mutationFn: async (data: {id: number, title: string}) => {
            const response = await axios.patch(`/api/ticketing/boards/${data.id}`, {
                title: data.title
            })
            return response.data
        }
    })
}