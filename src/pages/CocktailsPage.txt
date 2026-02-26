import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { newCocktailsData } from "../data/cocktailsData";
import { useEffect } from "react";

export function CocktailsPage() {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="bg-neutral-950">
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
                            Toate Cocktailurile
                        </h1>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
                        {newCocktailsData.map((item, index) => (
                            <div 
                                key={index}
                                className="text-center space-y-6"
                            >
                                {/* Category Name */}
                                <h2 className="text-2xl md:text-3xl font-bold text-white">
                                    {item.category}
                                </h2>
                                
                                {/* Category Image */}
                                <div className="rounded-xl overflow-hidden shadow-lg">
                                    <img 
                                        src={`/images/cocktails/grouped/${item.image}`}
                                        alt={item.category}
                                        className="w-full h-auto object-cover"
                                    />
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
                            className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-6 py-1 rounded-lg font-semibold transition-colors"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <ArrowLeft size={20} />
                            Înapoi la Meniu Principal
                        </Link>
                    </div>
                </div>
            </div>
    );
}
