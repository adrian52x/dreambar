import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cocktailsData } from "../data/cocktailsData";

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'COCKTAILS':
      return 'bg-red-500/20 text-red-300 border-red-400';
    case 'MOCKTAILS':
      return 'bg-blue-500/20 text-blue-300 border-blue-400';
    case 'SHOTS':
      return 'bg-orange-500/20 text-orange-300 border-orange-400';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-400';
  }
};

export function CocktailsPage() {
  const groupedCocktails = cocktailsData.reduce((acc, cocktail) => {
    if (!acc[cocktail.category]) {
      acc[cocktail.category] = [];
    }
    acc[cocktail.category].push(cocktail);
    return acc;
  }, {} as Record<string, typeof cocktailsData>);

    return (
        <div className="bg-neutral-900">
            <div className="relative min-h-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <div className="container mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                    <Link 
                        to="/" 
                        className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <ArrowLeft size={24} />
                        <span>Înapoi</span>
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                        Toate <span className="text-sky-400">Cocktailurile</span>
                    </h1>
                    </div>

                    {/* Cocktails Grid */}
                    <div className="space-y-12">
                    {Object.entries(groupedCocktails).map(([category, cocktails]) => (
                        <div key={category}>
                        <h2 className="text-2xl font-bold text-sky-300 mb-6 text-center">
                            {category} ({cocktails.length})
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cocktails.map((cocktail, index) => (
                            <div 
                                key={`${category}-${index}`}
                                className={`rounded-xl border p-4 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 ${getCategoryColor(category)}`}
                            >
                                {/* Large 370x370 Cocktail Image */}
                                <div className="flex justify-center mb-4">
                                <div className="w-[370px] h-[370px] rounded-xl bg-sky-400/20 flex items-center justify-center shadow-lg">
                                    <img 
                                    src={`/images/cocktails/${cocktail.image}`}
                                    alt={cocktail.name}
                                    className="w-full h-full object-contain"
                                    />
        
                                </div>
                                </div>

                                {/* Cocktail Name */}
                                <h3 className="text-xl font-bold text-center mb-3">
                                {cocktail.name}
                                </h3>

                                {/* Ingredients */}
                                <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-sky-300 text-center mb-2">Ingrediente:</h4>
                                <ul className="space-y-1">
                                    {cocktail.ingredients.map((ingredient, idx) => (
                                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                                        <span className="w-2 h-2 bg-sky-400 rounded-full mr-2 flex-shrink-0"></span>
                                        {ingredient}
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                    ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-4">
                        Toate cocktailurile sunt preparate fresh cu ingrediente premium
                    </p>
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <ArrowLeft size={20} />
                        Înapoi la Meniu Principal
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
