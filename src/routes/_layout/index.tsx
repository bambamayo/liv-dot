import { getEventOptions } from "@/modules/events/lib/events.queries";
import DashboardStats from "@/modules/overview/components/dashboard-stats/dashboard-stats";
import { createFileRoute } from "@tanstack/react-router";

const title = "Overview";

export const Route = createFileRoute("/_layout/")({
    staticData: {
        navTitle: title,
    },
    loader: ({ context: { queryClient } }) =>
        queryClient.ensureQueryData(getEventOptions),
    component: DashboardStats,
    head: () => ({
        meta: [{ title: title }],
    }),
});
