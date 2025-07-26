import { CocktailsCake, CocktailStraw } from "@/icons";

interface PriceCardProps {
  title: string;
  totalCocktails: number;
  priceMDL: number;
  priceEUR: number;
  cake?: boolean;
  cocktails: Array<{
    name: string;
    portions: number;
  }>;
}

export function PriceCard({ totalCocktails, priceMDL, priceEUR, cocktails, cake }: PriceCardProps) {
    return (
        <div className="flex flex-col border-t-2 border-b-2 border-sky-400 rounded-lg p-6 hover:bg-sky-400/10 transition-colors cursor-pointer bg-white/5 backdrop-blur-sm">
            <div className="flex flex-col items-center mb-4">
                {/* <Martini size={40} className="text-sky-400 mb-2"/> */}
                {cake ? 
                    <CocktailsCake size={70} className="text-sky-400 mb-2" /> 
                    : 
                    <CocktailStraw size={70} className="text-sky-400 mb-2" />
                }
                <div className="text-lg font-bold text-sky-300">{totalCocktails} COCKTAILS</div>
            </div>

            {/* <div className="flex-1 space-y-1 mb-4 overflow-y-auto">
                {cocktails.map((cocktail, index) => (
                    <div key={index} className="flex justify-between items-center text-xs">
                        <span className="text-gray-200 truncate mr-2">{index + 1}. {cocktail.name}</span>
                        <span className="text-sky-300 font-semibold whitespace-nowrap">{cocktail.portions}p</span>
                    </div>
                ))}
            </div> */}

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
    )
}
