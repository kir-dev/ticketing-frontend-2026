import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";

const backendURL = "/api/ticketing/boards"

export default function useAddBoard() {
    return useMutation({
        mutationFn: async (title: string) => {
            const response = await axios.post(backendURL, {
                title: title
            })
            return response.data
        }
    })
}