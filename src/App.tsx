import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlowButton } from "./components/GlowButton";
import { WhatsApp } from "./icons";
import { openDreambarWhatsApp } from "./lib/whatsapp";

const images = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/galerie/front${n}.jpeg`);

// Row 1: 3 cards
const row1Config = [
    { src: images[0], tilt: "rotate-[-6deg]", heightPct: "h-[20vh]", widthPct: "w-[12vw] min-w-[90px] max-w-[200px]" },
    { src: images[1], tilt: "rotate-[2deg]",  heightPct: "h-[24vh]", widthPct: "w-[14vw] min-w-[105px] max-w-[220px]" },
    { src: images[2], tilt: "rotate-[-3deg]", heightPct: "h-[21vh]", widthPct: "w-[13vw] min-w-[95px] max-w-[205px]" },
];

// Row 2: 4 cards
const row2Config = [
    { src: images[3], tilt: "rotate-[5deg]",  heightPct: "h-[19vh]", widthPct: "w-[11vw] min-w-[82px] max-w-[185px]" },
    { src: images[4], tilt: "rotate-[-4deg]", heightPct: "h-[22vh]", widthPct: "w-[13vw] min-w-[97px] max-w-[210px]" },
    { src: images[5], tilt: "rotate-[3deg]",  heightPct: "h-[21vh]", widthPct: "w-[12vw] min-w-[90px] max-w-[205px]" },
    // { src: images[6], tilt: "rotate-[-5deg]", heightPct: "h-[19vh]", widthPct: "w-[11vw] min-w-[84px] max-w-[190px]" },
];

function App() {
    const [expanded, setExpanded] = useState(false);
    const [flying, setFlying]     = useState(false);
    const navigate = useNavigate();

    const handleNavClick = (path: string) => {
        setFlying(true);
        setTimeout(() => navigate(path), 480);
    };

    return (
        <div className="cyber-grid-bg h-screen overflow-hidden flex flex-col items-center justify-center gap-[2vh] px-2">

            {/* Row 1 — 3 cards */}
            <div className="flex items-end justify-center gap-[1.5vw]">
                {row1Config.map(({ src, tilt, heightPct, widthPct }) => (
                    <div
                        key={src}
                        className={`${tilt} ${heightPct} ${widthPct} shrink-0 rounded-[16px] overflow-hidden border border-cyan-400/50 shadow-[0_0_14px_rgba(0,220,220,0.25)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-[0_0_28px_rgba(0,220,220,0.5)]`}
                    >
                        <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                ))}
            </div>

            {/* Row 2 — 4 cards */}
            <div className="flex items-end justify-center gap-[1.2vw]">
                {row2Config.map(({ src, tilt, heightPct, widthPct }) => (
                    <div
                        key={src}
                        className={`${tilt} ${heightPct} ${widthPct} shrink-0 rounded-[16px] overflow-hidden border border-cyan-400/50 shadow-[0_0_14px_rgba(0,220,220,0.25)] transition-transform duration-300 hover:scale-[1.06] hover:shadow-[0_0_28px_rgba(0,220,220,0.5)]`}
                    >
                        <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                ))}
            </div>

            {/* CTA button */}
            <GlowButton
                onClick={() => setExpanded(true)}
                size="md"
                className={`transition-all duration-500 ${expanded ? "-translate-y-10 opacity-0 pointer-events-none scale-95" : "opacity-100"}`}
            >
                Apasă aici
            </GlowButton>

            {/* Bottom section — text fades out, nav buttons fade in */}
            <div className="relative w-full max-w-[min(90vw,540px)] flex flex-col items-center">

                {/* Text block */}
                <div className={`flex flex-col items-start w-full transition-all duration-500 ${expanded ? "opacity-0 -translate-y-3 pointer-events-none absolute" : "opacity-100 translate-y-0"}`}>
                    <h1 className="font-rubik text-white font-semibold leading-tight tracking-tight uppercase text-[clamp(1.5rem,5vw,3rem)]">
                        Dream Bar
                    </h1>
                    <h1 className="pl-20 font-rubik text-white font-semibold leading-tight tracking-tight uppercase text-[clamp(1.5rem,5vw,3rem)]">
                        Snapstorm Booth
                    </h1>
                    <p className="font-outfit w-full text-center text-white font-light text-[clamp(0.7rem,1.8vw,1.2rem)] mt-[0.5vh]">
                        Sute de mirese fericite ne-au ales deja.<br />
                        Ce spui dacă următoarea nuntă perfectă va fi a ta?
                    </p>
                </div>

                {/* Nav buttons */}
                <div className={`flex flex-col items-center gap-[1.2vh] w-full transition-all duration-500 ${expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none absolute"} ${flying ? "!opacity-0 !-translate-y-[38vh] !scale-75" : ""}`}>
                    {[
                        { label: "Despre noi", path: "/despre-noi" },
                        { label: "Servicii",   path: "/servicii" },
                        { label: "Oferte",     path: "/oferte" },
                        { label: "Recenzii",   path: "/recenzii" },
                    ].map(({ label, path }) => (
                        <GlowButton key={label} size="sm" onClick={() => handleNavClick(path)}>
                            {label}
                        </GlowButton>
                    ))}
                </div>

            </div>

            {/* Floating WhatsApp Button */}
            <button
                onClick={openDreambarWhatsApp}
                className="fixed bottom-6 right-6 z-50 sm:bg-green-500 sm:p-2 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
                aria-label="Contact us on WhatsApp"
            >
                <WhatsApp size={36} />
            </button>

        </div>
    );
}

export default App;
