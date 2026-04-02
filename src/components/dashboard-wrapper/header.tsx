import { useMatches } from "@tanstack/react-router";

function hasNavTitle(staticData: unknown): staticData is {
    navTitle: string;
} {
    return (
        typeof staticData === "object" &&
        staticData !== null &&
        "navTitle" in staticData &&
        typeof staticData.navTitle === "string"
    );
}

export default function Header() {
    const matches = useMatches();

    const navTitle =
        matches.map((m) => m.staticData).find(hasNavTitle)?.navTitle ?? "";

    return (
        <header className="h-56 border-b border-b-border grid place-items-center shrink-0 sticky top-0 z-2 bg-white">
            <h1 className="font-semibold">{navTitle}</h1>
        </header>
    );
}
