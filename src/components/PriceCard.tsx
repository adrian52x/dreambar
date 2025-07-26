import { CocktailsCake, CocktailStraw } from "@/icons";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMemo, memo } from "react";

interface PriceCardProps {
  title: string;
  totalCocktails: number;
  priceMDL: number;
  priceEUR: number;
  cake?: boolean;
  cocktails: Array<{
    name: string;
    portions: number | null;
  }>;
}

// Cocktail categorization with colors
const getCocktailCategory = (name: string) => {
  const cocktailName = name.toUpperCase();
  
  if (cocktailName.includes('APEROL SPRITZ') || 
      cocktailName.includes('CANDY LADY') || 
      cocktailName.includes('ANGEL') || 
      cocktailName.includes('BLUE DREAM') || 
      cocktailName.includes('PORNSTAR MARTINI')) {
    return { category: 'COCKTAILS', color: 'bg-red-500/20 text-red-300 border-red-400' };
  }
  
  if (cocktailName.includes('WILD PASSION') || 
      cocktailName.includes('LEMOGLOW') || 
      cocktailName.includes('PINK GRAPEFRUIT') || 
      cocktailName.includes('EXOTIC LYCHEE')) {
    return { category: 'MOCKTAILS', color: 'bg-blue-500/20 text-blue-300 border-blue-400' };
  }
  
  if (cocktailName.includes('B52') || 
      cocktailName.includes('HEROSHIMA') || 
      cocktailName.includes('GREEN MEXICAN') || 
      cocktailName.includes('DREAM SHOT') || 
      cocktailName.includes('BLUE KAMIKAZE')) {
    return { category: 'SHOTS', color: 'bg-orange-500/20 text-orange-300 border-orange-400' };
  }

  return { category: '', color: 'bg-gray-500/20 text-gray-300 border-gray-400' };
};

const PriceCard = memo(function PriceCard({ title, totalCocktails, priceMDL, priceEUR, cocktails, cake }: PriceCardProps) {
    // Memoize the categorized cocktails to avoid recalculation on each render
    const categorizedCocktails = useMemo(() => {
        return cocktails.reduce((acc, cocktail) => {
            const { category } = getCocktailCategory(cocktail.name);
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(cocktail);
            return acc;
        }, {} as Record<string, typeof cocktails>);
    }, [cocktails]);

    // Memoize the cocktail list rendering to improve performance
    const cocktailList = useMemo(() => {
        if (cocktails.length === 0) {
            return (
                <div className="text-center text-gray-400 py-8">
                    Lista de cocktails va fi disponibilă în curând.
                </div>
            );
        }

        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(categorizedCocktails).map(([category, items]) => {
                    const totalPortions = items.reduce((sum, item) => sum + (item.portions ?? 0), 0);
                    return (
                        <div key={category} className="flex flex-col">
                            {totalPortions > 0 && (
                                <h3 className="text-lg font-bold mb-3 text-sky-300 text-center">{category} ({totalPortions})</h3>
                            )}
                            <div className="space-y-2 flex-1">
                            {items.map((cocktail, index) => {
                                const { color } = getCocktailCategory(cocktail.name);
                                return (
                                    <div 
                                        key={`${category}-${index}`}
                                        className={`flex justify-between items-center p-3 rounded-lg border ${color}`}
                                    >
                                        <span className="font-medium text-sm">{cocktail.name}</span>
                                        <span className="font-bold text-sm">{cocktail.portions}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    );
                })}
            </div>
        );
    }, [categorizedCocktails]);

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <div className="flex flex-col border-t-2 border-b-2 border-sky-400 rounded-lg p-6 hover:bg-sky-400/10 transition-colors cursor-pointer bg-white/5 backdrop-blur-sm will-change-transform">
                    <div className="flex flex-col items-center mb-4">
                        {cake ? 
                            <CocktailsCake size={70} className="text-sky-400 mb-2" /> 
                            : 
                            <CocktailStraw size={70} className="text-sky-400 mb-2" />
                        }
                        <div className="text-lg font-bold text-sky-300">{totalCocktails} 
                            {cake ? 
                                " SHOTS" 
                                : 
                                " COCKTAILS"
                            } 
                        </div>
                    </div>

                    <div className="flex justify-center space-x-2 border-t border-sky-400/30 pt-4">
                        <div className="flex items-center justify-center space-x-1">
                            <div className="text-xl font-bold text-white">{priceMDL.toLocaleString()}</div>
                            <div className="text-sm mt-1 text-gray-300">MDL</div>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                            <div className="text-xl font-bold text-white">/ {priceEUR}</div>
                            <div className="text-sm mt-1 text-gray-300">€</div>
                        </div>
                    </div>
                </div>
            </DrawerTrigger>
            
            <DrawerContent className="border-1 bg-neutral-900/95 bg-[radial-gradient(ellipse_80%_80%_at_50%_-30%,rgba(56,189,248,0.3),rgba(255,255,255,0))] backdrop-blur-sm will-change-transform">
                <div className="mx-auto w-full max-w-2xl">
                    <DrawerHeader>
                        <DrawerTitle className="text-center text-sky-400">{title}</DrawerTitle>
                        <DrawerDescription className="text-center text-neutral-400 text-lg">
                            {totalCocktails} {cake ? "shots" : "cocktails"} • {priceMDL.toLocaleString()} MDL / {priceEUR}€
                        </DrawerDescription>
                    </DrawerHeader>
                    
                    <div className="p-4 pb-0 max-h-96 overflow-y-auto">
                        {cocktailList}
                    </div>
                    
                    <DrawerFooter>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
});

export { PriceCard };
