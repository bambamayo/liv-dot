import { getEventOptions } from "@/modules/events/lib/events.queries";
import { EVENT_STATES } from "@/modules/events/types/events.types";
import Card from "@/ui/card/card";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function DashboardStats() {
    const { data } = useSuspenseQuery(getEventOptions);

    const liveEventCount = data.filter(
        (event) => event.state === EVENT_STATES.LIVE
    ).length;

    const totalEventCount = data.length;

    const completedEvents = data.filter(
        (event) => event.state === EVENT_STATES.COMPLETED
    ).length;

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-30">
            <Card className="flex flex-col gap-4">
                <span className="font-medium text-textSec">Live Events</span>
                <span className="font-bold text-20">{liveEventCount}</span>
            </Card>
            <Card className="flex flex-col gap-4">
                <span className="font-medium text-textSec">Total Events</span>
                <span className="font-bold text-20">{totalEventCount}</span>
            </Card>
            <Card className="flex flex-col gap-4">
                <span className="font-medium text-textSec">
                    Completed Events
                </span>
                <span className="font-bold text-20">{completedEvents}</span>
            </Card>
        </div>
    );
}
