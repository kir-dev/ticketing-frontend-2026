'use client'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import App from "@/app/app";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

export default function Home() {
    return (
        <QueryClientProvider client={queryClient}>
            <App/>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
}
