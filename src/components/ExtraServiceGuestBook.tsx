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
        <DialogContent className="text-white w-[300px] sm:w-[425px] border-1 bg-white/5 backdrop-blur-md shadow-md  shadow-sky-500/50">
                <DialogTitle className="text-center text-sky-400 mb-2">Guest Book</DialogTitle>
                <div className="p-2 mb-2 text-sm md:text-base text-center">
                    <div className="text-sm md:text-base max-w-lg">
                        Guest book-ul este realizat din sticlă organică, un material de calitate superioară, și este complet personalizabil în funcție de preferințele clientului - de la design, culori, până la mesaje sau nume gravate - 50€.
                    </div>
                </div>
        </DialogContent>
    </Dialog>
  )
}
