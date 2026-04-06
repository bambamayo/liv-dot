export const EVENT_STATES = {
    DRAFT: "draft",
    SCHEDULED: "scheduled",
    READY_FOR_STREAMING: "ready_for_streaming",
    LIVE: "live",
    COMPLETED: "completed",
    REPLAY_AVAILABLE: "replay_available",
} as const;

export type EventState = (typeof EVENT_STATES)[keyof typeof EVENT_STATES];

export interface Event {
    id: string;
    state: EventState;
    title: string;
    date: string;
    requirementsComplete: boolean;
}

export interface IUpdateEventPayload {
    eventId: string;
    updatedEvent: Event;
}
