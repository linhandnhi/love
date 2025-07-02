'use client';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Bell ,SearchIcon } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
    const pathname = usePathname();
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Movies & Shows', href: '/movies&shows' },
        { name: 'Support', href: '/support' },
        { name: 'Subscriptions', href: '/subscriptions' },
    ];

    return (
        <header className="w-full bg-transparent ">
            <div className="container mx-auto flex justify-between items-center py-6">
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg dark:text-white">StreamVibe</span>
                </div>

                <nav className="hidden border-2 border-[#262626]  md:flex bg-[#f3f3f3] dark:bg-[#141414] gap-1 px-2 py-2 rounded-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`rounded-sm px-2 p-1 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-[#262626] ${
                                pathname === link.href ? 'bg-gray-300 dark:bg-[#262626]' : ''
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="flex space-x-2 items-center">
                    <Button variant="ghost" size="icon">
                        <SearchIcon />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Bell />
                    </Button>
                </div>
            </div>
        </header>
    );
}
