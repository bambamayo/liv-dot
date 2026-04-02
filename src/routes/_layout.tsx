import { createFileRoute } from "@tanstack/react-router";
import DashboardWrapper from "../components/dashboard-wrapper/dashboard-wrapper";

export const Route = createFileRoute("/_layout")({
    component: DashboardWrapper,
});
