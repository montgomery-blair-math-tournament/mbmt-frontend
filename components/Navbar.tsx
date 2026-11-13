import { cn } from "@/lib/cn";
import Link from "next/link";

export default function Navbar() {
    const links = [
        { name: "About", href: "/about", order: 0 },
        { name: "Archive", href: "/archive", order: 3 },
        { name: "Info", href: "/info", order: 2 },
        { name: "Rules", href: "/rules", order: 1 },
        { name: "Register", href: "/register", order: 10000, right: true },
    ];

    const linkStyle = cn(
        "select-none transition-all duration-300 bg-linear-to-r from-current to-current bg-no-repeat bg-bottom bg-size-[0%_2px] hover:bg-size-[100%_2px] ease-out",
    );

    return (
        <nav className="sticky top-0 z-50">
            <div
                className={cn(
                    "flex gap-1 md:gap-2 w-full p-2 md:p-3 transition-all bg-theme duration-250 text-white items-center",
                )}
            >
                <Link
                    href="/"
                    className={cn(linkStyle, "py-0.5 px-1.5 md:px-2 text-lg")}
                >
                    MBMT
                </Link>
                {[...links]
                    .sort((a, b) => a.order - b.order)
                    .map(({ href, name, right }) => (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                linkStyle,
                                "p-1.5 md:px-2 md:py-1 text-md",
                                { "ml-auto": right },
                            )}
                        >
                            {name}
                        </Link>
                    ))}
            </div>
        </nav>
    );
}
