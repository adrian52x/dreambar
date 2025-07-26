import { PriceCard } from "./PriceCard";
import menuData from "../data/menuData.json";
import { File, Cake } from "lucide-react";
import { Separator } from "./ui/separator";

interface TabContentProps {
    activeTab: 'bar' | 'photo';
}

export function TabContent({ activeTab }: TabContentProps) {
    switch (activeTab) {
        case 'bar':
            return (
                <>
                    <div className="max-w-7xl mx-auto mt-8 px-4">
                        <div className="shadow-md shadow-sky-500/50 text-sky-100 rounded-lg p-2 mb-2 font-semibold text-sm md:text-base text-center">
                            <div>Transportul în orașul Chișinău este gratuit!</div>
                            <Separator className="bg-sky-500 my-2"/>
                            <div>Orice meniu selectat poate veni cu o ofertă specială dacă alegi și Cabina Foto!</div>
                        </div>
                    </div>
                    {menuData.menus.map((menuCategory, categoryIndex) => (
                        <div key={categoryIndex} className="p-4 mt-8 w-full max-w-7xl mx-auto px-4 rounded-xl">
                            <h2 className="text-lg md:text-xl font-bold text-white flex items-center rounded-xl w-fit py-2 px-3 shadow-md shadow-sky-500/50">
                                {menuCategory.cake ?
                                    <Cake className="mr-2" /> : <File className="mr-2" />}
                                {menuCategory.category}    
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-white min-h-[200px]">
                                {menuCategory.packages.map((menuPackage, packageIndex) => (
                                    <PriceCard
                                        key={packageIndex}
                                        title={menuPackage.title}
                                        totalCocktails={menuPackage.totalCocktails}
                                        priceMDL={menuPackage.priceMDL}
                                        priceEUR={menuPackage.priceEUR}
                                        cake={menuCategory.cake}
                                        cocktails={menuPackage.cocktails}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </>
            );
        case 'photo':
            return (
                <div className="mt-8 max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">Cabina Foto Servicii</h2>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                        <p className="text-lg mb-4">test</p>
                        {/* <ul className="space-y-2">
                            <li>• Professional photo booth</li>
                            <li>• Custom backgrounds and props</li>
                            <li>• Instant photo prints</li>
                            <li>• Social media sharing</li>
                        </ul> */}
                    </div>
                </div>
            );
        default:
            return null;
    }
}
