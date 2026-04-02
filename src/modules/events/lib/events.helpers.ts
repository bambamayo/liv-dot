import { EVENT_STATES, type EventState } from "../types/events.types";

export const getEventNextStep = (eventState: EventState) => {
    switch (eventState) {
        case EVENT_STATES.DRAFT:
            return {
                state: EVENT_STATES.PUBLISHED,
                label: "Publish",
            };
        case EVENT_STATES.PUBLISHED:
            return {
                state: EVENT_STATES.READY_FOR_STREAMING,
                label: "Ready for Streaming",
            };
        case EVENT_STATES.READY_FOR_STREAMING:
            return {
                state: EVENT_STATES.LIVE,
                label: "Live",
            };
        case EVENT_STATES.LIVE:
            return {
                state: EVENT_STATES.COMPLETED,
                label: "Complete",
            };
        case EVENT_STATES.COMPLETED:
            return {
                state: EVENT_STATES.REPLAY_AVAILABLE,
                label: "Replay Available",
            };
        default:
            return null;
    }
};
