

import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const images = [
  {
    src: "/images/cabinafoto/cabinafoto1.jpg",
    alt: "Cabina Foto Sample 1",
    label: "1."
  },
  {
    src: "/images/cabinafoto/cabinafoto2.jpg",
    alt: "Cabina Foto Sample 2",
    label: "2."
  },
  {
    src: "/images/cabinafoto/cabinafoto3.jpg",
    alt: "Cabina Foto Sample 3",
    label: "3."
  },
  {
    src: "/images/cabinafoto/cabinafoto4.jpg",
    alt: "Cabina Foto Sample 4",
    label: "4."
  },
  {
    src: "/images/cabinafoto/cabinafoto5.jpg",
    alt: "Cabina Foto Sample 5",
    label: "5."
  },
];

export function CabinaFotoShowcase() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="w-full max-w-6xl mx-auto mt-6 mb-4">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-4">
        {images.map((img, idx) => (
          <Dialog key={img.src} open={openIdx === idx} onOpenChange={open => setOpenIdx(open ? idx : null)}>
            <DialogTrigger asChild>
              <div className="relative group overflow-hidden rounded-xl border border-sky-400/30 hover:border-sky-400/60 transition-all duration-300 cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-60 md:h-[270px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    {img.label}
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-2xl bg-black/90 border-0 p-0 flex flex-col items-center text-white">
                <DialogTitle className="sr-only">{img.alt}</DialogTitle>
                <DialogDescription className="sr-only">{img.alt}</DialogDescription>
                <img src={img.src} alt={img.alt} className="w-full max-h-[80vh] object-contain rounded-xl" />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
