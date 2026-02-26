import { PageLayout } from "../components/PageLayout";
import comboPackages from "../data/comboPackages.json";

function ComboCard({ pkg }: { pkg: typeof comboPackages[number] }) {
    const cabina = pkg.cabinaDuration ?? "tot evenimentul";
    const bar = pkg.barDuration ?? "tot evenimentul";

    return (
        <div className="flex flex-col gap-3 rounded-2xl border border-cyan-400/20 bg-neutral-950/70 px-5 py-4">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span>📸</span>
                    <span className="font-outfit text-white/70 text-xs uppercase tracking-widest">Cabina foto</span>
                    <span className="font-outfit text-white/90 text-sm font-semibold ml-auto">{cabina}</span>
                </div>
                <div className="h-px bg-white/20" />
                <div className="flex items-center gap-2">
                    <span>🍹</span>
                    <span className="font-outfit text-white/70 text-xs uppercase tracking-widest">Bar mobil</span>
                    <span className="font-outfit text-white/90 text-sm font-semibold ml-auto text-right">{pkg.totalCocktails} cocktailuri · {bar}</span>
                </div>
            </div>
            <div className="h-px bg-white/20" />
            <div className="flex items-center justify-between">
                <span className="font-outfit text-white/40 text-xs">Preț total</span>
                <span className="font-rubik text-cyan-300 text-xl font-bold">{pkg.priceEUR} €</span>
            </div>
        </div>
    );
}

export function OfertePage() {
    return (
        <PageLayout>
            <div className="max-w-2xl w-full flex flex-col gap-10 px-2">

                {/* Special bonus offer */}
                <div className="relative rounded-2xl border border-cyan-400/40 bg-cyan-400/5 px-6 py-5 flex flex-col gap-3 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent pointer-events-none" />
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="font-rubik text-cyan-300 font-bold text-sm uppercase tracking-widest">Ofertă specială</span>
                        <span className="ml-auto text-lg">🎁</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm font-outfit">
                        <span className="bg-white/10 text-white/90 rounded-lg px-3 py-1 font-semibold">Bar Mobil</span>
                        <span className="text-white/40">+</span>
                        <span className="bg-white/10 text-white/90 rounded-lg px-3 py-1 font-semibold">Tort din Shoturi</span>
                        <span className="text-white/40">=</span>
                        <span className="bg-cyan-400/20 text-cyan-300 border border-cyan-400/30 rounded-lg px-3 py-1 font-bold">Cabina foto GRATIS</span>
                    </div>
                    <p className="font-outfit text-white/70 text-sm leading-relaxed">
                        La alegerea oricărui meniu din secțiunea Bar Mobil și Tort din shoturi, beneficiați de rezervarea gratuită a cabinei foto pentru minim 2 ore.
                    </p>
                </div>

                {/* Combo packages */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <h2 className="font-rubik text-white text-xl font-bold">Pachete Combo</h2>
                        <p className="font-outfit text-white/60 text-sm">Cabina foto + Bar mobil la un preț avantajos</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {comboPackages.map((pkg) => (
                            <ComboCard key={pkg.title} pkg={pkg} />
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

