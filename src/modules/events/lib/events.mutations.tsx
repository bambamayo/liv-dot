import { useMutation } from "@tanstack/react-query";
import { updateEvent } from "../services/events.services";
import type { IUpdateEventPayload } from "../types/events.types";

export function useUpdateEvent() {
    return useMutation({
        mutationFn: (payload: IUpdateEventPayload) => updateEvent(payload),
        onMutate: (newEvent, context) => {
            const previousEvent = context.client.getQueryData([
                "events",
                newEvent.eventId,
            ]);

            if (previousEvent) {
                context.client.setQueryData(
                    ["events", newEvent.eventId],
                    newEvent.updatedEvent
                );
            }
        },
    });
}
