import { HeadContent, Outlet } from "@tanstack/react-router";
import Sidenav from "./sidenav";
import Header from "./header";

export default function DashboardWrapper() {
    return (
        <>
            <HeadContent />
            <main className="min-h-vh">
                <div className="flex">
                    <Sidenav />
                    <div className="flex-1 ml-(--sidenav-width) flex flex-col">
                        <Header />
                        <div className="p-16 overflow-y-auto flex-1">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
