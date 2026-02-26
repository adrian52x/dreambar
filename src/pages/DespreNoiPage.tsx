import { PageLayout } from "../components/PageLayout";

const floatingImages = [
    { src: "/images/cakeShots/cakeShots1.jpeg",  style: { top: "2%",  left: "-12%",  rotate: "-7deg", width: "180px" } },
    { src: "/images/galerie/galerie1.jpg",        style: { top: "0%",  right: "-10%", rotate: "5deg",  width: "160px" } },
    { src: "/images/guest-book/book1.jpg",        style: { bottom: "4%", left: "-10%", rotate: "-7deg",  width: "150px" } },
    { src: "/images/tower/tower1.jpeg",           style: { bottom: "2%", right: "-12%", rotate: "5deg", width: "170px" } },
    { src: "/images/cabinafoto/cabinafoto2.jpg",  style: { top: "38%", left: "-12%", rotate: "4deg",  width: "155px" } },
    { src: "/images/tower/tower2.jpeg",           style: { top: "35%", right: "-13%", rotate: "-6deg", width: "160px" } },
];

export function DespreNoiPage() {
    return (
        <PageLayout>
            <div className="relative max-w-2xl w-full px-2">

                {/* Floating chaotic images behind — desktop only */}
                {floatingImages.map((img, i) => (
                    <div
                        key={i}
                        className="hidden sm:block absolute rounded-2xl overflow-hidden shadow-2xl border border-white/10 opacity-30 pointer-events-none"
                        style={{ ...img.style, transform: `rotate(${img.style.rotate})`, position: "absolute" }}
                    >
                        <img src={img.src} alt="" className="w-full h-full object-cover" style={{ width: img.style.width, aspectRatio: "3/4" }} />
                    </div>
                ))}

                {/* Content on top */}
                <div className="relative z-10 flex flex-col gap-10 text-center py-8">

                    {/* Intro stat block */}
                    <div className="flex flex-col gap-3">
                        <p className="font-outfit text-white text-lg sm:text-xl leading-relaxed">
                            De peste <span className="text-cyan-300 font-semibold">4 ani</span> suntem parte din cele mai frumoase povești 🤍
                        </p>
                        <p className="font-outfit text-white/70 text-base sm:text-lg leading-relaxed">
                            Sute de evenimente organizate impecabil.
                        </p>
                        <p className="font-outfit text-white/70 text-base sm:text-lg leading-relaxed">
                            Sute de miri 🤵🏻👰🏼‍♀️ care ne-au ales și ne-au recomandat mai departe.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-16 h-px bg-cyan-400/40 mx-auto" />

                    {/* Trust line */}
                    <p className="font-rubik text-white/90 text-xl sm:text-2xl font-bold leading-snug">
                        Am construit mai mult decât un serviciu —<br className="hidden sm:block" /> am construit{" "}
                        <span className="text-cyan-300">încredere</span>.
                    </p>

                    {/* Services block */}
                    <div className="flex flex-col gap-4">
                        <div className="rounded-2xl border border-cyan-400/20 bg-neutral-950/70 backdrop-blur-sm px-6 py-4 text-left">
                            <p className="font-outfit text-white/80 text-base leading-relaxed">
                                <span className="text-cyan-300 font-semibold">Cabina foto</span> surprinde emoția autentică în imagini de calitate premium.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-cyan-400/20 bg-neutral-950/70 backdrop-blur-sm px-6 py-4 text-left">
                            <p className="font-outfit text-white/80 text-base leading-relaxed">
                                <span className="text-cyan-300 font-semibold">Barul mobil și tortul din shoturi</span> transformă fiecare moment într-un spectacol memorabil.
                            </p>
                        </div>
                    </div>

                    {/* Differentiator */}
                    <p className="font-outfit text-white/60 text-sm sm:text-base leading-relaxed">
                        Ne diferențiază <span className="text-white/90">atenția la detalii</span>, organizarea fără compromis și dorința reală de a pătrunde în inima fiecărui eveniment.
                    </p>

                    {/* Closing statement */}
                    <div className="rounded-2xl border border-cyan-400/20 bg-neutral-950/70 backdrop-blur-sm px-6 py-4 text-left">
                        <p className="font-outfit text-white/80 text-base leading-relaxed">
                            Pentru că atunci când ne alegeți pe noi, alegeți{" "}
                            <span className="text-cyan-300 font-semibold">siguranță</span>,{" "}
                            <span className="text-cyan-300 font-semibold">experiență</span> și un rezultat care se vede și se simte. 🫶🏻
                        </p>
                    </div>

                </div>
            </div>
        </PageLayout>
    );
}

