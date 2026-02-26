import { WhatsApp } from "@/icons/WhatsApp";
import { openDreambarWhatsApp } from "@/lib/whatsapp";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
    { label: "Despre noi", path: "/despre-noi" },
    { label: "Servicii",   path: "/servicii" },
    { label: "Oferte",     path: "/oferte" },
    { label: "Recenzii",   path: "/recenzii" },
];

export function Navbar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);

    const activeLabel = navItems.find(i => i.path === pathname)?.label ?? "Meniu";

    function handleNav(path: string) {
        setOpen(false);
        navigate(path);
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">

            {/* ── Desktop pill (sm+) ── */}
            <div className="hidden sm:flex gap-2 px-4 py-2 rounded-full bg-neutral-950/80 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,220,220,0.15)]">
                {navItems.map(({ label, path }) => {
                    const active = pathname === path;
                    return (
                        <button
                            key={path}
                            onClick={() => handleNav(path)}
                            className={`font-outfit px-4 py-1.5 rounded-full text-sm tracking-widest uppercase transition-all duration-300
                                ${active
                                    ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/60 shadow-[0_0_12px_rgba(0,220,220,0.3)]"
                                    : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent hover:border-cyan-400/20"
                                }`}
                        >
                            {label}
                        </button>
                    );
                })}
            </div>

            {/* ── Mobile pill (< sm) ── */}
            <div className="sm:hidden flex flex-col items-center w-[calc(100%-2rem)]">
                {/* Toggle button */}
                <button
                    onClick={() => setOpen(o => !o)}
                    className="w-full flex items-center justify-between px-5 py-2.5 rounded-full bg-neutral-950/80 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,220,220,0.15)]"
                >
                    <span className="font-outfit text-xs tracking-widest uppercase text-white/70">
                        {activeLabel}
                    </span>
                    {/* Hamburger / X */}
                    <span className="flex flex-col gap-[5px] w-5">
                        <span className={`block h-[2px] bg-cyan-400 rounded transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`block h-[2px] bg-cyan-400 rounded transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
                        <span className={`block h-[2px] bg-cyan-400 rounded transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </span>
                </button>

                {/* Dropdown */}
                {open && (
                    <div className="mt-2 w-full flex flex-col gap-1 px-2 py-2 rounded-2xl bg-neutral-950/90 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_24px_rgba(0,220,220,0.12)]">
                        {navItems.map(({ label, path }) => {
                            const active = pathname === path;
                            return (
                                <button
                                    key={path}
                                    onClick={() => handleNav(path)}
                                    className={`font-outfit w-full px-4 py-2.5 rounded-xl text-xs tracking-widest uppercase transition-all duration-200 text-left
                                        ${active
                                            ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                                            : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
                                        }`}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

                        {/* Floating WhatsApp Button */}
                        <button
                            onClick={openDreambarWhatsApp}
                            className="fixed bottom-6 right-6 z-50 sm:bg-green-500 sm:p-2 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
                            aria-label="Contact us on WhatsApp"
                        >
                            <WhatsApp size={36} />
                        </button>

        </nav>
    );
}
