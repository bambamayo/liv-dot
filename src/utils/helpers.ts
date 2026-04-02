import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { format } from "date-fns";

export function cn(...args: ClassValue[]) {
    return twMerge(clsx(args));
}

export function formatDate(date: string, dateFormat?: string) {
    return format(new Date(date), dateFormat ?? "eee do MMMM, yyyy");
}

export function removeTypeUnderscore(str: string) {
    return str.replace(/_/g, " ");
}
