import { cn } from "@/lib/cn";
import NextLink from "next/link";

export default function Link({
    className,
    ...props
}: React.ComponentProps<typeof NextLink>) {
    return (
        <NextLink
            className={cn(className, "hover:underline text-link")}
            {...props}
        />
    );
}
