import { Board } from "@/types/board";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useEditBoard from "@/hooks/useEditBoard";
import useDeleteBoard from "@/hooks/useDeleteBoard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil, Trash2, Check, X } from "lucide-react";

interface BoardItemProps {
    board: Board;
}

export default function BoardItem({ board }: BoardItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editInput, setEditInput] = useState(board.title);
    const queryClient = useQueryClient();
    const boardEdit = useEditBoard();
    const boardDelete = useDeleteBoard();

    const handleRefresh = () => {
        queryClient.invalidateQueries({ queryKey: ["boards"] });
    };

    const handleSave = () => {
        boardEdit.mutateAsync({ id: board.id, title: editInput }).then(handleRefresh);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditInput(board.title);
        setIsEditing(false);
    };

    const handleDelete = () => {
        boardDelete.mutateAsync(board.id).then(handleRefresh);
    };

    return (
        <Card className="transition-all hover:shadow-sm group">
            <CardContent className="flex items-center gap-3 py-3 px-4">
                <div className="w-2 h-2 rounded-full bg-primary/40 shrink-0" />

                {isEditing ? (
                    <Input
                        value={editInput}
                        onChange={(e) => setEditInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handleSave();
                            if (e.key === "Escape") handleCancel();
                        }}
                        className="flex-1 h-8"
                        autoFocus
                    />
                ) : (
                    <span className="flex-1 font-medium text-sm">{board.title}</span>
                )}

                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {isEditing ? (
                        <>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={handleSave}
                                className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50"
                                disabled={boardEdit.isPending}
                            >
                                <Check className="w-4 h-4" />
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={handleCancel}
                                className="h-8 w-8"
                            >
                                <X className="w-4 h-4" />
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => setIsEditing(true)}
                                className="h-8 w-8"
                            >
                                <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                onClick={handleDelete}
                                className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                                disabled={boardDelete.isPending}
                            >
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
