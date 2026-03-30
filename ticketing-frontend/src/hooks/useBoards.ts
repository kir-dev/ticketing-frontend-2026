import axios from "axios";
import {Board} from "@/types/board";
import {useQuery} from "@tanstack/react-query";

const backendURL = "/api/ticketing/boards"

export function useBoards() {
    return useQuery<Board[]>({
        queryKey: ["boards"],
        queryFn: async () => {
            const response = await axios.get<Board[]>(backendURL)
            return response.data
        }
    })
}