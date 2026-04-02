import { cn } from "@/lib/cn";
import { ClassValue } from "clsx";
import Link from "next/link";

export default function Navbar() {
    const links = [
        { name: "Rules", href: "/rules" },
        { name: "About", href: "/about" },
        { name: "Info", href: "/info" },
        { name: "Archive", href: "/archive" },
        { name: "Register", href: "/register", right: true },
    ];

    const linkStyle: ClassValue =
        "select-none rounded-md transition-colors hover:bg-theme-foreground";

    return (
        <nav>
            <div className="flex gap-1 md:gap-2 w-full p-2 md:p-3 bg-theme text-white items-center">
                <Link
                    href="/"
                    className={cn(linkStyle, "py-0.5 px-1.5 md:px-2 text-lg")}
                >
                    MBMT
                </Link>
                {links.map(({ href, name, right }) => (
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
