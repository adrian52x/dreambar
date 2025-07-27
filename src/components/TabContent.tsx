import { PriceCard } from "./PriceCard";
import menuData from "../data/menuData.json";
import cabinaFotoData from "../data/cabinaFotoPackages.json";
import comboData from "../data/comboPackages.json";
import { File, Cake } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { CabinaFotoCard } from "./CabinaFotoCard";
import { ExtraServiceGuestBook } from "./ExtraServiceGuestBook";
import { BarAndCabinaCard } from "./BarAndCabinaCard";
interface TabContentProps {
    activeTab: 'bar' | 'photo' | 'both';
}

export function TabContent({ activeTab }: TabContentProps) {
    switch (activeTab) {
        case 'bar':
            return (
                <>
                    <Link to="/cocktails">
                        <Button variant="outline" className="border-sky-400 bg-transparent bg-white/5 hover:bg-sky-400/20 text-white text-lg hover:text-white mt-4 ">
                            Cocktailurile noastre
                        </Button>
                    </Link>
                    {menuData.menus.map((menuCategory, idx) => (
                        <div key={idx} className="p-4 mt-8 w-full max-w-7xl mx-auto px-4 rounded-xl">
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
                <>
                    <ExtraServiceGuestBook />
                    <div className="p-4 mt-8 w-full max-w-6xl mx-auto px-4 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-white min-h-[200px]">
                            {cabinaFotoData.map((pkg) => (
                                <CabinaFotoCard
                                    key={pkg.duration}
                                    pkg={pkg}
                                />
                            ))}
                        </div>
                    </div>
                </>
            );
        case 'both':
            return (
                <>
                    <div className="p-4 mt-8 w-full max-w-6xl mx-auto px-4 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 text-white min-h-[200px]">
                            {comboData.map((pkg, idx) => (
                                <BarAndCabinaCard
                                    key={idx}
                                    pkg={pkg}
                                />
                            ))}
                        </div>
                    </div>
                </>
            );    
        default:
            return null;
    }
}
