import { cn } from "@/lib/cn";

export default function Main({
    className,
    ...props
}: React.ComponentProps<"main">) {
    return (
        <main
            className={cn(
                "p-8 flex flex-col flex-1 gap-4 w-11/12 md:w-3/4 mx-auto",
                className,
            )}
            {...props}
        />
    );
}
