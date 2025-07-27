import { Instagram, Camera, Users } from "lucide-react";


interface CabinaFotoPackage {
  duration: string;
  priceEUR: number;
}

interface CabinaFotoCardProps {
  pkg: CabinaFotoPackage;
}

export function CabinaFotoCard({ pkg }: CabinaFotoCardProps) {
    return (
        <div className="flex flex-col border-t-2 border-b-2 border-sky-400 rounded-xl p-6 bg-white/5 backdrop-blur-sm ">
            {/* Header */}
            <div className="text-center mb-4">
                <div className="text-xs font-semibold text-sky-300 uppercase tracking-wide mb-2">
                    CABINA FOTO
                </div>
                <div className="flex justify-center mb-3">
                    <div className="relative">
                        <Instagram size={48} className="text-sky-400" />
                        <Camera size={20} className="text-sky-300 absolute -top-1 -right-1" />
                    </div>
                </div>
            </div>

            {/* Duration highlight */}
            <div className="bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-lg p-4 mb-4 border border-sky-400/30">
                <div className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{pkg.duration}</div>
                    <div className="text-xs text-sky-300 uppercase tracking-wide">
                        Durată serviciu
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-4 flex-1">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Users size={16} className="text-sky-400" />
                    <span>Fotografii instant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Camera size={16} className="text-sky-400" />
                    <span>Props și fundal inclus</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Instagram size={16} className="text-sky-400" />
                    <span>Sharing social media</span>
                </div>
            </div>

            {/* Price */}
            <div className="border-t border-sky-400/30 pt-4 text-center">
                <div className="text-2xl font-bold text-white mb-1">
                    {pkg.priceEUR}
                    <span className="text-lg text-sky-300 ml-1">€</span>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">
                    Preț total
                </div>
            </div>
        </div>
    );
}
