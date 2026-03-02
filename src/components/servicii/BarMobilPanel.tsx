import { useState } from "react";
import menuData from "../../data/barMobil.json";
import { PriceCard } from "./PriceCard";

//remove later cake from bar menu data, for now just filter it out here
const barCategories = menuData.menus.filter((m) => !m.cake);

const drinkTypes = [
    { label: "Cocktails", src: "/images/cocktails/grouped/all_cocktails.jpg" },
    { label: "Mocktails", src: "/images/cocktails/grouped/all_mocktails.jpg" },
    { label: "Shots", src: "/images/cocktails/grouped/all_shots.jpg" },
];

const COCKTAIL_NAMES = new Set(["APEROL SPRITZ", "CANDY LADY", "PORNSTAR MARTINI", "BLUE DREAM", "Angels KISS"]);
const MOCKTAIL_NAMES = new Set(["WILD PASSION (căpșună+ananas)", "EXOTIC LYCHEE (lychee+maracuia)", "LEMOGLOW (lemongrass+maracuia)", "PINK GRAPEFRUIT (zmeură+grapefruit)"]);
const SHOT_NAMES = new Set(["GREEN MEXICAN", "DREAM SHOT", "B52", "BLUE KAMIKAZE"]);

type Cocktail = { name: string; portions: number };
type ActivePkg = { title: string; cocktails: Cocktail[] };

function getDrinkType(name: string): "cocktails" | "mocktails" | "shots" | "other" {
    if (COCKTAIL_NAMES.has(name)) return "cocktails";
    if (MOCKTAIL_NAMES.has(name)) return "mocktails";
    if (SHOT_NAMES.has(name)) return "shots";
    return "other";
}

export function BarMobilPanel() {
    const [activeImage, setActiveImage] = useState<{ label: string; src: string } | null>(null);
    const [activePkg, setActivePkg] = useState<ActivePkg | null>(null);

    return (
        <div className="flex flex-col gap-8 w-full">
            {activePkg && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setActivePkg(null)}
                >
                    <div
                        className="relative max-w-2xl rounded-2xl overflow-hidden bg-neutral-950 border border-cyan-400/20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="px-6 py-4 border-b border-cyan-400/20 flex items-center justify-between">
                            <span className="font-rubik text-white font-semibold">{activePkg.title}</span>
                            <button
                                onClick={() => setActivePkg(null)}
                                className="bg-black/60 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="flex gap-2 px-6 py-5 justify-center">
                            {(["cocktails", "mocktails", "shots"] as const).map((type) => {
                                const items = activePkg.cocktails.filter((c) => getDrinkType(c.name) === type);
                                if (items.length === 0) return null;
                                
                                return (
                                    <div key={type} className="flex flex-col gap-2">
                                        <span className="font-outfit text-white/50 text-xs tracking-widest uppercase mx-auto">{type}</span>
                                        <div className="flex flex-col gap-2">
                                            {items.map((c) => (
                                                <div key={c.name} className="flex flex-col items-center rounded-md bg-cyan-400/[0.14] px-3 py-3 gap-1 shadow-xl text-center">
                                                    <span className="font-outfit text-white/90 text-xs font-medium leading-tight">{c.name}</span>
                                                    <span className="font-rubik text-cyan-300 text-sm font-bold">{c.portions}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
            {activeImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setActiveImage(null)}
                >
                    <div
                        className="relative max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={activeImage.src} alt={activeImage.label} className="w-full h-auto" />
                        <button
                            onClick={() => setActiveImage(null)}
                            className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                        >
                            ✕
                        </button>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
                            <span className="font-rubik text-white font-semibold">{activeImage.label}</span>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex flex-col gap-2 text-center">
                <h2 className="font-rubik text-white text-2xl font-bold">Bar Mobil <span className="text-2xl">🍹</span></h2>
                {/* <p className="font-outfit text-white/80 text-sm bg-neutral-950/80 px-2 py-2 rounded-lg border border-cyan-400/30">
                    Costul transportului este de 350 lei în Chișinău, iar pentru locațiile din afara orașului se adaugă 5 lei pentru fiecare kilometru parcurs.
                </p> */}
            </div>

            {/* Menu image buttons */}
            <div className="grid grid-cols-3 gap-3">
                {drinkTypes.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => setActiveImage(item)}
                        className="flex flex-col items-center gap-2 rounded-2xl border border-cyan-400/20 bg-neutral-950/70 px-4 py-4 hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all duration-200 group"
                    >
                        <span className="font-outfit text-white uppercase font-medium group-hover:text-cyan-300 transition-colors">{item.label}</span>
                    </button>
                ))}
            </div>

            {barCategories.map((cat) => (
                <div key={cat.category} className="flex flex-col gap-3">
                    <p className="font-outfit text-white/80 text-sm tracking-widest uppercase">
                        {cat.category}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 ">
                        {cat.packages.map((pkg) => (
                            <PriceCard
                                key={pkg.title}
                                label={`${pkg.totalCocktails} cocktailuri`}
                                sublabel={pkg.barDuration ? `${pkg.barDuration} ore` : "tot evenimentul"}
                                price={pkg.priceEUR}
                                onClick={() => setActivePkg({ title: pkg.title, cocktails: pkg.cocktails })}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
