import { Link } from "@tanstack/react-router";
import type { Event } from "../../types/events.types";
import { formatDate } from "@/utils/helpers";
import { EventTag } from "./event-tag";
import Card from "@/ui/card/card";

interface EventProps {
    event: Event;
}

export default function Event({ event }: EventProps) {
    return (
        <Card>
            <Link
                to={`/events/$eventId`}
                params={{ eventId: event.id }}
                className="flex flex-col h-full gap-y-4"
            >
                <h3 className="font-semibold">{event.title}</h3>
                <p className="text-textSec">{formatDate(event.date)}</p>
                <EventTag state={event.state} />
            </Link>
        </Card>
    );
}
