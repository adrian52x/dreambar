import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function TransportationCostDialog() {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" className="border-sky-400 bg-transparent bg-white/5 hover:bg-sky-400/20 text-white hover:text-white mt-4 ">
                PRET TRANSPORT
            </Button>
        </DialogTrigger>
        <DialogContent className="text-white w-[300px] sm:w-[425px] border-1 bg-white/5 backdrop-blur-md shadow-md  shadow-sky-500/50">
                <DialogTitle className="text-center text-sky-400 mb-2">Transport</DialogTitle>
                <div className="p-2 mb-2 text-sm md:text-base text-center">
                    <div className="text-sm md:text-base max-w-lg">
                        Costul transportului este de 350 lei în Chișinău, iar pentru locațiile din afara orașului se adaugă 5 lei pentru fiecare kilometru parcurs.
                        <br /><br />
                        350lei + 5lei/km
                    </div>
                </div>
        </DialogContent>
    </Dialog>
  )
}
