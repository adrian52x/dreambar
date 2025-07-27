import { Instagram } from "lucide-react";


interface CabinaFotoPackage {
  duration: string;
  priceEUR: number;
}

interface CabinaFotoCardProps {
  pkg: CabinaFotoPackage;
}

export function CabinaFotoCard({ pkg }: CabinaFotoCardProps) {
    return (
        <div className="flex flex-col border-t-2 border-b-2 border-sky-400 rounded-lg p-6 transition-colors bg-white/5 backdrop-blur-sm will-change-transform">
            <div className="flex flex-col items-center mb-4">
                    <Instagram size={40} className="text-sky-400 mb-2" />
                <div className="text-lg font-bold text-sky-300">{pkg.duration} </div>
            </div>
            <div className="flex justify-center space-x-2 border-t border-sky-400/30 pt-4">
                <div className="flex items-center justify-center space-x-1">
                    <div className="text-xl font-bold text-white">{pkg.priceEUR}</div>
                    <div className="text-sm mt-1 text-gray-300">€</div>
                </div>
                {/* <div className="flex items-center justify-center space-x-1">
                    <div className="text-xl font-bold text-white">/ {pkg.priceEUR}</div>
                    <div className="text-sm mt-1 text-gray-300">€</div>
                </div> */}
            </div>
        </div>
    );
}
