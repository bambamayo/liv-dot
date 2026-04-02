import type { PropsWithChildren } from "react";
import { cn } from "@/utils/helpers";
import { Button as ButtonPrimitive } from "@base-ui/react/button";

interface ButtonProps extends ButtonPrimitive.Props {
    variant?: "primary" | "can-hover";
    className?: string;
    ref?: React.Ref<HTMLButtonElement>;
}

function Button({
    children,
    variant = "primary",
    className,
    type = "button",
    ref,
    ...props
}: PropsWithChildren<ButtonProps>) {
    return (
        <ButtonPrimitive
            className={cn(
                "border-none outline-none font-inherit font-medium text-text flex items-center justify-center focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed w-full focus-visible:ring-3 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-all duration-150 disabled:pointer-events-none ease rounded-md cursor-pointer",
                variant === "primary" &&
                    "bg-primary text-white h-32 rounded-md px-8 hover:brightness-90 active:scalex-95",
                variant === "can-hover" &&
                    "hover:bg-interactive px-8 h-32 w-auto",
                className
            )}
            ref={ref}
            type={type}
            {...props}
        >
            {children}
        </ButtonPrimitive>
    );
}

export { Button, type ButtonProps };
