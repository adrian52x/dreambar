import { Instagram, Wine } from "lucide-react";
import { Barman } from "@/icons";


interface BarAndCabinaPackage {
    title: string;
    cabinaDuration: string;
    totalCocktails: number;
    barDuration: number;
    priceEUR: number;
}

interface BarAndCabinaCardProps {
  pkg: BarAndCabinaPackage;
}

export function BarAndCabinaCard({ pkg }: BarAndCabinaCardProps) {
    return (
        <div className="flex flex-col border-t-2 border-b-2 border-sky-400 rounded-xl p-6 bg-white/5 backdrop-blur-sm">
            {/* Header with combo indicator */}
            <div className="text-center mb-4">
                <div className="text-xs font-semibold text-sky-300 uppercase tracking-wide mb-2">
                    PACHET COMBO
                </div>
                <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="flex flex-col items-center">
                        <Instagram size={32} className="text-sky-400 mb-1" />
                        <span className="text-xs text-gray-300">Cabina Foto</span>
                    </div>
                    <div className="text-sky-400 text-xl font-bold">+</div>
                    <div className="flex flex-col items-center">
                        <Barman size={32} className="text-sky-400 mb-1" />
                        <span className="text-xs text-gray-300">Bar Mobil</span>
                    </div>
                </div>
            </div>

            {/* Services details */}
            <div className="space-y-3 mb-4">
                {/* Photo booth duration */}
                <div className="flex items-center justify-between bg-blue-500/10 rounded-lg p-3 border border-blue-400/30">
                    <div className="flex items-center gap-2">
                        <Instagram size={18} className="text-blue-400" />
                        <span className="text-sm font-medium text-blue-300">Cabina Foto</span>
                    </div>
                    <span className="text-sm font-bold text-white">{pkg.cabinaDuration}</span>
                </div>

                {/* Bar cocktails */}
                <div className="flex items-center justify-between bg-orange-500/10 rounded-lg p-3 border border-orange-400/30">
                    <div className="flex items-center gap-2">
                        <Wine size={18} className="text-orange-400" />
                        <span className="text-sm font-medium text-orange-300">Bar Mobil</span>
                    </div>
                    <div className="text-right">
                        <div className="text-sm font-bold text-white">{pkg.barDuration} ore</div>
                        <div className="text-sm font-semibold text-orange-300">{pkg.totalCocktails} cocktailuri</div>
                    </div>
                </div>
            </div>

            {/* Price */}
            <div className="border-t border-sky-400/30 pt-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">
                    {pkg.priceEUR}
                    <span className="text-lg text-gray-300 ml-1">€</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Preț total pachet
                </div>
            </div>
        </div>
    );
}
