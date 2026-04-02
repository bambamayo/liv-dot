import { removeTypeUnderscore } from "@/utils/helpers";
import { EVENT_STATES, type EventState } from "../../types/events.types";
import StateIcon from "./state-icon";

interface EventTagProps {
    state: EventState;
}

export function EventTag({ state }: EventTagProps) {
    let bgColor = "";
    let color = "";

    switch (state) {
        case EVENT_STATES.DRAFT: {
            bgColor = "#F3F4F6";
            color = "#6B7280";
            break;
        }
        case EVENT_STATES.PUBLISHED: {
            bgColor = "#DBEAFE";
            color = "#1D4ED8";
            break;
        }
        case EVENT_STATES.READY_FOR_STREAMING: {
            bgColor = "#EDE9FE";
            color = "#7C3AED";
            break;
        }
        case EVENT_STATES.LIVE: {
            bgColor = "#FEE2E2";
            color = "#B91C1C";
            break;
        }
        case EVENT_STATES.COMPLETED: {
            bgColor = "#DCFCE7";
            color = "#166534";
            break;
        }
        case EVENT_STATES.REPLAY_AVAILABLE: {
            bgColor = "#FEF3C7";
            color = "#92400E";
            break;
        }
        default: {
            bgColor = "";
            color = "";
        }
    }

    return (
        <span
            className="inline-flex self-start items-center gap-4 rounded-sm py-4 px-8 capitalize text-10 font-semibold"
            style={{ backgroundColor: bgColor, color: color }}
        >
            <StateIcon state={state} />
            {removeTypeUnderscore(state)}
        </span>
    );
}
