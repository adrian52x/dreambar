import platforma360Packages from "../../data/platforma360Packages.json";
import { PriceCard } from "./PriceCard";

const features = [
    "Experiență video 360° spectaculoasă, care atrage toate privirile",
    "Clipuri dinamice și personalizate pentru fiecare invitat",
    "Accesorii premium pentru cadre memorabile",
    "Editare video inclusă",
    "Asistență pe toată durata evenimentului",
    "Transmiterea videoclipurilor în format digital, gata de postat pe rețelele sociale",
];

export function Platforma360() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="font-rubik text-white text-2xl font-bold">Platforma 360°</h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
                {platforma360Packages.map((pkg) => (
                    <PriceCard
                        key={pkg.duration}
                        label={pkg.duration}
                        price={pkg.priceEUR}
                    />
                ))}
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3">
                <p className="font-outfit text-white/60 text-sm uppercase tracking-widest">Ce oferim în aceste pachete</p>
                <div className="flex flex-col gap-2">
                    {features.map((f) => (
                        <div key={f} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.05] px-4 py-3">
                            <span className="text-cyan-400 mt-0.5 shrink-0">✦</span>
                            <span className="font-outfit text-white/70 leading-relaxed">{f}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

