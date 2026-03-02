import cabinaPackages from "../../data/cabinaFoto.json";
import { PriceCard } from "./PriceCard";

const photos = [
    "/images/cabinafoto/cabinafoto1.jpg",
    "/images/cabinafoto/cabinafoto2.jpg",
    "/images/cabinafoto/cabinafoto3.jpg",
    "/images/cabinafoto/cabinafoto4.jpg",
];

const features = [
    "Poze nelimitate imprimate instant",
    "Plicuri elegante pentru fiecare poză",
    "Accesorii amuzante și originale",
    "Personalizare unică pentru fiecare poză",
    "Acces rapid la toate fotografiile prin QR-code",
    "Asistență pe toată durata evenimentului",
    "Poze, GIF-uri, video-uri și boomeranguri",
    "Guest BOOK exclusivist cu sticlă organică",
];

function PhotoCell({ src, className }: { src: string; className?: string }) {
    return (
        <div className={`relative overflow-hidden rounded-2xl ${className}`}>
            <img
                src={src}
                alt="Cabina foto"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>
    );
}

export function CabinaFotoPanel() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="font-rubik text-white text-2xl font-bold">Cabina Foto</h2>
                {/* <p className="font-outfit text-white/50 text-sm">
                    Prețuri per durată · include props, ecran tactil și printare instant
                </p> */}
            </div>

            {/* Bento photo grid */}
            <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-3 h-64 sm:h-[400px]">
                {/* Top-left: wide */}
                <PhotoCell src={photos[0]} className="col-start-1 col-span-2 row-start-1 row-span-1" />
                {/* Bottom-left: small */}
                <PhotoCell src={photos[1]} className="col-start-1 col-span-1 row-start-2 row-span-1" />
                {/* Bottom-middle: small */}
                <PhotoCell src={photos[2]} className="col-start-2 col-span-1 row-start-2 row-span-1" />
                {/* Right: tall vertical */}
                <PhotoCell src={photos[3]} className="col-start-3 col-span-1 row-start-1 row-span-2" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cabinaPackages.map((pkg) => (
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
