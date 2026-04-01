import { cn } from "@/lib/cn";
import { ClassValue } from "clsx";
import Link from "next/link";

export default function Navbar() {
    const links = [
        { name: "Rules", href: "/rules" },
        { name: "About", href: "/about" },
        { name: "Info", href: "/info" },
        { name: "Archive", href: "/archive" },
    ];

    const linkStyle: ClassValue =
        "px-2 py-1 rounded-md transition-colors hover:bg-theme-foreground";

    return (
        <nav>
            <div className="flex gap-2 bg-theme p-2 items-center">
                <Link href="/" className={cn(linkStyle)}>
                    MBMT
                </Link>
                {links.map(({ href, name }) => (
                    <Link
                        key={href}
                        href={href}
                        className={cn(linkStyle, "text-sm")}
                    >
                        {name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
