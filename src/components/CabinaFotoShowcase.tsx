export function CabinaFotoShowcase() {
    return (
        <div className="w-full max-w-6xl mx-auto mt-6 mb-4">
            <h3 className="text-xl font-bold text-sky-400 text-center mb-4">
                Exemple
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
                <div className="relative group overflow-hidden rounded-xl border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300">
                    <img 
                        src="/images/cabinafoto/cabinafoto1.jpg" 
                        alt="Cabina Foto Sample 1" 
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                            1.
                        </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300">
                    <img 
                        src="/images/cabinafoto/cabinafoto21.jpg" 
                        alt="Cabina Foto Sample 2" 
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                            2.
                        </div>
                    </div>
                </div>
                <div className="relative group overflow-hidden rounded-xl border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300">
                    <img 
                        src="/images/cabinafoto/cabinafoto3.jpg" 
                        alt="Cabina Foto Sample 3" 
                        className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                            3.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
