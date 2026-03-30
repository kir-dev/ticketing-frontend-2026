import useAddBoard from "@/hooks/useAddBoard";
import {useQueryClient} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Spinner} from "@/components/ui/spinner";
import {Input} from "@/components/ui/input";

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
            <form onSubmit={onSubmit} className="flex flex-row">
                <Input
                    className="border-black border-2"
                    {...register("title")}
                />
                {addBoard.isPending ? (
                    <Spinner></Spinner>
                ) : (
                    <Button variant="destructive" size="lg" type="submit">
                        Add
                    </Button>
                )}
            </form>
        </div>
    )
}