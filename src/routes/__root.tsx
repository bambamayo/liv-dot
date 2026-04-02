import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: () => (
        <>
            <Outlet />
            <ReactQueryDevtools />
            <TanStackRouterDevtools position="bottom-right" />
            <Toaster richColors position="top-right" />
        </>
    ),
    pendingComponent: () => <div>Loading...</div>,
    errorComponent: ({ error }) => <div>Error: {error.message}</div>,
});
