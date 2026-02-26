import champagneTower from "../../data/champagneTower.json";
import { PriceCard } from "./PriceCard";

const photos = [
    "/images/tower/tower1.jpeg",
    "/images/tower/tower2.jpeg",
    "/images/tower/tower3.jpeg",
];

function PhotoCell({ src, className }: { src: string; className?: string }) {
    return (
        <div className={`relative overflow-hidden rounded-2xl ${className}`}>
            <img
                src={src}
                alt="Turnul din șampanie"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>
    );
}

export function ChampagneTowerPanel() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="font-rubik text-white text-2xl font-bold">Turnul din Șampanie</h2>
                {/* <p className="font-outfit text-white/50 text-sm">
                    Prețuri per număr de pahare · include șampanie și serviciu de turnare
                </p> */}
            </div>

            {/* Bento photo grid */}
            <div className="grid grid-cols-3 grid-rows-2 gap-2 sm:gap-3 h-80 sm:h-[500px]">
                {/* Top-left: wide */}
                <PhotoCell src={photos[0]} className="col-start-1 col-span-2 row-start-1 row-span-1" />
                {/* Bottom-left: wide */}
                <PhotoCell src={photos[1]} className="col-start-1 col-span-2 row-start-2 row-span-1" />
                {/* Right: tall vertical */}
                <PhotoCell src={photos[2]} className="col-start-3 col-span-1 row-start-1 row-span-2" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {champagneTower.map((pkg) => (
                    <PriceCard
                        key={pkg.glasses}
                        label={`${pkg.glasses} pahare`}
                        price={pkg.priceEUR}
                    />
                ))}
            </div>
        </div>
    );
}
