import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";

const images = [
  {
    src: "/images/galerie/galerie1.jpg",
    alt: "Foto Sample 1",
    label: "1."
  },
  {
    src: "/images/galerie/galerie2.jpg",
    alt: "Foto Sample 2",
    label: "2."
  },
  {
    src: "/images/galerie/galerie3.jpg",
    alt: "Foto Sample 3",
    label: "3."
  },
  {
    src: "/images/galerie/galerie4.jpg",
    alt: "Foto Sample 4",
    label: "4."
  },
    {
    src: "/images/galerie/galerie5.jpg",
    alt: "Foto Sample 5",
    label: "5."
  },
  {
    src: "/images/galerie/galerie6.jpg",
    alt: "Foto Sample 6",
    label: "6."
  },
  {
    src: "/images/galerie/galerie7.jpg",
    alt: "Foto Sample 7",
    label: "7."
  },
  {
    src: "/images/galerie/galerie8.jpg",
    alt: "Foto Sample 8",
    label: "8."
  }

];


export function GalleryPage() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-neutral-950">
                <div className="container mx-auto px-4 py-8">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <Link 
                            to="/?tab=photo" 
                            className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <ArrowLeft size={24} />
                            <span>Înapoi</span>
                        </Link>
                        <h1 className="text-3xl md:text-4xl font-bold text-white">
                            Galeria SANAPSTORM
                        </h1>
                    </div>

                    {/* Galeria Grid */}
                    <div className="w-full max-w-6xl mx-auto mb-8 pb-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                            {images.map((img, idx) => (
                                <Dialog key={img.src} open={openIdx === idx} onOpenChange={open => setOpenIdx(open ? idx : null)}>
                                    <DialogTrigger asChild>
                                        <div className="relative group overflow-hidden rounded-xl border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300 cursor-pointer">
                                            <img
                                                src={img.src}
                                                alt={img.alt}
                                                className="w-full h-48 md:h-56 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                                                    {img.label}
                                                </div>
                                            </div>
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl bg-black/90 border-0 p-0 flex flex-col items-center text-white">
                                        <DialogTitle className="sr-only">{img.alt}</DialogTitle>
                                        <DialogDescription className="sr-only">{img.alt}</DialogDescription>
                                        <img src={img.src} alt={img.alt} className="w-full max-h-[80vh] object-contain rounded-xl" />
                                    </DialogContent>
                                </Dialog>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="fixed bottom-0 left-0 right-0 bg-neutral-950/95 backdrop-blur-sm border-t border-sky-400/20 p-4">
                        <div className="text-center">
                            <Link 
                                to="/?tab=photo" 
                                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-6 py-1 rounded-lg font-semibold transition-colors"
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
