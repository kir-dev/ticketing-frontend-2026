import { LayoutDashboard } from "lucide-react";

export default function Navbar() {
    return (
        <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
            <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5 text-primary" />
                <span className="font-semibold text-lg tracking-tight">Ticketing</span>
            </div>
        </header>
    )
}