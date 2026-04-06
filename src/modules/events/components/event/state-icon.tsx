import type { ComponentType } from "react";
import { EVENT_STATES, type EventState } from "../../types/events.types";

interface StateIconProps {
    state: EventState;
}

function DraftIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
            aria-hidden="true"
        >
            <path d="M227.31,73.37l-44.68-44.68a16,16,0,0,0-22.63,0L86.06,102.63a8,8,0,0,0-2.11,3.79l-12,44a8,8,0,0,0,9.82,9.82l44-12a8,8,0,0,0,3.79-2.11L203.31,96A16,16,0,0,0,227.31,73.37ZM120.6,133.4l-29.05,7.92,7.92-29.05L165.66,46.06,186,66.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
        </svg>
    );
}

function ScheduledIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
            aria-hidden="true"
        >
            <path d="M176,104a8,8,0,0,1-8,8H144v40a16,16,0,0,1-32,0V112H88a8,8,0,0,1-5.66-13.66l40-40a8,8,0,0,1,11.32,0l40,40A8,8,0,0,1,176,104Zm56,24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
        </svg>
    );
}

function ReadyForStreamingIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
            aria-hidden="true"
        >
            <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm45.25-61.25a8,8,0,0,1,11.31,0,64,64,0,0,1,0,90.5,8,8,0,0,1-11.31-11.31,48,48,0,0,0,0-67.88A8,8,0,0,1,173.25,82.75Zm-90.5,0a8,8,0,0,1,0,11.31,48,48,0,0,0,0,67.88,8,8,0,0,1-11.31,11.31,64,64,0,0,1,0-90.5A8,8,0,0,1,82.75,82.75ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
        </svg>
    );
}

function LiveIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
            aria-hidden="true"
        >
            <path d="M128,152a24,24,0,1,1,24-24A24,24,0,0,1,128,152Zm36.77-60.77a8,8,0,0,1,11.31,0,52,52,0,0,1,0,73.54,8,8,0,0,1-11.31-11.31,36,36,0,0,0,0-50.92A8,8,0,0,1,164.77,91.23Zm-73.54,0a8,8,0,0,1,0,11.31,36,36,0,0,0,0,50.92,8,8,0,0,1-11.31,11.31,52,52,0,0,1,0-73.54A8,8,0,0,1,91.23,91.23ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
        </svg>
    );
}

function CompletedIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
            aria-hidden="true"
        >
            <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
        </svg>
    );
}

function ReplayAvailableIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 256 256"
            aria-hidden="true"
        >
            <path d="M104,88a8,8,0,0,1,12.12-6.86l56,32a8,8,0,0,1,0,13.72l-56,32A8,8,0,0,1,104,152ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
        </svg>
    );
}

export default function StateIcon({ state }: StateIconProps) {
    let Icon: ComponentType;
    switch (state) {
        case EVENT_STATES.DRAFT:
            Icon = DraftIcon;
            break;
        case EVENT_STATES.SCHEDULED:
            Icon = ScheduledIcon;
            break;
        case EVENT_STATES.READY_FOR_STREAMING:
            Icon = ReadyForStreamingIcon;
            break;
        case EVENT_STATES.LIVE:
            Icon = LiveIcon;
            break;
        case EVENT_STATES.COMPLETED:
            Icon = CompletedIcon;
            break;
        case EVENT_STATES.REPLAY_AVAILABLE:
            Icon = ReplayAvailableIcon;
            break;
    }
    return <Icon />;
}
