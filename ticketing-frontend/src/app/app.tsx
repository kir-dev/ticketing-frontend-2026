import BoardInput from "@/components/BoardInput";
import BoardItem from "@/components/BoardItem";
import { useBoards } from "@/hooks/useBoards";
import { Spinner } from "@/components/ui/spinner";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard } from "lucide-react";

export default function App() {
    const { data, isFetching } = useBoards();

    return (
        <div className="min-h-screen bg-muted/30">
            <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-2">
                    <LayoutDashboard className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-lg tracking-tight">Ticketing</span>
                </div>
            </header>

            <main className="max-w-2xl mx-auto px-4 py-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold tracking-tight">Boards</h1>
                    <p className="text-muted-foreground mt-1">Create and manage your project boards</p>
                </div>

                <BoardInput />

                <div className="mt-10">
                    <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                            Your Boards
                        </h2>
                        {data && (
                            <Badge variant="secondary">{data.length}</Badge>
                        )}
                    </div>

                    {isFetching ? (
                        <div className="flex justify-center py-16">
                            <Spinner />
                        </div>
                    ) : data?.length === 0 ? (
                        <div className="text-center py-16 text-muted-foreground">
                            <LayoutDashboard className="w-10 h-10 mx-auto mb-3 opacity-30" />
                            <p className="text-sm">No boards yet. Create one above!</p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            {data?.map((board) => (
                                <BoardItem board={board} key={board.id} />
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
