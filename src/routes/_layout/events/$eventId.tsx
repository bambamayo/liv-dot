import EventDetails from "@/modules/events/components/event-details/event-details";
import { getEventByIdOptions } from "@/modules/events/lib/events.queries";
import { createFileRoute } from "@tanstack/react-router";

const title = "Event Details";

export const Route = createFileRoute("/_layout/events/$eventId")({
    staticData: {
        navTitle: title,
    },
    component: EventDetails,
    loader: ({ context: { queryClient }, params }) =>
        queryClient.ensureQueryData(getEventByIdOptions(params.eventId)),
    head: ({ params }) => ({
        meta: [{ title: `${title} - ${params.eventId}` }],
    }),
});
