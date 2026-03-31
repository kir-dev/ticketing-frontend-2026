'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <Link href={"/boards"} className="flex mx-auto">
            <Button className="p-10 text-lg">
                Boards
            </Button>
        </Link>
    );
}
