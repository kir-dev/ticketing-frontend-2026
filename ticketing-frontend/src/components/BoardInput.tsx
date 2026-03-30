import useAddBoard from "@/hooks/useAddBoard";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface AddBoardProp {
    title: string;
}

export default function BoardInput() {
    const addBoard = useAddBoard();
    const queryClient = useQueryClient();
    const { register, handleSubmit, reset } = useForm<AddBoardProp>();

    const onSubmit = handleSubmit((values) => {
        addBoard.mutateAsync(values.title).then(() => {
            queryClient.invalidateQueries({ queryKey: ["boards"] });
        });
        reset();
    });

    return (
        <Card className="shadow-sm">
            <CardHeader className="pb-3">
                <CardTitle className="text-base">New Board</CardTitle>
                <CardDescription>Give your board a name to get started</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="flex gap-2">
                    <div className="flex-1 flex flex-col gap-1.5">
                        <Label htmlFor="board-title" className="sr-only">Board title</Label>
                        <Input
                            id="board-title"
                            placeholder="e.g. Sprint Planning, Bug Tracker..."
                            {...register("title")}
                        />
                    </div>
                    <Button type="submit" disabled={addBoard.isPending} className="shrink-0">
                        {addBoard.isPending ? (
                            <Spinner />
                        ) : (
                            <>
                                <Plus className="w-4 h-4 mr-1" />
                                Add
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
