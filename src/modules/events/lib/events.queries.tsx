import { queryOptions } from "@tanstack/react-query";
import { getEventById, getEvents } from "../services/events.services";

export const getEventOptions = queryOptions({
    queryKey: ["events"],
    queryFn: getEvents,
});

export const getEventByIdOptions = (eventId: string) =>
    queryOptions({
        queryKey: ["events", eventId],
        queryFn: () => getEventById(eventId),
    });
