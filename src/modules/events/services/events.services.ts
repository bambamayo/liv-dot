import { EVENTS } from "../mockData";
import type { IUpdateEventPayload } from "../types/events.types";

export function getEvents() {
    return Promise.resolve(EVENTS);
}

export function getEventById(eventId: string) {
    return Promise.resolve(EVENTS.find((event) => event.id === eventId));
}

export function updateEvent(payload: IUpdateEventPayload) {
    const eventIndex = EVENTS.findIndex(
        (event) => payload.eventId === event.id
    );
    if (eventIndex !== -1) {
        EVENTS[eventIndex] = { ...EVENTS[eventIndex], ...payload.updatedEvent };
    }
    return Promise.resolve(EVENTS[eventIndex]);
}
