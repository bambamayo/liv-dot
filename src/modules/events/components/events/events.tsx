import { useSuspenseQuery } from "@tanstack/react-query";
import { getEventOptions } from "../../lib/events.queries";
import Event from "../event/event";

export default function Events() {
    const { data } = useSuspenseQuery(getEventOptions);

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-30">
            {data.map((event) => (
                <Event key={event.id} event={event} />
            ))}
        </div>
    );
}
