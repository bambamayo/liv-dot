import Events from "@/modules/events/components/events/events";
import { getEventOptions } from "@/modules/events/lib/events.queries";
import { createFileRoute } from "@tanstack/react-router";

const title = "Events";

export const Route = createFileRoute("/_layout/events/")({
    staticData: {
        navTitle: title,
    },
    component: Events,
    loader: ({ context: { queryClient } }) =>
        queryClient.ensureQueryData(getEventOptions),
    head: () => ({
        meta: [{ title: title }],
    }),
});
