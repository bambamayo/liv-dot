import { cn } from "@/utils/helpers";
import type { PropsWithChildren } from "react";

interface CardProps {
    className?: string;
}

export default function Card({
    className,
    children,
}: PropsWithChildren<CardProps>) {
    return (
        <div
            className={cn(
                "p-16 border border-border bg-white rounded-md shadow-xs",
                className
            )}
        >
            {children}
        </div>
    );
}
