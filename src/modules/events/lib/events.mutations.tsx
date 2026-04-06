import { useMutation } from "@tanstack/react-query";
import { updateEvent } from "../services/events.services";
import type { Event, IUpdateEventPayload } from "../types/events.types";

export function useUpdateEvent() {
    return useMutation({
        mutationFn: (payload: IUpdateEventPayload) => updateEvent(payload),
        onMutate: ({ eventId, updatedEvent }, context) => {
            const eventQueryKey = ["events", eventId];
            const eventsQueryKey = ["events"];

            const previousEvent =
                context.client.getQueryData<Event>(eventQueryKey);
            const previousEvents =
                context.client.getQueryData<Event[]>(eventsQueryKey);

            context.client.setQueryData(eventQueryKey, updatedEvent);
            context.client.setQueryData<Event[]>(eventsQueryKey, (events) =>
                events?.map((event) =>
                    event.id === eventId ? updatedEvent : event
                )
            );

            return { eventId, previousEvent, previousEvents };
        },
        onError: (_error, _variables, rollback, context) => {
            if (!rollback) {
                return;
            }

            context.client.setQueryData(
                ["events", rollback.eventId],
                rollback.previousEvent
            );
            context.client.setQueryData(["events"], rollback.previousEvents);
        },
        onSettled: (_data, _error, { eventId }, _rollback, context) => {
            // Revalidating both queries keeps the cache aligned with the source of truth.
            // We should revisit this strategy as the number of users and mutations grows,
            // because unconditional invalidation after every update may become expensive.
            context.client.invalidateQueries({
                queryKey: ["events", eventId],
            });
            context.client.invalidateQueries({
                queryKey: ["events"],
            });
        },
    });
}
