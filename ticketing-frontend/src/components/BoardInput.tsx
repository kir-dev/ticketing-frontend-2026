import useAddBoard from "@/hooks/useAddBoard";
import {useQueryClient} from "@tanstack/react-query";
import {useForm} from "react-hook-form";

interface AddBoardProp {
    title: string
}

export default function BoardInput() {
    const addBoard = useAddBoard()
    const queryClient = useQueryClient();
    const {register, handleSubmit, reset} = useForm<AddBoardProp>()

    const onSubmit = handleSubmit((values) => {
        addBoard.mutateAsync(values.title).then(() => {
            queryClient.invalidateQueries({queryKey: ["boards"]})
        })
        reset()
    })

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    className="border-black border-2"
                    {...register("title")}
                />
                <button type="submit">
                    {addBoard.isPending ? "Loading..." : "Add"}
                </button>
            </form>
        </div>
    )
}