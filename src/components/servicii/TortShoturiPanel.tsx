import menuData from "../../data/cakeShots.json";
import { PriceCard } from "./PriceCard";

const tortPackages = menuData.packages;

const photos = [
    "/images/cakeShots/cakeShots1.jpeg",
    "/images/cakeShots/cakeShots2.jpeg",
    "/images/cakeShots/cakeShots3.jpeg",
];

function PhotoCell({ src, className }: { src: string; className?: string }) {
    return (
        <div className={`relative overflow-hidden rounded-2xl ${className}`}>
            <img
                src={src}
                alt="Tort din shoturi"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        </div>
    );
}

export function TortShoturiPanel() {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-2 text-center">
                <h2 className="font-rubik text-white text-2xl font-bold">Tort din Shoturi</h2>
                <p className="font-outfit text-white/70 text-sm">
                    B52 · Hiroshima · Green Mexican · Dream Shot · Blue Kamikaze
                </p>
            </div>

            {/* 3 equal vertical photos */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 h-72 sm:h-96">
                {photos.map((src, i) => (
                    <PhotoCell key={i} src={src} />
                ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {tortPackages.map((pkg) => (
                    <PriceCard
                        key={pkg.title}
                        label={`${pkg.totalCocktails} shot-uri`}
                        price={pkg.priceEUR}
                    />
                ))}
            </div>
        </div>
    );
}

