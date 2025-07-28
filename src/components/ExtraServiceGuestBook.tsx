import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ExtraServiceGuestBook() {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" className="text-lg border-sky-400 bg-transparent bg-white/5 hover:bg-sky-400/20 text-white hover:text-white mt-4 ">
                +50€ Guest Book (serviciu extra)
            </Button>
        </DialogTrigger>
        <DialogContent className="text-white w-[320px] sm:w-[500px] max-w-[90vw] border-1 bg-white/5 backdrop-blur-md shadow-md shadow-sky-500/50">
                <DialogTitle className="text-center text-sky-400 mb-4">Guest Book</DialogTitle>
                <div className="p-2 mb-2 text-sm md:text-base text-center">
                    <div className="text-sm md:text-base max-w-lg">
                        Guest book-ul este realizat din sticlă organică, un material de calitate superioară, și este complet personalizabil în funcție de preferințele clientului - de la design, culori, până la mesaje sau nume gravate - 50€.
                    </div>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    <div className="aspect-square rounded-lg overflow-hidden border border-sky-400/30 hover:border-sky-400/60 transition-colors">
                        <img 
                            src="/images/guest-book/book1.jpg" 
                            alt="Guest Book Design 1" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden border border-sky-400/30 hover:border-sky-400/60 transition-colors">
                        <img 
                            src="/images/guest-book/book2.jpg" 
                            alt="Guest Book Design 2" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden border border-sky-400/30 hover:border-sky-400/60 transition-colors col-span-2 sm:col-span-1">
                        <img 
                            src="/images/guest-book/book3.jpg" 
                            alt="Guest Book Design 3" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
        </DialogContent>
    </Dialog>
  )
}
