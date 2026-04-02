import { useSuspenseQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useNavigate, useParams } from "@tanstack/react-router";
import { getEventByIdOptions } from "../../lib/events.queries";
import { EventTag } from "../event/event-tag";
import { formatDate } from "@/utils/helpers";
import { getEventNextStep } from "../../lib/events.helpers";
import { useUpdateEvent } from "../../lib/events.mutations";
import { EVENT_STATES, type EventState } from "../../types/events.types";
import { Button } from "@/ui/button/button";
import WarningIcon from "@/icons/warning";
import Card from "@/ui/card/card";
import ArrowLeftIcon from "@/icons/arrow-left";

export default function EventDetails() {
    const params = useParams({ from: "/_layout/events/$eventId" });
    const navigate = useNavigate();
    const { data } = useSuspenseQuery(getEventByIdOptions(params.eventId));

    const { mutate: updateEvent } = useUpdateEvent();

    if (!data) {
        return <div>Event not found</div>;
    }

    const nextStep = getEventNextStep(data.state);

    const handleEventUpdate = (eventId: string, eventState: EventState) => {
        const updatedEvent = { ...data, state: eventState };
        updateEvent(
            { eventId, updatedEvent },
            {
                onSuccess: () => {
                    toast.success("Event updated successfully");
                },
                onError: (error) => {
                    toast.error(error.message ?? "Event update failed");
                },
            }
        );
    };

    const handleCanGoLive = (eventId: string) => {
        const updatedEvent = { ...data, canGoLive: true };
        updateEvent(
            { eventId, updatedEvent },
            {
                onSuccess: () => {
                    toast.success("Event ready for live streaming");
                },
                onError: (error) => {
                    toast.error(error.message ?? "Event update failed");
                },
            }
        );
    };

    return (
        <div>
            <div className="mb-8">
                <Button
                    variant="can-hover"
                    className="gap-4"
                    onClick={() => navigate({ to: "/events" })}
                >
                    <ArrowLeftIcon /> Back to Events
                </Button>
            </div>
            <Card className="w-600 mx-auto">
                <div className="inline-flex items-center gap-x-8">
                    <h2 className="font-semibold text-16">{data.title}</h2>
                    <EventTag state={data.state} />
                </div>
                <div className="mt-12">
                    <span>{formatDate(data.date)}</span>
                </div>

                {nextStep ? (
                    <div className="mt-30">
                        <Button
                            onClick={() =>
                                handleEventUpdate(data.id, nextStep.state)
                            }
                            disabled={
                                nextStep.state === EVENT_STATES.LIVE &&
                                !data.canGoLive
                            }
                        >
                            Move event to {nextStep.label}
                        </Button>
                    </div>
                ) : null}

                {nextStep &&
                nextStep.state === EVENT_STATES.LIVE &&
                !data.canGoLive ? (
                    <div className="py-30 mt-30 border-t  border-t-border">
                        <h4 className="font-bold text-center ">
                            Live Step Checklists
                        </h4>
                        <div className="flex items-center justify-center max-w-full mt-4 text-red-700 gap-2">
                            <WarningIcon />
                            <p className=" font-bold text-red-700">
                                Please complete the following requirements to
                                continue
                            </p>
                        </div>

                        <ul className="mt-20 flex justify-center text-text/90 flex-col gap-4 text-center mb-20">
                            <li>Production crew assigned</li>
                            <li>Streaming ingest configured</li>
                            <li>ticket pricing configured</li>
                        </ul>
                        <Button onClick={() => handleCanGoLive(data.id)}>
                            Checklist Completed
                        </Button>
                    </div>
                ) : null}
            </Card>
        </div>
    );
}
