import { Link } from "@tanstack/react-router";
import logo from "@/assets/livdot-logo.svg";
import ChartIcon from "@/icons/chart";
import CalendarIcon from "@/icons/calendar";

export default function Sidenav() {
    const linkClasses =
        "flex items-center gap-8 h-32 font-semibold  px-8 rounded-md hover:bg-interactive [transition:all_150ms_ease] text-text/70 hover:text-text";

    const activeLinkClasses = "bg-interactive !text-text";

    return (
        <aside className="w-(--sidenav-width) bg-white border-r border-r-border h-screen fixed left-0 top-0">
            <div className="h-56 flex items-center justify-center px-8 border-b border-b-border">
                <Link to="/">
                    <img className="h-20" src={logo} alt="liv dot logo" />
                </Link>
            </div>
            <ul className="p-8 flex flex-col gap-y-4">
                <li>
                    <Link
                        to="/"
                        className={linkClasses}
                        activeProps={{ className: activeLinkClasses }}
                    >
                        <ChartIcon />
                        Overview
                    </Link>
                </li>
                <li>
                    <Link
                        to="/events"
                        className={linkClasses}
                        activeProps={{ className: activeLinkClasses }}
                    >
                        <CalendarIcon />
                        Events
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
