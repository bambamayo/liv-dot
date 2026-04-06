import { EVENT_STATES, type Event } from "./types/events.types";

export const EVENTS: Event[] = [
    {
        id: "evt_001",
        state: EVENT_STATES.DRAFT,
        title: "Liv Dot Creator Kickoff",
        date: "2026-04-08T10:00:00Z",
        requirementsComplete: false,
    },
    {
        id: "evt_002",
        state: EVENT_STATES.SCHEDULED,
        title: "Spring Product Showcase",
        date: "2026-04-12T15:30:00Z",
        requirementsComplete: false,
    },
    {
        id: "evt_003",
        state: EVENT_STATES.READY_FOR_STREAMING,
        title: "Founders AMA Session",
        date: "2026-04-16T17:00:00Z",
        requirementsComplete: true,
    },
    {
        id: "evt_004",
        state: EVENT_STATES.LIVE,
        title: "Live Community Town Hall",
        date: "2026-04-02T18:00:00Z",
        requirementsComplete: true,
    },
    {
        id: "evt_005",
        state: EVENT_STATES.COMPLETED,
        title: "March Growth Review",
        date: "2026-03-28T13:00:00Z",
        requirementsComplete: true,
    },
    {
        id: "evt_006",
        state: EVENT_STATES.REPLAY_AVAILABLE,
        title: "Platform Onboarding Walkthrough",
        date: "2026-03-20T09:00:00Z",
        requirementsComplete: true,
    },
];
