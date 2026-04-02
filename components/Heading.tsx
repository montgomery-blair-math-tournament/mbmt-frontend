import { cn } from "@/lib/cn";
import React from "react";

export default function Heading({
    className,
    level = 1,
    ...props
}: {
    level: 1 | 2 | 3;
} & React.ComponentProps<"h1" | "h2" | "h3">) {
    if (level == 3) {
        return (
            <h3
                className={cn("text-xl mt-1 font-bold font-sans", className)}
                {...props}
            />
        );
    } else if (level == 2) {
        return (
            <h2
                className={cn("text-2xl mt-2 font-bold font-sans", className)}
                {...props}
            />
        );
    } else {
        return (
            <h1
                className={cn(
                    "text-4xl mt-4 mb-2 font-bold font-sans",
                    className,
                )}
                {...props}
            />
        );
    }
}
