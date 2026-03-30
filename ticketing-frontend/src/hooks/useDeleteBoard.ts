import {useMutation} from "@tanstack/react-query";
import axios from "axios";

export default function useDeleteBoard() {
    return useMutation({
        mutationFn: async (id: number) => {
            const response = await axios.delete(`/api/ticketing/boards/${id}`)
            return response.data
        }
    })
}